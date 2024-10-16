import { useState, useEffect } from "react";
import { useWriteContract } from "wagmi";

const useReadPatientContract = ({
  contractAddress,
  abi,
  functionName,
  args = [],
}: {
  contractAddress: any;
  abi: any;
  functionName: string;
  args: any[];
}) => {
  const {
    data: hash,
    writeContractAsync,
    isPending,
    isSuccess,
  } = useWriteContract();

  return { hash, writeContractAsync, isPending, isSuccess };
};

export default useReadPatientContract;
