import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    node_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

interface ChairModelProps extends React.ComponentPropsWithoutRef<'group'> {
  color: string;
}

export function ChairModel({ color, ...props }: ChairModelProps) {
  const { nodes, materials } = useGLTF('/models/chair.glb') as unknown as GLTFResult
  
  // Clone the material and use onBeforeCompile to patch the fragment shader,
  // allowing us to apply a single color tint to the entire texture map.
  const customMaterial = useMemo(() => {
    const mat = materials['Material.001'].clone();
    
    mat.userData.uniforms = {
      uColor: { value: new THREE.Color('#ffffff') },
    };
    
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uColor = mat.userData.uniforms.uColor;
      
      // Inject uniform into fragment shader
      shader.fragmentShader = `
        uniform vec3 uColor;
      ` + shader.fragmentShader;
      
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <map_fragment>',
        `
        #ifdef USE_MAP
          vec4 texelColor = texture2D( map, vMapUv );
          vec3 tintedColor = texelColor.rgb * uColor;
          diffuseColor *= vec4(tintedColor, texelColor.a);
        #endif
        `
      );
    };
    
    return mat;
  }, [materials]);

  // Update uniform when color changes in React state
  React.useEffect(() => {
    if (customMaterial.userData.uniforms) {
      customMaterial.userData.uniforms.uColor.value.set(color);
    }
  }, [customMaterial, color]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh 
          geometry={nodes.node_0.geometry} 
          material={customMaterial} 
          position={[0.0065, -0.0255, 0.3365]} 
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/chair.glb')
