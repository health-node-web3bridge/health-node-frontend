"use client";
import { usePRouter } from "@/lib/Provider2";
import Link from "next/link";
import React from "react";

function Header() {
  const router = usePRouter();
  return (
    <nav className="flex justify-between space-x-10 items-center mx-auto md:p-10 p-5 bg-[rgba(242,247,255,1)] w-full">
      <div>
        <Link
          href="/"
          className="text-xl md:text-3xl font-extrabold bg-custom-gradient bg-clip-text text-transparent"
        >
          Health Node
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="bg-custom-gradient bg-clip-text text-transparent"
        >
          Home
        </Link>
        <Link href="/" className="text-gray-500">
          About
        </Link>
        <Link href="/" className="text-gray-500">
          Services
        </Link>
        <Link href="/" className="text-gray-500">
          Contact
        </Link>
      </div>
      <div>
        <button
          onClick={() => router.push("/auth")}
          className="bg-custom-gradient-button text-white font-bold md:py-3 md:px-7 py-1 px-3 rounded-full shadow-md hover:opacity-90 transition-opacity"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Header;
