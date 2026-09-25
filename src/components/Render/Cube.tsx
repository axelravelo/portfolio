import { useFrame } from "@react-three/fiber";
import { Mesh, MathUtils, BoxGeometry } from "three";
import { useRef } from "react";

interface CubeProps {
    targetRotation: {
        x: number;
        y: number;
    };
}

const Cube = ({ targetRotation }: CubeProps) => {
    const cubeRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        // console.log('this is running every frame')
        if (cubeRef.current) {
            cubeRef.current.rotation.y = MathUtils.lerp(cubeRef.current.rotation.y, targetRotation.y, 5 * delta)
            cubeRef.current.rotation.x = MathUtils.lerp(cubeRef.current.rotation.x, targetRotation.x, 5 * delta)
        }
    });

    return (
        <group
            ref={cubeRef}
            position={[0, 0, -2]}
        >
            {/* Cube */}
            <mesh>
                <boxGeometry args={[3, 3, 3]} />

                <meshStandardMaterial
                    color="#020617"
                    metalness={0.85}
                    roughness={0.2}
                />
            </mesh>

            {/* Neon edges */}
            <lineSegments>
                <edgesGeometry args={[new BoxGeometry(3, 3, 3)]} />

                <lineBasicMaterial
                    color="#00FFFF"
                    toneMapped={false}
                />
            </lineSegments>
        </group>
    );
};

export default Cube;