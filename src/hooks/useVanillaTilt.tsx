"use client";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const useVanillaTilt = () => {
  useEffect(() => {
    VanillaTilt.init(
      document.querySelectorAll(".rounded") as unknown as HTMLElement[],
      {
        max: 3,
        speed: 500,
        scale: 1.05,
        glare: true,
        "max-glare": 0.3,
      },
    );
  }, []);
};

export default useVanillaTilt;
