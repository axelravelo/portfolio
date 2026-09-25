import { Canvas } from "@react-three/fiber";

import Cube from './Cube'

interface HeroBackgroundProps {
    targetRotation: {
        x: number;
        y: number;
    };
}

const HeroBackground = ({ targetRotation }: HeroBackgroundProps) => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>

                <ambientLight intensity={0.5} />

                <directionalLight
                    color="#60A5FA"
                    intensity={3}
                    position={[3, 3, 5]}
                />
                <Cube targetRotation={targetRotation} />
            </Canvas>
        </div>
    );
};

export default HeroBackground;