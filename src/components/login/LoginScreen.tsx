import { Button } from "../ui/button";
import { CustomButtom } from "../shared/Connect";

function LoginScreen() {
  const btn = [
    { title: "Patient", url: "/patientsLogin" },
    { title: "Doctor", url: "/doctorsLogin" },
    { title: "Hosptial", url: "/adminLogin" },
  ];
  return (
    <div className="flex flex-col justify-center w-full mx-auto">
      {window && <CustomButtom />}
      {/* <Button className="bg-[#8F3E97] w-full h-12 text-white mt-2">
        Connect wallet
      </Button> */}
      <div className="flex items-center justify-center mt-5 gap-4">
        <div className="border h-px w-4/12"></div>
        <p className="text-black">Join as</p>
        <div className="border h-px w-4/12"></div>
      </div>
      <div className="space-y-4 flex flex-col mt-5">
        {btn.map((item, index) => (
          <Button
            key={index}
            className="bg-white rounded-lg h-12 border-[#8F3E97] text-[#0661A8] hover:bg-[#8F3E97] hover:text-white transition-colors duration-300 ease-in"
            variant={"outline"}
          >
            Register {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default LoginScreen;
