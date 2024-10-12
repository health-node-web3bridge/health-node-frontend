"use client";
import { useAppointment } from "@/hooks/UI/useAppointment";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

function AppointmentContent() {
  const { tabs, tab, setTab, tableHeader, invoices } = useAppointment();
  return (
    <div className="bg-white p-6 rounded-lg">
      {" "}
      <p className="text-sm font-bold font-geistMono">
        Hi, <b>Dr Stephen</b>
      </p>
      <p className="">Your upcoming appointments</p>
      <div className="mt-7">
        <div className="flex w-8/12 items-center gap-6">
          {tabs.map((item, index) => (
            <button
              key={index}
              className={`text-sm md:text-base transition-color duration-300 ease-in  ${
                tab === item ? "text-purple-600 font-bold " : ""
              }`}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-5 ">
          <Table className="">
            <TableHeader>
              <TableRow className="">
                {tableHeader.map((item, index) => (
                  <TableHead key={index}>{item}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, i) => (
                <TableRow key={invoice.invoice} className="border-0">
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="">
                    <Button
                      variant={"outline"}
                      className="border rounded-sm py-3 px-9 flex items-center justify-center w-[131px] bg-transparent"
                    >
                      {invoice.paymentStatus}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentContent;
