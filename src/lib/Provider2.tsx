"use client";
import { ThirdwebProvider } from "thirdweb/react";
import * as NProgress from "nprogress";
import NextTopLoader from "nextjs-toploader";
import { useRouter } from "next/navigation";

export const usePRouter = () => {
  const router = useRouter();

  const { push } = router;

  router.prefetch = (href) => {
    NProgress.start();
    push(href);
  };

  return router;
};

function Provider2({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      {children}
    </ThirdwebProvider>
  );
}

export default Provider2;
