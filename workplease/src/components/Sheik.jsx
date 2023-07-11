import { Loader, PresentationControls, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import React, { useRef, useState, useEffect } from "react";
import { Html, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";

const Sheik = () => {
  const fbxRef = useRef();
  const materials = useLoader(
    MTLLoader,
    "src/objects/Nintendo 64 - The Legend of Zelda Ocarina of Time - Sheik/Sheik/Sheik.mtl"
  );
  const fbx = useLoader(
    OBJLoader,
    "src/objects/Nintendo 64 - The Legend of Zelda Ocarina of Time - Sheik/Sheik/Sheik.obj",
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  const [rotation, setRotation] = useState(0.01);
  const [buttonText, setButtonText] = useState("Stop Rotation");
  const [planeSize, setPlaneSize] = useState([100000, 100000]);
  const [freeCamMode, setFreeCamMode] = useState(false); // New state for free camera mode

  useEffect(() => {
    // Set the initial plane size on component mount
    setPlaneSize([100000, 100000]);
  }, []);

  useFrame(() => {
    fbxRef.current.rotation.y += rotation;
  });

  const Rotatepls = () => {
    setRotation((prevRotation) => (prevRotation === 0 ? 0.01 : 0));
    setButtonText((prevText) => (prevText === "Stop Rotation" ? "Rotate" : "Stop Rotation"));
  };

  const FreeCam = () => {
    const { camera } = useThree();
    return <OrbitControls enablePan={false} enableZoom enableRotate camera={camera} />;
  };

  return (
    <>
      <group>
        <mesh ref={fbxRef}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            rotation={[0, 0, 0]}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage>
              <ambientLight intensity={0} />
              <primitive object={fbx} />
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -75, 0]}>
              <planeGeometry args={planeSize} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.1}
                metalness={0.5}
                color="#080808"
              />
            </mesh>
          </PresentationControls>
        </mesh>
      </group>

      <Html style={{ top: 0, left: 0 }}>
        <div style={{ position: "absolute", padding: "10px" }}>
          <button onClick={Rotatepls}>{buttonText}</button>
          <button onClick={() => setFreeCamMode(!freeCamMode)}>
            {freeCamMode ? "Exit Free Cam" : "Free Cam"}
          </button>
        </div>
      </Html>

      {freeCamMode && <FreeCam />}
    </>
  );
};

export default Sheik;