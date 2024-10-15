"use client";
import { ThirdwebProvider } from "thirdweb/react";

function Provider2({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider>{children}</ThirdwebProvider>;
}

export default Provider2;
