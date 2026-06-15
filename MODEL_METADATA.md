# 3D Model Metadata Map: `chair.glb`

This document defines the geometry bounds, component mapping, and custom shader segmentation rules for the Obsidian Atelier luxury configurator chair model. Any AI coding agent can read this file to understand the mesh structure and coordinate spaces.

---

## 1. Specifications

*   **GLB File Location**: `obsidian-atelier/public/models/chair.glb` & `chroma-forge/public/models/chair.glb`
*   **Total Vertices**: `282,127`
*   **Total Connected Components**: `1,415`
*   **Base Material Name**: `Material.001` (Monolithic single-mesh material)
*   **Original Export Axes**: Z-Up (requires rotation `[Math.PI / 2, 0, 0]` to align to Y-Up in Three.js)

---

## 2. Bounding Boxes

### Geometry Coordinates (Raw GLB space, before rotation)
*   **X (Left-Right)**: `[-0.353, 0.340]` (center: `-0.0065`)
*   **Y (Depth/Back-Front)**: `[-0.331, 0.382]` (center: `0.0255`)
*   **Z (Height/Bottom-Top)**: `[-0.672, -0.001]` (center: `-0.3365`)

### Mesh Coordinates (After `Math.PI / 2` rotation on X-axis)
*   **X**: `[-0.353, 0.340]`
*   **Y**: `[0.001, 0.672]`
*   **Z**: `[-0.331, 0.382]`

### Geometry-Centering Offset Translation
To rotate the chair perfectly in place on its own center pivot without a "pendulum swing," apply the following offset to the `<mesh>` position:
```tsx
position={[0.0065, -0.0255, 0.3365]}
```

---

## 3. Material Swatch Segmentation

Since the model is exported as a single mesh with one material, segments are separated in the custom fragment shader using local model-space coordinates passed from the vertex shader (`vPosition = position`).

| Swatch Category | Description | GLSL Shader Threshold Condition |
| :--- | :--- | :--- |
| **DETAILS** | Bright metal cutout accents inside the side armrests. | `texelColor.r > 0.55 && texelColor.g > 0.55 && texelColor.b > 0.45` (Bright texture pixels) |
| **FRAME** | Dark walnut wood legs, subframe rails, and back support rods. | `vPosition.y < -0.12` (Legs)<br> `(abs(vPosition.x) > 0.22 && vPosition.y < 0.08)` (Side rails)<br> `(vPosition.z < -0.45 && vPosition.y < 0.1)` (Back supports) |
| **FABRIC** | Soft seat cushions, backrest cushions, and armrest pads. | Default fallback (`else` clause) |

---

## 4. Production GLSL Shader Code

To compile this mapping in Three.js, patch the shader's `map_fragment` using `onBeforeCompile` inside the model renderer component:

```glsl
#ifdef USE_MAP
  // Read base color map texel
  vec4 texelColor = texture2D( map, vMapUv );
  vec3 tintedColor = texelColor.rgb;
  
  // 1. Details (cutout metal accent plates inside armrests)
  if (texelColor.r > 0.55 && texelColor.g > 0.55 && texelColor.b > 0.45) {
    tintedColor = tintedColor * uDetailsColor;
  } 
  // 2. Frame (legs, side rails, and back rods)
  else if (vPosition.y < -0.12 || (abs(vPosition.x) > 0.22 && vPosition.y < 0.08) || (vPosition.z < -0.45 && vPosition.y < 0.1)) {
    tintedColor = tintedColor * uFrameColor;
  } 
  // 3. Fabric (cushions and padding)
  else {
    tintedColor = tintedColor * uFabricColor;
  }
  
  diffuseColor *= vec4(tintedColor, texelColor.a);
#endif
```
