"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EMPTY_FIELD } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import RegistrationLayout from "@/layout/RegistrationLayout";
import { useWriteContract } from "wagmi";
import { patientContract } from "@/utils/contract";
import { usePRouter } from "@/lib/Provider2";
import { abi } from "@/abi/abi";
import { parseError } from "@/lib/parseError";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  email: z
    .string()
    .min(2, {
      message: EMPTY_FIELD,
    })
    .email({ message: "Invalid email address" }),
  gender: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  age: z.string().min(1, {
    message: EMPTY_FIELD,
  }),
});

function RegisterPatientScreen() {
  const router = usePRouter();
  const {
    data: hash,
    writeContractAsync,
    isPending,
    // isSuccess,
    // error,
  } = useWriteContract();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      age: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    writeContractAsync({
      address: patientContract.address as `0x${string}`,
      abi,
      functionName: "registerPatient",
      args: [values.name, values.email, values.gender, Number(values.age)],
    })
      .then((res) => {
        router.prefetch("/p/dashboard/overview");
      })
      .catch((err) => {
        const { message, id } = parseError(err);
        toast.error(message, {
          id,
        });
      });
  }

  return (
    <RegistrationLayout title="Patient's Registration">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="formLabel">Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="nill">
                      Preferred not to answer
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">Age</FormLabel>
                <FormControl>
                  <Input placeholder="Enter age" {...field} type="tel" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full !mt-16 bg-custom-gradient-button text-white"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </RegistrationLayout>
  );
}

export default RegisterPatientScreen;
