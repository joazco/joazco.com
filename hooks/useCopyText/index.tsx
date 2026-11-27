import { useEffect, useState } from "react";

const useCopyText = (text: string) => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => setStatus(""), 4000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Address copied!");
    } catch {
      setStatus(`Copy failed. Address: ${text}`);
    }
  };

  return { status, copy };
};

export default useCopyText;
