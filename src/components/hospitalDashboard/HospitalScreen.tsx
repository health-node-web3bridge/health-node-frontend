import HospitalDashboardLayout from "@/layout/HospitalDashboardLayout";
import Image from "next/image";
import {Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,} from "@/components/ui/table";

import Content from "@/components/HospitalTable"; 

function HospitalScreen() {
//   const { patients } = usePatients();
  return (
    <HospitalDashboardLayout>
     <div className="bg-white">
       <section className=" sm:space-y-0  sm:space-x-0 grid grid-cols-2 sm:flex sm:gap-4  rounded-md">
           <div className="bg-[#8f3e97] p-2  rounded-md  sm:w-[270px] sm:h-[180px]">
             <div className="bg-white rounded-md w-5 h-5">
             <Image className="" src={"/icon1.png"} alt="image" height={20} width={20} />
             </div>
             <p className="text-black font-bold text-[20px] pt-2">Book an Apppointment</p>
             <p className="text-white text-[8px] pt-2">Find a Doctor or specialist</p>
           </div>
           
           
           <div className="bg-[#edfcf2] p-2 rounded-md sm:w-[270px] sm:h-[180px]">
             <div className="bg-white rounded-md w-5 h-5">
             <Image className="" src={"/icon2.png"} alt="image" height={20} width={20} />
             </div>
             <p className="text-black font-bold text-[20px] pt-2">Video Consultation</p>
             <p className="text-black text-[8px] pt-2">Queuing without the hustle</p>
           </div>

           <div className="bg-[#fdf3f3] p-2 rounded-md sm:w-[270px] sm:h-[180px]">
             <div className="bg-white rounded-md w-5 h-5">
             <Image className="" src={"/icon3.png"} alt="image" height={20} width={20} />
             </div>
             <p className="text-black font-bold text-[20px] pt-2">Total Pateints</p>
             <p className="text-black text-[8px] pt-2">Purchase Medicines</p>
           </div>

           <div className="bg-[#fef6ee] p-2 rounded-md sm:w-[270px] sm:h-[180px]">
             <div className="bg-white rounded-md w-5 h-5">
             <Image className="" src={"/icon4.png"} alt="image" height={20} width={20} />
             </div>
             <p className="text-black font-bold text-[20px] pt-2">Request Records</p>
             <p className="text-black text-[8px] pt-2">Talk to specialist</p>
           </div>
       </section>

       {/* <section>

        <div className="bg-[#ffffff]">
            <div className="p-[20px]">
                <h2>All Doctors</h2>
                
            </div>
        </div>
       </section> */}

       <section className="bg-white p-[20px]">
        <Table />
       </section>

       <Content />


     </div>
    </HospitalDashboardLayout>
  );
}

export default HospitalScreen;
