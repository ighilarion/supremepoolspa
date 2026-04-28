import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PoolMesh } from "@/components/configurador/PoolMesh";
import { usePoolConfiguratorStore } from "@/components/configurador/usePoolConfiguratorStore";

export function PoolCanvas3D() {
  const [mounted, setMounted] = useState(false);
  const { shape, lengthM, widthM, depthM } = usePoolConfiguratorStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[420px] rounded-2xl border border-border bg-secondary/50 animate-pulse" />
    );
  }

  return (
    <div className="h-[420px] rounded-2xl border border-border overflow-hidden shadow-sm bg-[#dceaf2]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [12, 9, 15], fov: 40 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#d9edf8"]} />
        <fog attach="fog" args={["#d9edf8", 18, 52]} />

        <ambientLight intensity={0.75} />
        <hemisphereLight args={["#eff8ff", "#b2c4cf", 0.4]} />
        <directionalLight
          position={[12, 14, 10]}
          intensity={1.05}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -depthM - 0.05, 0]}>
          <planeGeometry args={[56, 56]} />
          <meshStandardMaterial color="#cbb89a" roughness={0.88} metalness={0.05} />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -depthM - 0.035, 0]}>
          <planeGeometry args={[34, 34]} />
          <meshStandardMaterial color="#e8dcc7" roughness={0.95} metalness={0.02} />
        </mesh>

        <PoolMesh shape={shape} lengthM={lengthM} widthM={widthM} depthM={depthM} />

        <gridHelper args={[48, 36, "#b39f83", "#d9ccb7"]} position={[0, -depthM - 0.03, 0]} />
        <OrbitControls
          enablePan
          enableRotate
          enableZoom
          minDistance={5}
          maxDistance={30}
          maxPolarAngle={Math.PI / 2.02}
          target={[0, -0.8, 0]}
        />
      </Canvas>
    </div>
  );
}
