import { useFrame } from "@react-three/fiber";
import { Mesh, MathUtils } from "three";
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
        <mesh
            ref={cubeRef}
            position={[0, 0, -4]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
        >

            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="#3B82F6" />
        </mesh>
    );
};

export default Cube;