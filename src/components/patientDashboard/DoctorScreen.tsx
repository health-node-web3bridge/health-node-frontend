import { usePatients } from "@/hooks/UI/usePatients";
import { Button } from "../ui/button";
import PatientDashboardLayout from "@/layout/PatientDashboardLayout";
import Image from "next/image";

function DoctorScreen() {
  const { patients } = usePatients();
  return (
    <PatientDashboardLayout>
      <div className="bg-white p-6 rounded-lg">
        {/* <p className="text-xs font-bold font-geistMono">
        Hi, <b>Dr Stephen</b>
      </p> */}
        <div className="flex items-center justify-between">
          <p className="">Available Doctors</p>
          {/* <Button variant="link">View All</Button> */}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="!border rounded-2xl  py-4 flex bg-white shadow-md  flex-col justify-center items-center hover:border-[#9716CA] transition-colors duration-300 ease-in"
            >
              <div className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full bg-transparent relative overflow-hidden">
                <Image
                  src={
                    patient.gender === "Male"
                      ? "/image/icons8-business-man-with-beard-100.png"
                      : "/image/icons8-businesswoman-100.png"
                  }
                  alt="image"
                  fill
                />
              </div>
              <div>
                <p className="text-sm text-center lg:text-xl font-semibold">
                  {patient.name}
                </p>
                <p className="text-sm text-gray-500 text-center lg:text-xl ">
                  {patient.gender}
                </p>
                <div className="mt-4 md:mt-8 !w-full flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="hover:!bg-gradient-to-tr from-[#1E78F0] to-[#9716CA] transition-colors duration-300 ease-in group w-full"
                  >
                    <p className="group-hover:text-white">View Details</p>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PatientDashboardLayout>
  );
}

export default DoctorScreen;
