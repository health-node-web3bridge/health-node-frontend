import { helperAbi } from "@/abi/abi";
import appAbi from "../abi/appAbi.json";

export const patientContract = {
  address: "0xDfeCBdf87FbBFAb09421F76369099D18BA439D8b",
  abi: appAbi,
};

export const helperContract = {
  address: "0x97a9f33670F7FbF90b63d82C98CEd77C65436ABB",
  abi: {
    _format: "hh-sol-artifact-1",
    contractName: "HealthNodeHelpers",
    sourceName: "contracts/HealthNodeHelpers.sol",
    abi: helperAbi,
    linkReferences: {},
    deployedLinkReferences: {},
  },
};
