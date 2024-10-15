import PatientDashboardLayout from "@/layout/PatientDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { appointmentRequests } from "./OverviewScreen";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ConsultationScreen() {
  return (
    <PatientDashboardLayout>
      {" "}
      <Card className="col-span-2 shadow-none border-0">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Appointment Request</CardTitle>
          {/* <Button variant="link">View All</Button> */}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointmentRequests.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between shadow-lg !border p-4 rounded-lg hover:bg-custom-gradient-button group transition-colors duration-300 ease-in"
              >
                <div className="flex items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={`/image/icons8-business-man-with-beard-100.png`}
                      alt={appointment.name}
                    />
                    <AvatarFallback>
                      {appointment.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-lg font-medium group-hover:text-white">
                      {appointment.name}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white">{`${appointment.gender}, ${appointment.date}`}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    appointment.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PatientDashboardLayout>
  );
}

export default ConsultationScreen;
