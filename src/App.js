import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color='blue' />
    </mesh>
  );
};

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas style={{ background: "black" }}>
        <Box />
      </Canvas>
    </div>
  );
}
