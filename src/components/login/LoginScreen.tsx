"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CustomButtom } from "../shared/Connect";
// import { WagmiProvider, useAccount, useDisconnect } from "wagmi";

import { ConnectButton, useReadContract } from "thirdweb/react";
import { client } from "@/lib/thirdwebConfig";
import { useActiveAccount } from "thirdweb/react";
import { helperContract } from "@/utils/contract";
import { useAccount, useWriteContract } from "wagmi";
import { ethers } from "ethers";
import useReadPatientContract from "@/hooks/useReadPatientData";
import { usePRouter } from "@/lib/Provider2";
import { getContract } from "thirdweb";
import { helperAbi } from "@/abi/abi";

function LoginScreen() {
  const { isConnected, address } = useAccount();
  const account = useActiveAccount();
  const router = usePRouter();
  // const { disconnect } = useDisconnect();
  const [isNewUser, setIsNewUser] = useState(false);

  // const { writeContractAsync } = useWriteContract();

  // const PATIENT_ROLE = ethers.keccak256("PATIENT_ROLE");

  // const byte32Role = ethers.encodeBytes32String(`${PATIENT_ROLE}`)

  // const hasRole = data as unknown as boolean;

  const {
    data: hasRole,
    isLoading,
    error,
  } = useReadPatientContract({
    contractAddress: helperContract.address as `0x${string}`,
    abi: helperAbi,
    functionName: "checkUserRole",
    args: [address],
  });
  useEffect(() => {
    // get the address of the account
    console.log(hasRole, "HASROLE");
    if (!hasRole) {
      setIsNewUser(true);
      return;
    }

    // check if they have a role

    // if they do -> check the role type and route to respective dash

    // if they don't -> show register buttons to register then route
    //to respective dash
    console.log("ACCOUNTT", account);
  }, [account, hasRole]);

  console.log(hasRole, "HASROLE", error, address);

  const btn = [
    {
      title: "Patient",
      url: "/patientsLogin",
      onClick: () => router.push("/p/register"),
    },
    {
      title: "Doctor",
      url: "/doctorsLogin",
      onClick: () => router.push("/d/register"),
    },
    {
      title: "Hosptial",
      url: "/adminLogin",
      onClick: () => router.push("/h/register"),
    },
  ];
  return (
    <div className="flex flex-col justify-center w-full mx-auto">
      <ConnectButton
        client={client}
        connectModal={{
          showThirdwebBranding: false,
        }}
      />
      {/* <CustomButtom /> */}

      {/* <ConnectButton /> */}
      {account !== undefined && (
        <>
          <div className="flex items-center justify-center mt-5 gap-4">
            <div className="border h-px w-4/12"></div>
            <p className="text-black">Join as</p>
            <div className="border h-px w-4/12"></div>
          </div>
          <div className="space-y-4 flex flex-col mt-5">
            {btn.map((item, index) => (
              <Button
                key={index}
                className="bg-white rounded-lg h-12 border-[#8F3E97] text-[#0661A8] hover:bg-[#8F3E97] hover:text-white transition-colors duration-300 ease-in"
                variant={"outline"}
                onClick={item.onClick}
              >
                Register {item.title}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LoginScreen;
