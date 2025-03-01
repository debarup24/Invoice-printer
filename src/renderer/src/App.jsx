import { useRef, useState } from 'react'
import BillComponent from './components/BillComponent'
import { useReactToPrint } from 'react-to-print'

function App() {
  const billComponentRef = useRef()

  const handlePrintBill = useReactToPrint({
    contentRef: billComponentRef,
    documentTitle: 'Invoice',
    pageStyle: `
      @page {
        size: auto;
        margin: 10mm;
      }
    `
  })

  return (
    <div className="flex flex-col items-center justify-center w-auto min-h-screen">
      <h1 className="text-xl font-semibold bg-gray-100 min-w-full text-center">
        Labsmart Technology
      </h1>
      <BillComponent ref={billComponentRef} />
      <button
        onClick={handlePrintBill}
        className="px-6 py-2 mb-3 bg-green-300 rounded-md mt-1 cursor-pointer hover:font-semibold"
      >
        Print Invoice
      </button>
    </div>
  )
}

export default App
