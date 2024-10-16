import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Calendar as CalendarIcon, Users } from "lucide-react";
import PaymentTable from "./PaymentTable";
import DoctorDashboardLayout from "../DoctorDashboardLayout";

const dashCards = [
  {
    icon: CalendarIcon,
    label: "Consultations",
    value: "24.4k",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    label: "Total Rewards",
    value: "166.3k",
    color: "bg-pink-500",
  },
  //   {
  //     icon: Stethoscope,
  //     label: "Clinic Consulting",
  //     value: "53.5k",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     icon: Video,
  //     label: "Video Consulting",
  //     value: "28.0k",
  //     color: "bg-blue-500",
  //   },
];

function PaymentScreen() {
  return (
    <DoctorDashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Welcome, Dike</h2>
          <p className="text-gray-500">Have a nice day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dashCards.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-6">
                <div className={`rounded-full p-3 mr-4 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              {/* <Button variant="link">View All</Button> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <PaymentTable />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
}

export default PaymentScreen;
