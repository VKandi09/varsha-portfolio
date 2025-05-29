import React, { useEffect, useRef, useState } from "react";

const VantaWavesBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    // Load scripts only on client side
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    if (!vantaEffect) {
      // Load three.js and Vanta Waves scripts sequentially
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js").then(() => {
        loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js").then(() => {
        // eslint-disable-next-line no-undef
          setVantaEffect(
            // eslint-disable-next-line no-undef
            VANTA.WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x31a2d,
              shininess: 34.0,
              waveHeight: 14.0,
              waveSpeed: 0.25,
              zoom: 1.5,
            })
          );
        });
      });
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    // This div covers the full viewport, acting like your body background
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default VantaWavesBackground;
