import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const WireframeDrone = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;
    }
  });

  const armPositions: [number, number, number][] = [
    [1.2, 0, 1.2],
    [-1.2, 0, 1.2],
    [1.2, 0, -1.2],
    [-1.2, 0, -1.2],
  ];

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Center body */}
        <mesh>
          <boxGeometry args={[0.8, 0.25, 0.8]} />
          <meshBasicMaterial color="#1a1a1a" wireframe />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.5, 0.15, 0.5]} />
          <meshBasicMaterial color="#ff5a00" wireframe />
        </mesh>

        {/* Arms and motors */}
        {armPositions.map((pos, i) => (
          <group key={i}>
            {/* Arm */}
            <mesh position={[pos[0] / 2, 0, pos[2] / 2]} rotation={[0, Math.atan2(pos[0], pos[2]), 0]}>
              <boxGeometry args={[0.08, 0.06, 1.7]} />
              <meshBasicMaterial color="#333" wireframe />
            </mesh>
            {/* Motor */}
            <mesh position={pos}>
              <cylinderGeometry args={[0.15, 0.15, 0.12, 8]} />
              <meshBasicMaterial color="#1a1a1a" wireframe />
            </mesh>
            {/* Prop disc */}
            <PropDisc position={pos} index={i} />
          </group>
        ))}

        {/* Camera gimbal */}
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.12, 8, 6]} />
          <meshBasicMaterial color="#ff5a00" wireframe />
        </mesh>
        <mesh position={[0, -0.35, 0.08]}>
          <cylinderGeometry args={[0.06, 0.06, 0.08, 6]} />
          <meshBasicMaterial color="#666" wireframe />
        </mesh>

        {/* Landing gear */}
        {[-0.4, 0.4].map((x) => (
          <group key={x}>
            <mesh position={[x, -0.3, 0]}>
              <boxGeometry args={[0.03, 0.3, 0.03]} />
              <meshBasicMaterial color="#444" wireframe />
            </mesh>
            <mesh position={[x, -0.45, 0]}>
              <boxGeometry args={[0.03, 0.03, 0.6]} />
              <meshBasicMaterial color="#444" wireframe />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
};

const PropDisc = ({ position, index }: { position: [number, number, number]; index: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * (8 + index * 2);
    }
  });

  return (
    <mesh ref={ref} position={[position[0], position[1] + 0.08, position[2]]}>
      <torusGeometry args={[0.35, 0.005, 4, 32]} />
      <meshBasicMaterial color="#999" wireframe transparent opacity={0.5} />
    </mesh>
  );
};

const GridFloor = () => {
  const gridHelper = useMemo(() => {
    const grid = new THREE.GridHelper(10, 20, "#ccc", "#e5e5e5");
    grid.position.y = -1.2;
    return grid;
  }, []);

  return <primitive object={gridHelper} />;
};

const DroneScene = () => (
  <div className="w-full h-full">
    <Canvas
      camera={{ position: [3, 2, 3], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <WireframeDrone />
      <GridFloor />
    </Canvas>
  </div>
);

export default DroneScene;
