import { useCallback } from "react";

declare const AOS: {
  init: () => void;
};

const useAOS = () => {
  const init = useCallback(() => {
    AOS.init();
  }, []);

  return init;
};

export default useAOS;
