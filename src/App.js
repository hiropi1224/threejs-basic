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
      <meshBasicMaterial color='blue' />
    </mesh>
  );
};

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
        <Box position={[-1, 1, 1]} />
        <Orbit />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}
