import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

const StarField = () => {
    const positions = useMemo(() => {
        const positions = [];

        for (let i = 0; i < 300; i++) {
            positions.push(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            );
        }

        return new Float32Array(positions);
    }, []);

    return (
        <Points positions={positions} stride={3}>
            <PointMaterial
                color="#FFFFFF"
                size={0.035}
                sizeAttenuation
                depthWrite={false}
            />
        </Points>
    );
};

export default StarField;