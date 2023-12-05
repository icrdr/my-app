import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function HeartBeating() {
  const { scene, animations } = useGLTF("/HeartBeating_Low.glb");
  const { ref, actions } = useAnimations(animations);

  useEffect(() => {
    actions.Beating?.play();
  }, []);

  return <primitive ref={ref} object={scene} />;
}

useGLTF.preload("/HeartBeating_Low.glb");
