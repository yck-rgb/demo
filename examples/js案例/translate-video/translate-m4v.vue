<template>
  <video :src="video" controls />
  <br />
  <button @click="transcode">Start</button>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { FFmpeg } from "@ffmpeg/ffmpeg";
import type { LogEvent } from "@ffmpeg/ffmpeg/dist/esm/types";
//   import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { defineComponent, ref } from "vue";
const downloadWithProgress = async (url, cb) => {
  const resp = await fetch(url);
  let buf;
  try {
    // Set total to -1 to indicate that there is not Content-Type Header.
    const total = parseInt(resp.headers.get(HeaderContentLength) || "-1");
    const reader = resp.body?.getReader();
    if (!reader) throw ERROR_RESPONSE_BODY_READER;
    const chunks = [];
    let received = 0;
    for (;;) {
      const { done, value } = await reader.read();
      const delta = value ? value.length : 0;
      if (done) {
        if (total != -1 && total !== received) throw ERROR_INCOMPLETED_DOWNLOAD;
        cb && cb({ url, total, received, delta, done });
        break;
      }
      chunks.push(value);
      received += delta;
      cb && cb({ url, total, received, delta, done });
    }
    const data = new Uint8Array(received);
    let position = 0;
    for (const chunk of chunks) {
      data.set(chunk, position);
      position += chunk.length;
    }
    buf = data.buffer;
  } catch (e) {
    console.log(`failed to send download progress event: `, e);
    // Fetch arrayBuffer directly when it is not possible to get progress.
    buf = await resp.arrayBuffer();
    cb &&
      cb({
        url,
        total: buf.byteLength,
        received: buf.byteLength,
        delta: 0,
        done: true,
      });
  }
  return buf;
};

async function toBlobURL(url, mimeType, progress = false, cb): Promise<any> {
  const buf = progress
    ? await downloadWithProgress(url, cb)
    : await (await fetch(url)).arrayBuffer();
  const blob = new Blob([buf], { type: mimeType });
  return URL.createObjectURL(blob);
}
const readFromBlobOrFile = (blob) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const { result } = fileReader;
      if (result instanceof ArrayBuffer) {
        resolve(new Uint8Array(result));
      } else {
        resolve(new Uint8Array());
      }
    };
    fileReader.onerror = (event) => {
      reject(
        Error(
          `File could not be read! Code=${event?.target?.error?.code || -1}`
        )
      );
    };
    fileReader.readAsArrayBuffer(blob);
  });

async function fetchFile(file) {
  let data;
  if (typeof file === "string") {
    /* From base64 format */
    if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(file)) {
      data = atob(file.split(",")[1])
        .split("")
        .map((c) => c.charCodeAt(0));
      /* From remote server/URL */
    } else {
      data = await (await fetch(file)).arrayBuffer();
    }
  } else if (file instanceof URL) {
    data = await (await fetch(file)).arrayBuffer();
  } else if (file instanceof File || file instanceof Blob) {
    data = await readFromBlobOrFile(file);
  } else {
    return new Uint8Array();
  }
  return new Uint8Array(data);
}

const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm";
//   const videoURL = '2.m4v'
const videoURL = "/videos/2.m4v";

export default defineComponent({
  name: "App",
  setup() {
    const message = ref("Click Start to Transcode");
    let video = ref("");
    const ffmpeg = new FFmpeg();
    console.log(ffmpeg);

    async function transcode() {
      ffmpeg.terminate();
      message.value = "Loading ffmpeg-core.js";
      ffmpeg.on("log", ({ message: msg }: LogEvent) => {
        message.value = msg;
      });

      await ffmpeg.load({
        coreURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          "text/javascript"
        ),
        wasmURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          "application/wasm"
        ),
        workerURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.worker.js`,
          "text/javascript"
        ),
      });

      message.value = "Start transcoding";
      await ffmpeg.writeFile("2.m4v", await fetchFile(videoURL));

      await ffmpeg.exec(["-i", "2.m4v", "test.mp4"]);
      message.value = "Complete transcoding";
      const data = await ffmpeg.readFile("test.mp4");
      await ffmpeg.deleteFile("2.m4v");
      await ffmpeg.deleteFile("test.mp4");
      video.value = URL.createObjectURL(
        new Blob([(data as Uint8Array).buffer], { type: "video/mp4" })
      );
    }
    return {
      video,
      message,
      transcode,
    };
  },
});
</script>

<style></style>
