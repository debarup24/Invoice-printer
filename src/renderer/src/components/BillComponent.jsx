import React, { forwardRef } from 'react'

const BillComponent = forwardRef((props, ref) => {
  // Sample invoice data
  const invoice = {
    number: 'INV-25-4',
    date: '2025-03-01',
    dueDate: 'No Due',
    company: {
      name: 'Medical solution Inc.',
      address: '1/3 Street, Sealdah, Kolkata 700001',
      phone: '(+91) 987654123',
      email: 'billing@medicalsolinc.com'
    },
    client: {
      name: 'Ajay Sharma',
      address: '456 Behala Ave, Industry City, Kolkata 700001',
      email: 'hs.sharma@gmail.com'
    },
    items: [
      { id: 1, description: 'Medical gloves', quantity: 40, rate: 75, amount: 3000 },
      { id: 2, description: 'Medical mask', quantity: 20, rate: 90, amount: 1800 },
      { id: 3, description: 'Medicine', quantity: 10, rate: 65, amount: 650 }
    ],
    subtotal: 5450,
    tax: 545,
    total: 5995
  }

  return (
    <div className="max-w-4xl mx-auto bg-white" ref={ref}>
      <div className="px-8 py-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">INVOICE</h1>
            <div className="mt-2 text-gray-600">
              <div>
                <span className="font-semibold">Invoice #:</span> {invoice.number}
              </div>
              <div>
                <span className="font-semibold">Date:</span> {invoice.date}
              </div>
              <div>
                <span className="font-semibold">Due Date:</span> {invoice.dueDate}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-gray-800">{invoice.company.name}</div>
            <div className="mt-2 text-gray-600">
              <div>{invoice.company.address}</div>
              <div>{invoice.company.phone}</div>
              <div>{invoice.company.email}</div>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Bill To:</h2>
          <div className="text-gray-600">
            <div className="font-medium">{invoice.client.name}</div>
            <div>{invoice.client.address}</div>
            <div>{invoice.client.email}</div>
          </div>
        </div>

        {/* Invoice Items */}
        <div className="mb-8">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoice.items.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-4 text-sm text-gray-500">{item.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{item.description}</td>
                  <td className="py-3 px-4 text-sm text-gray-500 text-right">{item.quantity}</td>
                  <td className="py-3 px-4 text-sm text-gray-500 text-right">
                    ₹{item.rate.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500 text-right">
                    ₹{item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2 text-gray-700">
              <span>Subtotal:</span>
              <span>₹{invoice.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <span>GST (10%):</span>
              <span>₹{invoice.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-300 font-bold text-gray-800">
              <span>Total:</span>
              <span>₹{invoice.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 py-2 border-t border-b border-gray-300 text-center text-gray-600">
          <p className="mb-1">Thank you!</p>
        </div>
      </div>
    </div>
  )
})
export default BillComponent
