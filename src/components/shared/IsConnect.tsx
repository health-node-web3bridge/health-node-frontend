"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";

export default function IsConnect(Component: any) {
  return function withConnect(props: any) {
    const account = useActiveAccount();

    useEffect(() => {
      if (account === undefined) {
        redirect("/auth");
      }
    }, []);
    if (account === undefined) return null;

    return <Component {...props} />;
  };
}
