import React, { useEffect } from "react";
import { ReactNode, useState } from "react";

export default function BrowserOnly({ children }: { children: ReactNode }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return <>{render ? children : null}</>;
}
