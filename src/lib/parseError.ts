export const parseError = (error: any) => {
  if (error?.cause?.data?.errorName) {
    if (error?.cause?.data?.errorName === "PatientAlreadyRegistered") {
      return {
        message: "Patient Already Registered",
        id: "PatientAlreadyRegistered",
      };
    } else {
      return { message: error?.cause?.data?.errorName, id: "err_1" };
    }
  }
  return { message: "Something went wrong", id: "networkError" };
};
