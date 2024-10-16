"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CustomButtom } from "../shared/Connect";
// import { WagmiProvider, useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/navigation";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/thirdwebConfig";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { patientContract } from "@/utils/contract";
import { useWriteContract } from "wagmi";
import { ethers } from 'ethers';
import useReadPatientContract from "@/hooks/useReadPatientData";

function LoginScreen() {
  // const { isConnected } = useAccount();
  const account = useActiveAccount();
  const router = useRouter();
  // const { disconnect } = useDisconnect();
  const [isNewUser, setIsNewUser] = useState(false);

  const { writeContractAsync } = useWriteContract()

  const PATIENT_ROLE = ethers.keccak256(ethers.toUtf8Bytes("PATIENT_ROLE"));

  // const byte32Role = ethers.encodeBytes32String(`${PATIENT_ROLE}`)

  
  // const hasRole = data as unknown as boolean;
  
  useEffect(() => {

    const { data: hasRole, isLoading, error } = useReadPatientContract({
      contractAddress: patientContract.address as `0x${string}`,
      abi: patientContract.abi,
      functionName: 'hasRole',
      args: [PATIENT_ROLE, account?.address]
    });
    
    // get the address of the account
    if(!hasRole) setIsNewUser(true);

    // check if they have a role

    // if they do -> check the role type and route to respective dash

    // if they don't -> show register buttons to register then route
    //to respective dash
    console.log("ACCOUNT",account)
  }, [account])

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
      {/* {!isConnected && <CustomButtom />}
      {isConnected && (
        <Button
          onClick={() => disconnect()}
          className="bg-[#8F3E97] w-full h-12 text-white mt-2"
        >
          Disconnect wallet
        </Button>
      )} */}
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
