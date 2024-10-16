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
  Hospital,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { Button } from "../components/ui/button";
import Image from "next/image";

const sidebarItems = [
  {
    icon: Grid,
    label: "Dashboard",
    active: true,
    link: "/p/dashboard/overview",
  },
  { icon: Hospital, label: "Create new patient", link: "/h/dashboard/doctors" },
  { icon: Clock, label: "Patients Record", link: "/h/dashboard/consultation" },
  { icon: CreditCard, label: "Available Doctors", link: "/h/dashboard/payments" },
];

export default function HospitalDashboardLayout({
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
          <Image src="/image/logo.svg" width={200} height={200} alt="logo" />
          
        </div>
        <nav className="space-y-4">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center px-4 py-2 text-gray-700 w-11/12 mx-auto rounded-sm ${
                item.link === pathname
                  ? "bg-[#7912a2] text-white"
                  : "hover:bg-[#7912a2]"
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
                    <Image src="/HD.png" height={300} width={300}  alt="hospital dashboard" />   
                </div>
              </div>
             
              <Button className="!bg-neutral-100 md:hidden">
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
