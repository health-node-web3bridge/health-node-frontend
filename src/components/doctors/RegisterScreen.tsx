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
import Image from "next/image";
import RegistrationLayout from "@/layout/RegistrationLayout";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  lastName: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  email: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  city: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  country: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
  hospital: z.string().min(2, {
    message: EMPTY_FIELD,
  }),

  specialty: z.string().min(2, {
    message: EMPTY_FIELD,
  }),
});

function RegisterScreen() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      country: "",
      hospital: "",
      specialty: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <RegistrationLayout title="Doctor's Registration">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 mt-10"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
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
                <FormLabel className="formLabel">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospital"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="formLabel">Name of hospital</FormLabel>
                <FormControl>
                  <Input placeholder="Enter hospital" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="formLabel">Specialty</FormLabel>
                <FormControl>
                  <Input placeholder="Enter specialty" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="col-span-2 mt-16 bg-custom-gradient-button text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
    </RegistrationLayout>
  );
}

export default RegisterScreen;
