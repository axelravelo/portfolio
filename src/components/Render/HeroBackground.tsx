import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import StarField from './StarField'
import Cube from './Cube'

interface HeroBackgroundProps {
    targetRotation: {
        x: number;
        y: number;
    };
}

const HeroBackground = ({ targetRotation }: HeroBackgroundProps) => {
    return (
        <>
            <Canvas >
                <ambientLight intensity={0.03} />

                <StarField />

                <pointLight
                    color="#00FFFF"
                    intensity={12}
                    distance={6}
                    position={[4, 3, 2]}
                />

                <pointLight
                    color="#A855F7"
                    intensity={12}
                    distance={6}
                    position={[-2, 2, 1]}
                />

                <pointLight
                    color="#39FF14"
                    intensity={10}
                    distance={6}
                    position={[3, -3, 1]}
                />

                <pointLight
                    color="#FF1493"
                    intensity={10}
                    distance={6}
                    position={[-2, -2, -1]}
                />

                <Cube targetRotation={targetRotation} />

                <EffectComposer>
                    <Bloom
                        intensity={2}
                        luminanceThreshold={0.2}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                </EffectComposer>
            </Canvas>
        </>
    );
};

export default HeroBackground;