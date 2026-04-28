import { useMemo } from "react";
import * as THREE from "three";
import type { PoolShape } from "@/lib/pricing/poolPricing";

type PoolMeshProps = {
  shape: PoolShape;
  lengthM: number;
  widthM: number;
  depthM: number;
};

function createPoolShape(shapeType: PoolShape, lengthM: number, widthM: number) {
  const halfLength = lengthM / 2;
  const halfWidth = widthM / 2;
  const shape = new THREE.Shape();

  if (shapeType === "rectangular") {
    shape.moveTo(-halfLength, -halfWidth);
    shape.lineTo(halfLength, -halfWidth);
    shape.lineTo(halfLength, halfWidth);
    shape.lineTo(-halfLength, halfWidth);
    shape.closePath();
    return shape;
  }

  if (shapeType === "ovalada") {
    shape.absellipse(0, 0, halfLength, halfWidth, 0, Math.PI * 2, false, 0);
    return shape;
  }

  shape.moveTo(-halfLength * 0.95, 0);
  shape.bezierCurveTo(
    -halfLength * 0.7,
    halfWidth,
    -halfLength * 0.2,
    halfWidth,
    0,
    halfWidth * 0.65,
  );
  shape.bezierCurveTo(
    halfLength * 0.6,
    halfWidth * 0.45,
    halfLength * 0.85,
    0,
    halfLength * 0.75,
    -halfWidth * 0.45,
  );
  shape.bezierCurveTo(
    halfLength * 0.45,
    -halfWidth * 0.9,
    -halfLength * 0.1,
    -halfWidth * 0.75,
    -halfLength * 0.5,
    -halfWidth * 0.3,
  );
  shape.bezierCurveTo(
    -halfLength * 0.95,
    -halfWidth * 0.1,
    -halfLength * 0.98,
    -halfWidth * 0.02,
    -halfLength * 0.95,
    0,
  );
  shape.closePath();
  return shape;
}

function createScaledShape(source: THREE.Shape, scale: number) {
  const points = source.getSpacedPoints(128);
  const scaled = points.map((point) => new THREE.Vector2(point.x * scale, point.y * scale));
  return new THREE.Shape(scaled);
}

export function PoolMesh({ shape, lengthM, widthM, depthM }: PoolMeshProps) {
  const { poolGeometry, waterGeometry, copingGeometry } = useMemo(() => {
    const outerShape = createPoolShape(shape, lengthM, widthM);
    const innerShape = createScaledShape(outerShape, 0.9);

    const extruded = new THREE.ExtrudeGeometry(outerShape, {
      depth: depthM,
      bevelEnabled: false,
      curveSegments: shape === "rectangular" ? 4 : 24,
      steps: 1,
    });
    extruded.rotateX(-Math.PI / 2);
    extruded.translate(0, -depthM, 0);

    const water = new THREE.ShapeGeometry(innerShape, shape === "rectangular" ? 2 : 24);
    water.rotateX(-Math.PI / 2);

    const copingShape = outerShape.clone();
    copingShape.holes = [new THREE.Path(innerShape.getSpacedPoints(128))];
    const coping = new THREE.ShapeGeometry(copingShape, shape === "rectangular" ? 4 : 24);
    coping.rotateX(-Math.PI / 2);

    return { poolGeometry: extruded, waterGeometry: water, copingGeometry: coping };
  }, [depthM, lengthM, shape, widthM]);

  return (
    <group>
      <mesh geometry={poolGeometry} castShadow receiveShadow>
        <meshStandardMaterial color="#1b5f82" metalness={0.22} roughness={0.42} />
      </mesh>

      <mesh geometry={waterGeometry} position={[0, 0.02, 0]} receiveShadow>
        <meshPhysicalMaterial
          color="#67dcff"
          transparent
          opacity={0.72}
          roughness={0.1}
          metalness={0.02}
          transmission={0.28}
          clearcoat={0.9}
          reflectivity={0.45}
        />
      </mesh>

      <mesh geometry={copingGeometry} position={[0, 0.04, 0]} receiveShadow>
        <meshStandardMaterial color="#bda985" roughness={0.88} metalness={0.04} />
      </mesh>
    </group>
  );
}
