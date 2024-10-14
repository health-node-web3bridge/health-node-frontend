import Image from "next/image";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 !h-screen overflow-hidden">
      <div className="col-span-12 lg:col-span-7 pt-14 flex flex-col px-10">
        <Image src="/image/logo.svg" width={200} height={200} alt="logo" />
        <div className=" w-11/12 xl:w-5/12 space-y-20 mx-auto h-full flex justify-center">
          <div className="w-full mt-40">{children}</div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-5">
        <img
          src="/image/image.png"
          alt="Doctor Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default LoginLayout;
