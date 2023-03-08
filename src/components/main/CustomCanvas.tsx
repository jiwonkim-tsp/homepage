import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import icon from "./../../assets/model/Hi.glb?url";

function Icon() {
  const gltf = useLoader(GLTFLoader, icon);
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  );
}

const CustomCanvas = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <Suspense fallback={<Box />}>
          <Icon />
        </Suspense>
      </Canvas>
    </>
  );
};

export default CustomCanvas;
