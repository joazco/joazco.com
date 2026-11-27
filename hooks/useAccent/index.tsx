import { useEffect, useState } from "react";

const accents = ["orange", "yellow", "lavender", "copper"];

// Brand rule: accented words change color every 4 s, with a pause control and reduced motion support.
const useAccent = () => {
  const [step, setStep] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    setPaused(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setStep((current) => current + 1);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return {
    accent: accents[step % accents.length],
    // The first word must not animate on load.
    changing: step > 0 && !paused,
    // Alternates the class so the CSS animation restarts at each change.
    tick: step % 2,
    paused,
    togglePaused: () => setPaused(!paused),
  };
};

export default useAccent;
