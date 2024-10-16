import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar as CalendarIcon,
  Users,
  Stethoscope,
  Video,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";





const recentPatients = [
  {
    name: "Dr Winfred joe",
    Id: "OPD-2345",
    Email: "codyf@mail.com",
    PhoneNumber: "+23481 555-0123",
    DateAdded: "22/9/2024",
    status: "Available",
  },
  {
    name: "Dr Winfred joe",
    Id: "OPD-2345",
    Email: "codyf@mail.com",
    PhoneNumber: "+23481 555-0123",
    DateAdded: "22/9/2024",
    status: "Available",
  },
  {
    name: "Dr Winfred joe",
    Id: "OPD-2345",
    Email: "codyf@mail.com",
    PhoneNumber: "+23481 555-0123",
    DateAdded: "22/9/2024",
    status: "Available",
  },
  {
    name: "Dr Winfred joe",
    Id: "OPD-2345",
    Email: "codyf@mail.com",
    PhoneNumber: "+23481 555-0123",
    DateAdded: "22/9/2024",
    status: "Available",
  },
  {
    name: "Dr Winfred joe",
    Id: "OPD-2345",
    Email: "codyf@mail.com",
    PhoneNumber: "+23481 555-0123",
    DateAdded: "22/9/2024",
    status: "Available",
  },
  
];



// Use this Content component to get ready-made components

export default function HospitalTable() {
  return (
    <div className="space-y-6">
     
      <div className="grid grid-cols-1 sm:flex">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Avalable Doctors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Id</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone number</TableHead>
                  <TableHead>Date added</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPatients.map((patient, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {patient.name}
                    </TableCell>
                    <TableCell>{patient.Id}</TableCell>
                    <TableCell>{patient.Email}</TableCell>
                    <TableCell>{patient.PhoneNumber}</TableCell>
                    <TableCell>{patient.DateAdded}</TableCell>
                    <TableCell>{patient.status}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

       <div className="bg-white  hidden sm:flex">
        <Image src="/doctor.png" alt="doctor" width={350} height={100} />
       </div>
      </div>
    </div>
  );
}
