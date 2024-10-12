import { usePatients } from "@/hooks/UI/usePatients";
import { Button } from "../ui/button";

function PatientsContent() {
  const { patients } = usePatients();
  return (
    <div className="bg-white p-6 rounded-lg">
      {/* <p className="text-xs font-bold font-geistMono">
        Hi, <b>Dr Stephen</b>
      </p> */}
      <div className="flex items-center justify-between">
        <p className="">My Patients</p>
        <Button variant="link">View All</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="!border rounded-md  py-4 flex  flex-col justify-center items-center gap-4 hover:border-[#9716CA] transition-colors duration-300 ease-in"
          >
            <div className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full bg-gray-300" />
            <div>
              <p className="text-sm text-center lg:text-xl font-semibold">
                {patient.name}
              </p>
              <p className="text-sm text-gray-500 text-center lg:text-xl ">
                {patient.gender}
              </p>
              <div className="mt-4 md:mt-8 w-full flex items-center justify-center">
                <Button
                  variant="outline"
                  className="hover:!bg-gradient-to-tr from-[#1E78F0] to-[#9716CA] transition-colors duration-300 ease-in group"
                >
                  <p className="group-hover:text-white">View Details</p>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientsContent;
