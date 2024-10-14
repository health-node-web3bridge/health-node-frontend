import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function RegistrationLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-[#E9F2FE] w-screen h-screen px-32 py-16">
      <div className="bg-white p-5 rounded-md px-32 py-14 h-full">
        <div className="flex items-center justify-between">
          <Button
            className="bg-[#fff] hover:bg-white rounded-md"
            onClick={() => window.history.back()}
          >
            <Image
              src={"/image/backImage.svg"}
              width={37.4}
              height={29.9}
              alt={"back"}
            />
          </Button>
          <h1 className="text-4xl text-center font-geistMono">{title}</h1>
          <div />
        </div>
        {children}
      </div>
    </div>
  );
}

export default RegistrationLayout;
