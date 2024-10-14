import { liskSepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { deserialize, serialize } from "wagmi";

export const rainbowConfig = getDefaultConfig({
  appName: "HealthNode",
  //   @ts-ignore
  projectId: process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID,
  chains: [liskSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const persister = createSyncStoragePersister({
  serialize,
  storage: window.localStorage,
  deserialize,
});

// export const config = createConfig({
//   chains: [liskSepolia],
//   transports: {
//     [liskSepolia.id]: http(),
//   },
// });
