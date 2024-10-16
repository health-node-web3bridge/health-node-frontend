// import {
//   baseSepolia
// } from 'wagmi/chains';

// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// export const config = getDefaultConfig({
//   appName: 'EnergyChain',
//   projectId: 'c59e86f04bdb6a22343b9337956b2368',
//   chains: [baseSepolia],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { baseSepolia, mainnet, sepolia } from "wagmi/chains";

// export const config = createConfig({
//   chains: [baseSepolia],
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   ssr: false,
//   transports: {
//     [baseSepolia.id]: http(),
//   },
// });

// export const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [sepolia],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

// declare module "wagmi" {
//   interface Register {
//     config: ReturnType<typeof getConfig>;
//   }
// }
