"use client";
import React from "react";
import { WagmiProvider } from "wagmi";
import { persister, rainbowConfig } from "./wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1_000 * 60 * 60 * 24, // 24 hours
      },
    },
  });
  return (
    <WagmiProvider config={rainbowConfig}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </PersistQueryClientProvider>
    </WagmiProvider>
  );
}

export default Provider;
