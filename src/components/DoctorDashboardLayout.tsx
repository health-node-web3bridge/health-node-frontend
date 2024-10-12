"use client";
import React from "react";
import Link from "next/link";
import {
  Bell,
  HelpCircle,
  Search,
  Grid,
  Calendar,
  Users,
  Clock,
  CreditCard,
  Mail,
  FileText,
  Settings,
  Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const sidebarItems = [
  { icon: Grid, label: "Overview", active: true, link: "#" },
  { icon: Calendar, label: "Appointment", link: "/dashboard/appointments" },
  { icon: Users, label: "My Patients", link: "/dashboard/patients" },
  { icon: Clock, label: "Schedule Timings", link: "#" },
  { icon: CreditCard, label: "Payments", link: "#" },
  { icon: Mail, label: "Message", link: "#" },
  { icon: Settings, label: "Settings", link: "#" },
];

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-purple-600">HealthNode.</h1>
        </div>
        <nav>
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center px-4 py-2 text-gray-700 w-11/12 mx-auto rounded-sm ${
                item.link === pathname
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  item.link === pathname && "text-white"
                }`}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      {/* Sidebar end */}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center flex-grow">
                <div className="flex-shrink-0 md:hidden">
                  <h1 className="text-2xl font-bold text-purple-600">
                    HealthNode.
                  </h1>
                </div>
                <div className="hidden md:block w-full max-w-xl">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search Appointment, Patient or etc"
                      className="pl-10 pr-4 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden ml-4 md:flex items-center md:ml-6">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <HelpCircle className="h-6 w-6" />
                </button>
                <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <Bell className="h-6 w-6" />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="Stephen Conley"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Stephen Conley
                    </span>
                    <span className="ml-1 text-xs text-gray-500">
                      Cardiologist
                    </span>
                  </div>
                </div>
              </div>
              <Button className="!bg-neutral-100">
                <Menu color="#000" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
