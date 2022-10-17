import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimateNumber = ({ from, to, duration = 3 }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        (node as any).textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span className="inline-block" ref={nodeRef} />;
};

export default AnimateNumber;
