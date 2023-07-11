import { Loader, PresentationControls, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import React, { useRef, useState, useEffect } from "react";
import { Html, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";

const GoofyNo = () => {
    function playSound() {
        const audio = new Audio('src/assets/kingdom-hearts-2-menu-noises-sound-effect-fx_u3K7Ot4x.mp3');
        audio.play();
      }
  const fbxRef = useRef();
  const fbx = useLoader(
    OBJLoader,
    "src/objects/PlayStation 2 - Kingdom Hearts - Goofy/Goofy copy.obj"
  );

  const [rotation, setRotation] = useState(0.01);
  const [buttonText, setButtonText] = useState("Stop Rotation");
  const [planeSize, setPlaneSize] = useState([100000, 100000]);
  const [objectPosition, setObjectPosition] = useState([0, 0, 0]); // Save object position
  const [freeCamMode, setFreeCamMode] = useState(false); // New state for free camera mode

  useEffect(() => {
    // Set the initial plane size on component mount
    setPlaneSize([100000, 100000]);

    // Reset object position on component mount or rotation change
    setObjectPosition([0, 16, 0]);
  }, [rotation]);

  useFrame(() => {
    fbxRef.current.rotation.y += rotation;
  });

  const Rotatepls = () => {
    setRotation((prevRotation) => (prevRotation === 0 ? 0.01 : 0));
    setButtonText((prevText) => (prevText === "Stop Rotation" ? "Rotate" : "Stop Rotation"));
    playSound();
  };

  const FreeCam = () => {
    const { camera } = useThree();
    playSound();
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
              <spotLight position={[0, 10, 0]} />
              <mesh position={objectPosition} rotation={[Math.PI / 2, 0, 0]}>
                <ambientLight intensity={0} />
                <primitive object={fbx} />
              </mesh>
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
            {freeCamMode && <FreeCam />} {/* Render OrbitControls when in free camera mode */}
          </PresentationControls>
        </mesh>
      </group>

      <Html style={{ top: 0, left: 0 }}>
        <div style={{ position: "absolute", padding: "10px", top: "20vh", left: "25vw" }}>
          <button className="the" onClick={Rotatepls}style={{  backgroundColor: "transparent" }}><img src={"src/assets/rotate.png"} style={{ height: "5vh" }} /></button>
          <button className="the" onClick={() => setFreeCamMode(!freeCamMode)}style={{  backgroundColor: "transparent" }}>
  {freeCamMode ? (
    <>
      <img src={"src/assets/exitt.png"} alt="Exit Free Cam" style={{ height: "5vh" }} />
      <span></span>
    </>
  ) : (
    <>
      <img src={"src/assets/free.png"} alt="Free Cam" style={{ height: "5vh" }} />
      <span></span>
    </>
  )}
</button>
          
        </div>
      </Html>

      {freeCamMode && <FreeCam />}
    </>
  );
};

export default GoofyNo;