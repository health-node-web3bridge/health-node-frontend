'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

interface Payment {
  id: string
  doctorAddress: string
  time: string
  amountEther: string
}

const ITEMS_PER_PAGE = 5

const dummyData: Payment[] = [
  { id: '1', doctorAddress: '0x1234...5678', time: '2023-05-01 10:30', amountEther: '0.5' },
  { id: '2', doctorAddress: '0xabcd...efgh', time: '2023-05-02 14:45', amountEther: '0.75' },
  { id: '3', doctorAddress: '0x9876...5432', time: '2023-05-03 09:15', amountEther: '1.2' },
  { id: '4', doctorAddress: '0xijkl...mnop', time: '2023-05-04 16:00', amountEther: '0.3' },
  { id: '5', doctorAddress: '0xqrst...uvwx', time: '2023-05-05 11:30', amountEther: '0.9' },
  { id: '6', doctorAddress: '0x2468...1357', time: '2023-05-06 13:20', amountEther: '0.6' },
  { id: '7', doctorAddress: '0xfeda...9876', time: '2023-05-07 15:10', amountEther: '1.5' },
]

export default function PaymentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = dummyData.filter(payment =>
    payment.doctorAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.time.includes(searchTerm) ||
    payment.amountEther.includes(searchTerm)
  )

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search payments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Doctor's Address</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Amount (ETH)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.doctorAddress}</TableCell>
              <TableCell>{payment.time}</TableCell>
              <TableCell>{payment.amountEther}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex items-center justify-between">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}