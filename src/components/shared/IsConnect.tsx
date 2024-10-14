"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";

export default function IsConnect(Component: any) {
  return function withConnect(props: any) {
    const { isConnected } = useAccount();

    useEffect(() => {
      if (!isConnected) {
        redirect("/");
      }
    }, []);
    if (!isConnected) return null;

    return <Component {...props} />;
  };
}
