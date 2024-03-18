"use client";
import { Canvas, type ThreeElements } from "@react-three/fiber";
import {
  Text,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
  CameraControls,
  Float,
} from "@react-three/drei";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        <spotLight
          position={[20, 20, 10]}
          penumbra={1}
          castShadow
          angle={0.2}
        />
        <Environment preset="city">
          <Lightformer
            intensity={0.25}
            position={[10, 5, 0]}
            scale={[10, 50, 1]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
        <CameraControls />
        <Float>
          <Torus position={[0, 0, 3]} rotation={[60, 60, 45]} />
        </Float>
        <Text
          fontSize={12}
          letterSpacing={-0.025}
          color="#ffffff"
          position={[0, 0, -6]}
          fontWeight={700}
        >
          hello
        </Text>
        <Plane position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Canvas>
    </div>
  );
}

const Torus = (props: ThreeElements["mesh"]) => (
  <mesh {...props} receiveShadow>
    <torusGeometry args={[3, 1.5, 128, 64]} />
    <MeshTransmissionMaterial backside backsideThickness={2} thickness={2} />
  </mesh>
);

const Plane = (props: ThreeElements["mesh"]) => (
  <mesh {...props} receiveShadow>
    <planeGeometry args={[100, 100, 2, 2]} />
    <MeshReflectorMaterial
      mirror={1}
      blur={[300, 300]}
      mixBlur={1}
      resolution={256}
      mixStrength={100}
      roughness={1}
      color="#050505"
      depthScale={1.2}
      minDepthThreshold={0.4}
      maxDepthThreshold={1.4}
      metalness={1}
    />
  </mesh>
);
