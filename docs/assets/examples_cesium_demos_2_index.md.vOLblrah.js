import"./chunks/widgets.l0sNRNKZ.js";import{a as k,e as F,p as H,q as x,t as P,F as N,ai as R,V as $,u as M}from"./chunks/framework.BaQPFwRT.js";const L=P("div",{id:"toolbar"},null,-1),U={__name:"demo",setup(I){const C=k();return F(async()=>{const o=new Cesium.Viewer(C.value,{});o.clock.currentTime=Cesium.JulianDate.fromIso8601("2021-11-09T07:27:37.016064475348684937Z");const s=o.scene;s.light.intensity=7;const l={tileset:{destination:new Cesium.Cartesian3(4397999822774582e-9,440450267774069e-8,1.3977824709840622e6),direction:new Cesium.Cartesian3(-.29335588497705106,-.6066709587467911,.7388454997917905),up:new Cesium.Cartesian3(.6240972421637774,.46391380837591956,.6287182283994301)},airport:{destination:new Cesium.Cartesian3(4394719151490939e-9,4402317401942875e-9,1.4066086602404779e6),direction:new Cesium.Cartesian3(.4146699515908668,-.8887814163588482,.1952342828060377),up:new Cesium.Cartesian3(.8415067525520951,.4561872920946922,.28941240460723)},crater:{destination:new Cesium.Cartesian3(4398179160380196e-9,4402518469409466e-9,1.3991617612076725e6),direction:new Cesium.Cartesian3(-.2800903637088597,-.6348021519070498,.7201219452923355),up:new Cesium.Cartesian3(.6319189548885261,.4427783126727723,.6361020360596605)},port:{destination:new Cesium.Cartesian3(439969885724341e-8,4399019639078034e-9,1.4051537766045567e6),direction:new Cesium.Cartesian3(-.5651458936543287,.17696574231117793,-.8057873447342694),up:new Cesium.Cartesian3(.4886488937394081,.8587605935024302,-.15411846642958343)}};function m(r,e){o.camera.flyTo({duration:e,destination:r.destination,orientation:{direction:r.direction,up:r.up},easingFunction:Cesium.EasingFunction.QUADRATIC_IN_OUT})}const A=new Cesium.Cesium3DTileStyle({color:{conditions:[["${HGT} !== undefined && ${HGT} < 5","color('#f5fd2d')"],["${HGT} !== undefined && ${HGT} >= 5 && ${HGT} < 10","color('#d3a34a')"],["${HGT} !== undefined && ${HGT} >= 10 && ${HGT} < 15","color('#947e75')"],["${HGT} !== undefined && ${HGT} >= 15 && ${HGT} < 20","color('#565a9f')"],["${HGT} !== undefined && ${HGT} > 20","color('#223bc3')"],["true","color('white')"]]}}),E=new Cesium.Cesium3DTileStyle({color:{conditions:[["${name} === 'OCEAN'","color('#436d9d')"],["${name} === 'LAKE'","color('#3987c9')"],["${name} === 'CALCAREOUS'","color('#BBB6B1')"],["${name} === 'GRASS'","color('#567d46')"],["${name} === 'FOREST'","color('green')"],["${name} === 'CITY'","color('lightgray')"],["${name} === 'ASPHALTROAD'","color('#434343')"],["${name} === 'ASPHALT'","color('#463d39')"],["${name} === 'CONCRETE'","color('#b9b4ab')"],["${name} === 'DRYGROUND'","color('#9B7653')"],["${name} === 'WETGROUND'","color('#5a4332')"],["${name} === 'SAND'","color('gold')"],["true","color('#9B7653')"]]}});let f=!0;const b=new Cesium.ScreenSpaceEventHandler(s.canvas),n=document.createElement("div");o.container.appendChild(n),n.className="backdrop",n.style.display="none",n.style.position="absolute",n.style.bottom="0",n.style.left="0",n.style["pointer-events"]="none",n.style.padding="4px",n.style.backgroundColor="#303030",n.style.whiteSpace="pre-line",n.style.fontSize="16px",n.style.borderRadius="4px";let a,h,v,c;const t={feature:void 0,originalColor:new Cesium.Color},i={feature:void 0,originalColor:new Cesium.Color};b.setInputAction(function(r){if(f){Cesium.defined(t.feature)&&(t.feature.color=t.originalColor,t.feature=void 0);const e=s.pick(r.endPosition),p=e instanceof Cesium.Cesium3DTileFeature,y=p&&e.hasProperty("substrates"),g=p&&e.hasProperty("HGT");if(y){for(n.style.display="block",n.style.bottom=`${o.canvas.clientHeight-r.endPosition.y}px`,n.style.left=`${r.endPosition.x}px`,a=`<table><thead><tr><td>Material:</td><th><tt>${e.getProperty("name")}</tt></tr></thead><tbody>`,h=e.getProperty("substrates"),v=e.getProperty("weights"),a+="<tr><td colspan='2' style='text-align: center;'><b>Substrates</b></td></tr>",c=0;c<h.length;c++)a+=`<tr><td><tt>${h[c].slice(3)}</tt></td><td style='text-align: right;'><tt>${v[c]}%</tt></td></tr>`;a+="</tbody></table>",n.innerHTML=a}else n.style.display="none";g&&e!==i.feature&&(t.feature=e,Cesium.Color.clone(e.color,t.originalColor),e.color=Cesium.Color.MAGENTA)}},Cesium.ScreenSpaceEventType.MOUSE_MOVE),b.setInputAction(function(r){Cesium.defined(i.feature)&&(i.feature.color=i.originalColor,i.feature=void 0);const e=s.pick(r.position);if(e instanceof Cesium.Cesium3DTileFeature&&e.hasProperty("HGT")){if(i.feature===e)return;i.feature=e,e===t.feature?(Cesium.Color.clone(t.originalColor,i.originalColor),t.feature=void 0):Cesium.Color.clone(e.color,i.originalColor),e.color=Cesium.Color.LIME,a="<table class='cesium-infoBox-defaultTable'>",a+="<tr><th>Property Name</th><th>ID</th><th>Type</th><th>Value</th></tr><tbody>";const g=e.content.batchTable._propertyTable.class,w=e.getPropertyIds(),G=w.length;for(let T=0;T<G;++T){const d=w[T];if(d==="APID"||d==="FACC"||d==="RWID")continue;const B=e.getProperty(d),u=g.properties[d],_=Cesium.defaultValue(u.componentType,u.type);a+=`<tr style='font-family: monospace;' title='${u.description}'><th>${u.name}</th><th><b>${u.id}</b></th><td>${_}</td><td>${B}</td></tr>`}a+="<tr><th colspan='4'><i style='font-size:10px'>Hover on a row for description</i></th></tr></tbody></table>",o.selectedEntity.description=a}},Cesium.ScreenSpaceEventType.LEFT_CLICK);const O=document.getElementsByClassName("cesium-viewer-infoBoxContainer").item(0);O.onmouseover=function(r){n.style.display="none"};const D=[{text:"Overview",onselect:function(){m(l.tileset)}},{text:"Airport",onselect:function(){m(l.airport)}},{text:"Crater",onselect:function(){m(l.crater)}},{text:"Port",onselect:function(){m(l.port)}}];function S(){Cesium.defined(i.feature)&&(i.feature.color=i.originalColor,i.feature=void 0),Cesium.defined(t.feature)&&(t.feature.color=t.originalColor,t.feature=void 0)}try{const r=await Cesium.Cesium3DTileset.fromIonAssetId(2389063);o.scene.primitives.add(r);const e=await Cesium.Cesium3DTileset.fromIonAssetId(2389064,{maximumScreenSpaceError:12});o.scene.primitives.add(e);const p=Cesium.Cartesian3.fromDegrees(45.04192,12.753525,2e3);o.camera.flyTo({duration:0,destination:l.tileset.destination,orientation:{direction:l.tileset.direction,up:l.tileset.up}});const y=[{text:"No style",onselect:function(){S(),e.style=void 0,r.style=void 0}},{text:"Style buildings based on height",onselect:function(){S(),e.style=A,r.style=void 0}},{text:"Style terrain based on materials",onselect:function(){e.style=void 0,r.style=E}}];Sandcastle.addToolbarMenu(y)}catch(r){console.log(`Error loading tileset: ${r}`)}Sandcastle.addToolbarMenu(D),Sandcastle.addToggleButton("Enable terrain picking",f,function(r){f&&(n.style.display="none"),f=r})}),(o,s)=>(H(),x(N,null,[P("div",{ref_key:"dom",ref:C,class:"fullSize demo-viewer"},null,512),L],64))}},V=`<template>\r
  <div ref="dom" class="fullSize demo-viewer"></div>\r
  <div id="toolbar"></div>\r
</template>\r
\r
<script setup>\r
import * as Cesium from "cesium";\r
import "cesium/Build/Cesium/Widgets/widgets.css";\r
\r
const dom = ref();\r
onMounted(async () => {\r
  const viewer = new Cesium.Viewer(dom.value, {});\r
  viewer.clock.currentTime = Cesium.JulianDate.fromIso8601(\r
    "2021-11-09T07:27:37.016064475348684937Z"\r
  );\r
\r
\r
\r
  const scene = viewer.scene;\r
  scene.light.intensity = 7.0;\r
\r
  const cameraTransforms = {\r
    tileset: {\r
      destination: new Cesium.Cartesian3(\r
        4397999.822774582,\r
        4404502.67774069,\r
        1397782.4709840622\r
      ),\r
      direction: new Cesium.Cartesian3(\r
        -0.29335588497705106,\r
        -0.6066709587467911,\r
        0.7388454997917905\r
      ),\r
      up: new Cesium.Cartesian3(\r
        0.6240972421637774,\r
        0.46391380837591956,\r
        0.6287182283994301\r
      ),\r
    },\r
    airport: {\r
      destination: new Cesium.Cartesian3(\r
        4394719.151490939,\r
        4402317.401942875,\r
        1406608.6602404779\r
      ),\r
      direction: new Cesium.Cartesian3(\r
        0.4146699515908668,\r
        -0.8887814163588482,\r
        0.1952342828060377\r
      ),\r
      up: new Cesium.Cartesian3(\r
        0.8415067525520951,\r
        0.4561872920946922,\r
        0.28941240460723\r
      ),\r
    },\r
    crater: {\r
      destination: new Cesium.Cartesian3(\r
        4398179.160380196,\r
        4402518.469409466,\r
        1399161.7612076725\r
      ),\r
      direction: new Cesium.Cartesian3(\r
        -0.2800903637088597,\r
        -0.6348021519070498,\r
        0.7201219452923355\r
      ),\r
      up: new Cesium.Cartesian3(\r
        0.6319189548885261,\r
        0.4427783126727723,\r
        0.6361020360596605\r
      ),\r
    },\r
    port: {\r
      destination: new Cesium.Cartesian3(\r
        4399698.85724341,\r
        4399019.639078034,\r
        1405153.7766045567\r
      ),\r
      direction: new Cesium.Cartesian3(\r
        -0.5651458936543287,\r
        0.17696574231117793,\r
        -0.8057873447342694\r
      ),\r
      up: new Cesium.Cartesian3(\r
        0.4886488937394081,\r
        0.8587605935024302,\r
        -0.15411846642958343\r
      ),\r
    },\r
  };\r
\r
  function flyCameraTo(cameraTransform, duration) {\r
    // Fly to a nice overview of the city.\r
    viewer.camera.flyTo({\r
      duration: duration,\r
      destination: cameraTransform.destination,\r
      orientation: {\r
        direction: cameraTransform.direction,\r
        up: cameraTransform.up,\r
      },\r
      easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,\r
    });\r
  }\r
\r
  // --- Style ---\r
\r
  const buildingStyle = new Cesium.Cesium3DTileStyle({\r
    color: {\r
      conditions: [\r
        ["\${HGT} !== undefined && \${HGT} < 5", "color('#f5fd2d')"],\r
        [\r
          "\${HGT} !== undefined && \${HGT} >= 5 && \${HGT} < 10",\r
          "color('#d3a34a')",\r
        ],\r
        [\r
          "\${HGT} !== undefined && \${HGT} >= 10 && \${HGT} < 15",\r
          "color('#947e75')",\r
        ],\r
        [\r
          "\${HGT} !== undefined && \${HGT} >= 15 && \${HGT} < 20",\r
          "color('#565a9f')",\r
        ],\r
        ["\${HGT} !== undefined && \${HGT} > 20", "color('#223bc3')"],\r
        ["true", "color('white')"],\r
      ],\r
    },\r
  });\r
\r
  const terrainStyle = new Cesium.Cesium3DTileStyle({\r
    color: {\r
      conditions: [\r
        ["\${name} === 'OCEAN'", "color('#436d9d')"],\r
        ["\${name} === 'LAKE'", "color('#3987c9')"],\r
        ["\${name} === 'CALCAREOUS'", "color('#BBB6B1')"],\r
        ["\${name} === 'GRASS'", "color('#567d46')"],\r
        ["\${name} === 'FOREST'", "color('green')"],\r
        ["\${name} === 'CITY'", "color('lightgray')"],\r
        ["\${name} === 'ASPHALTROAD'", "color('#434343')"],\r
        ["\${name} === 'ASPHALT'", "color('#463d39')"],\r
        ["\${name} === 'CONCRETE'", "color('#b9b4ab')"],\r
        ["\${name} === 'DRYGROUND'", "color('#9B7653')"],\r
        ["\${name} === 'WETGROUND'", "color('#5a4332')"],\r
        ["\${name} === 'SAND'", "color('gold')"],\r
        ["true", "color('#9B7653')"],\r
      ],\r
    },\r
  });\r
\r
  // --- Picking ---\r
\r
  let enablePicking = true;\r
  const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);\r
\r
  const metadataOverlay = document.createElement("div");\r
  viewer.container.appendChild(metadataOverlay);\r
  metadataOverlay.className = "backdrop";\r
  metadataOverlay.style.display = "none";\r
  metadataOverlay.style.position = "absolute";\r
  metadataOverlay.style.bottom = "0";\r
  metadataOverlay.style.left = "0";\r
  metadataOverlay.style["pointer-events"] = "none";\r
  metadataOverlay.style.padding = "4px";\r
  metadataOverlay.style.backgroundColor = "#303030";\r
  metadataOverlay.style.whiteSpace = "pre-line";\r
  metadataOverlay.style.fontSize = "16px";\r
  metadataOverlay.style.borderRadius = "4px";\r
\r
  let tableHtmlScratch;\r
  let materialsScratch;\r
  let weightsScratch;\r
  let i;\r
\r
  const highlighted = {\r
    feature: undefined,\r
    originalColor: new Cesium.Color(),\r
  };\r
\r
  const selected = {\r
    feature: undefined,\r
    originalColor: new Cesium.Color(),\r
  };\r
\r
  handler.setInputAction(function (movement) {\r
    if (enablePicking) {\r
      // If a feature was previously highlighted, undo the highlight\r
      if (Cesium.defined(highlighted.feature)) {\r
        highlighted.feature.color = highlighted.originalColor;\r
        highlighted.feature = undefined;\r
      }\r
\r
      const feature = scene.pick(movement.endPosition);\r
      const featurePicked = feature instanceof Cesium.Cesium3DTileFeature;\r
\r
      const isTerrainFeature =\r
        featurePicked && feature.hasProperty("substrates");\r
      const isBuildingFeature = featurePicked && feature.hasProperty("HGT");\r
\r
      if (isTerrainFeature) {\r
        metadataOverlay.style.display = "block";\r
        metadataOverlay.style.bottom = \`\${\r
          viewer.canvas.clientHeight - movement.endPosition.y\r
        }px\`;\r
        metadataOverlay.style.left = \`\${movement.endPosition.x}px\`;\r
\r
        tableHtmlScratch = \`<table><thead><tr><td>Material:</td><th><tt>\${feature.getProperty(\r
          "name"\r
        )}</tt></tr></thead><tbody>\`;\r
\r
        materialsScratch = feature.getProperty("substrates");\r
        weightsScratch = feature.getProperty("weights");\r
        tableHtmlScratch +=\r
          "<tr><td colspan='2' style='text-align: center;'><b>Substrates</b></td></tr>";\r
\r
        for (i = 0; i < materialsScratch.length; i++) {\r
          tableHtmlScratch += \`<tr><td><tt>\${materialsScratch[i].slice(\r
            3\r
          )}</tt></td><td style='text-align: right;'><tt>\${\r
            weightsScratch[i]\r
          }%</tt></td></tr>\`;\r
        }\r
        tableHtmlScratch += "</tbody></table>";\r
        metadataOverlay.innerHTML = tableHtmlScratch;\r
      } else {\r
        metadataOverlay.style.display = "none";\r
      }\r
\r
      if (isBuildingFeature) {\r
        // Highlight the feature if it's not already selected.\r
        if (feature !== selected.feature) {\r
          highlighted.feature = feature;\r
          Cesium.Color.clone(feature.color, highlighted.originalColor);\r
          feature.color = Cesium.Color.MAGENTA;\r
        }\r
      }\r
    }\r
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);\r
\r
  handler.setInputAction(function (movement) {\r
    // If a feature was previously selected, undo the highlight\r
    if (Cesium.defined(selected.feature)) {\r
      selected.feature.color = selected.originalColor;\r
      selected.feature = undefined;\r
    }\r
\r
    const feature = scene.pick(movement.position);\r
    const featurePicked = feature instanceof Cesium.Cesium3DTileFeature;\r
    const isBuildingFeature = featurePicked && feature.hasProperty("HGT");\r
\r
    if (isBuildingFeature) {\r
      // Select the feature if it's not already selected\r
      if (selected.feature === feature) {\r
        return;\r
      }\r
      selected.feature = feature;\r
\r
      // Save the selected feature's original color\r
      if (feature === highlighted.feature) {\r
        Cesium.Color.clone(highlighted.originalColor, selected.originalColor);\r
        highlighted.feature = undefined;\r
      } else {\r
        Cesium.Color.clone(feature.color, selected.originalColor);\r
      }\r
      feature.color = Cesium.Color.LIME;\r
\r
      tableHtmlScratch = "<table class='cesium-infoBox-defaultTable'>";\r
      tableHtmlScratch +=\r
        "<tr><th>Property Name</th><th>ID</th><th>Type</th><th>Value</th></tr><tbody>";\r
      const metadataClass = feature.content.batchTable._propertyTable.class;\r
      const propertyIds = feature.getPropertyIds();\r
      const length = propertyIds.length;\r
      for (let i = 0; i < length; ++i) {\r
        const propertyId = propertyIds[i];\r
\r
        // Skip these properties, since they are always empty.\r
        if (\r
          propertyId === "APID" ||\r
          propertyId === "FACC" ||\r
          propertyId === "RWID"\r
        ) {\r
          continue;\r
        }\r
\r
        const propertyValue = feature.getProperty(propertyId);\r
        const property = metadataClass.properties[propertyId];\r
\r
        const propertyType = Cesium.defaultValue(\r
          property.componentType,\r
          property.type\r
        );\r
        tableHtmlScratch += \`<tr style='font-family: monospace;' title='\${property.description}'><th>\${property.name}</th><th><b>\${property.id}</b></th><td>\${propertyType}</td><td>\${propertyValue}</td></tr>\`;\r
      }\r
      tableHtmlScratch +=\r
        "<tr><th colspan='4'><i style='font-size:10px'>Hover on a row for description</i></th></tr></tbody></table>";\r
      viewer.selectedEntity.description = tableHtmlScratch;\r
    }\r
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);\r
\r
  // Hide the terrain metadata overlay when the mouse is over the info box, to prevent overlaps.\r
  const infoBoxContainer = document\r
    .getElementsByClassName("cesium-viewer-infoBoxContainer")\r
    .item(0);\r
  infoBoxContainer.onmouseover = function (e) {\r
    metadataOverlay.style.display = "none";\r
  };\r
\r
  // --- UI ---\r
\r
  const locations = [\r
    {\r
      text: "Overview",\r
      onselect: function () {\r
        flyCameraTo(cameraTransforms.tileset);\r
      },\r
    },\r
    {\r
      text: "Airport",\r
      onselect: function () {\r
        flyCameraTo(cameraTransforms.airport);\r
      },\r
    },\r
    {\r
      text: "Crater",\r
      onselect: function () {\r
        flyCameraTo(cameraTransforms.crater);\r
      },\r
    },\r
    {\r
      text: "Port",\r
      onselect: function () {\r
        flyCameraTo(cameraTransforms.port);\r
      },\r
    },\r
  ];\r
\r
  function resetHighlight() {\r
    if (Cesium.defined(selected.feature)) {\r
      selected.feature.color = selected.originalColor;\r
      selected.feature = undefined;\r
    }\r
    if (Cesium.defined(highlighted.feature)) {\r
      highlighted.feature.color = highlighted.originalColor;\r
      highlighted.feature = undefined;\r
    }\r
  }\r
\r
  try {\r
    // 3D Tiles 1.1 converted from CDB of Aden, Yemen (CDB provided by Presagis)\r
    const terrainTileset = await Cesium.Cesium3DTileset.fromIonAssetId(2389063);\r
    viewer.scene.primitives.add(terrainTileset);\r
    const buildingsTileset = await Cesium.Cesium3DTileset.fromIonAssetId(\r
      2389064,\r
      {\r
        maximumScreenSpaceError: 12,\r
      }\r
    );\r
    viewer.scene.primitives.add(buildingsTileset);\r
    const center = Cesium.Cartesian3.fromDegrees(45.04192, 12.753525, 2000);\r
\r
    viewer.camera.flyTo({\r
      duration: 0,\r
      destination: cameraTransforms.tileset.destination,\r
      orientation: {\r
        direction: cameraTransforms.tileset.direction,\r
        up: cameraTransforms.tileset.up,\r
      },\r
    });\r
\r
    const modes = [\r
      {\r
        text: "No style",\r
        onselect: function () {\r
          resetHighlight();\r
          buildingsTileset.style = undefined;\r
          terrainTileset.style = undefined;\r
        },\r
      },\r
      {\r
        text: "Style buildings based on height",\r
        onselect: function () {\r
          resetHighlight();\r
          buildingsTileset.style = buildingStyle;\r
          terrainTileset.style = undefined;\r
        },\r
      },\r
      {\r
        text: "Style terrain based on materials",\r
        onselect: function () {\r
          buildingsTileset.style = undefined;\r
          terrainTileset.style = terrainStyle;\r
        },\r
      },\r
    ];\r
    Sandcastle.addToolbarMenu(modes);\r
  } catch (error) {\r
    console.log(\`Error loading tileset: \${error}\`);\r
  }\r
\r
  Sandcastle.addToolbarMenu(locations);\r
  Sandcastle.addToggleButton(\r
    "Enable terrain picking",\r
    enablePicking,\r
    function (checked) {\r
      if (enablePicking) {\r
        metadataOverlay.style.display = "none";\r
      }\r
\r
      enablePicking = checked;\r
    }\r
  );\r
});\r
<\/script>\r
\r
<style lang="scss">\r
.demo-viewer {\r
  height: 600px;\r
  margin-bottom: 40px;\r
}\r
</style>\r
`,K=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/cesium/demos/2/index.md","filePath":"examples/cesium/demos/2/index.md","lastUpdated":null}'),z={name:"examples/cesium/demos/2/index.md"},J=Object.assign(z,{setup(I){return(C,o)=>{const s=R("show-code");return H(),x("div",null,[$(U),$(s,{code:M(V)},null,8,["code"])])}}});export{K as __pageData,J as default};
