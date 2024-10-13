import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-stretch justify-center bg-gray-100">
      {/* Main Flex Container to hold form and image */}
      <div className="flex max-w-4xl w-full bg-white rounded-lg shadow-md p-8 space-x-6">
        
        {/* Form Section */}
        <div className="w-1/2 p-6 space-y-6 text-center h-full">
          <h1 className="text-2xl font-extrabold text-gray-800">Hello Patient</h1>

          

          <div className="space-y-2 mt-4">
          <h1 className="text-2xl font-extrabold text-gray-800">Create Your  Account </h1>

            <h6 className="text-base font-medium text-gray-700">Already created an Account ?</h6>
            <h6 className="text-base font-medium text-blue-600 cursor-pointer">Sign up here</h6>

            <Button className="w-full p-2 border rounded-lg" style={{ backgroundColor: '#8F3E97', color: 'white' }}>
              Connect Wallet
            </Button>
          </div>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Your name" 
              className="w-full p-2 border border-gray-300 rounded-lg text-[#0661A8]"
            />
            <Input
              type="email"
              placeholder="Your Location"
              className="w-full p-2 border border-gray-300 rounded-lg text-[#0661A8]"
            />
          </div>

          <div className="mt-16 space-y-16">
            <h6 className="text-lg font-semibold text-gray-800">Welcome! Your  Health Our Priority</h6>
            <h6 className="text-base font-medium text-blue-600 cursor-pointer">Forgot Password?</h6>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex items-center justify-center h-full">
          <img
            src="/image/image.png" 
            alt="Doctor Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default Login;
