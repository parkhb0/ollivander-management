import React, { useEffect } from "react";

const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOKING === "enabled") {
        require("../mocks/worker");
      }
    }
  }, []);
  return null;
};

export default MSWComponent;
