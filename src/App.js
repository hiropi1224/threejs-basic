import { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color='blue' />
    </mesh>
  );
};

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        {/* ライトを追加 */}
        <ambientLight intensity={0.5} />
        <Box position={[-1, 1, 1]} />
        <Orbit />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}
