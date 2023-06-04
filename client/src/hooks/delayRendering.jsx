import { useState, useEffect } from "react";

export const useDelayRendering = ({ isLoading, delayTime }) => {
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delayTime || 500);

    return () => clearTimeout(timer);
  }, []);
  return loading;
};
