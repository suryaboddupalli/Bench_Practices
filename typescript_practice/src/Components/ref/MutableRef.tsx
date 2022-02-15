import React, { useEffect, useRef, useState } from "react";

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const currentRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(currentRef.current);
  };

  useEffect(() => {
    currentRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  });
  return (
    <div>
      Timer: {timer}
      <button onClick={() => stopTimer()}>stopTimer</button>
    </div>
  );
}

export default MutableRef;
