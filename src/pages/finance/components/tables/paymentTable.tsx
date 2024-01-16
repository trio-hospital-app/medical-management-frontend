import DataTable from "react-data-table-component";
import ReactDOMServer from 'react-dom/server';

import {
  useUserReciepts
} from "../../../../hooks/reactQuery/useFinance";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../../hooks/formattedDate";
import Loader from "../../../../components/ui/loader";
import { IoMdPrint } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import PrintReceipt from "../PrintReceipt";
import { useState } from "react";

function PaymentTable() {
  const { id } = useParams();
  const [printReceiptData, setPrintReceiptData] = useState(null);
  const { data: userFinance, isLoading: LoadinguserFinance } =
  useUserReciepts(id);

  if (LoadinguserFinance) {
    return <Loader />;
  }

  const source = (row) => {
    if (row.itemType === "labs") {
      return "Laboratory";
    }
  };
  
  const department = (row) => {
    if (row.itemType === "labs") {
      return row?.labId?.panelId?.panel;
    }
  };

  const cost = (row) => {
    if (row.itemType === "labs") {
      return row?.labId?.panelId?.cost;
    }
  };
  const sum = (total)=> { return total.reduce((a, b) => a + b, 0);}

  console.log(userFinance)

  const columns = [
    {
      name: "Transaction Date",
      selector: (row) => formatDate(row?.receipt),
      sortable: true,
    },
    {
      name: "Receipt ID",
      selector: (row) => row?.receipt,
      sortable: true,
    },
    {
      name: "Payment Type",
      selector: (row) => <div className="capitalize">{row?.type}</div>,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => <div className="capitalize font-bold">NGN {sum(row?.total)}</div>,
      sortable: true,
    },
    {
      cell: (row) => (
        <div className=" w-full flex justify-end items-center">
          <div className=" flex items-center gap-3">
          <IoMdPrint
              className="font-bold text-xl text-ha-primary1"
              onClick={() => handlePrint(row)}
            />
            <FiSend className="font-bold text-xl text-green-600" />
          </div>
        </div>
      ),
      sortable: false,
    },
  ]
  const handlePrint = (rowData) => {
    const printHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Print Page</title>
    </head>
    <body>
      ${ReactDOMServer.renderToString(<PrintReceipt receiptData={rowData} />)}
    </body>
    </html>
  `;
    const printWindow = window.open("", "_blank", "width=600,height=600");
    printWindow.document.open();
    printWindow.document.write(printHTML);
    printWindow.document.close();

    // Wait for the content to load, then trigger the print dialog
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };
  const ExpandedComponent = ({ data }) => (
    <div className="relative">
      <div className="m-5 p-5 bg-black">
        <div className="w-full h-full grid grid-cols-4 bg-black text-white">
          <span className="w-full flex items-center justify-start">Transaction Date</span>
          <span className="w-full flex items-center justify-start">Bill Source</span>
          <span className="w-full flex items-center justify-start">Description</span>
          <span className="w-full flex items-center justify-start">Price</span>
        </div></div>
      <div className="m-5 p-5 shadow text-black rounded-md">
        {data?.items.length > 0 ? data?.items?.map((el) => (
          <div className="w-full h-full grid grid-cols-4 p-2 border">
            <span className="w-full flex items-center justify-start">{formatDate(el?.createdAt)}</span>
            <span className="w-full flex items-center justify-start">{source(el)}</span>
            <span className="w-full flex items-center justify-start">{department(el)}</span>
            <span className="w-full flex items-center justify-start">NGN {cost(el)}</span>
          </div>
        )):  <div className="flex items-center flex-col justify-center w-full h-[100px]">
        <img src="/empty-list.svg" alt="empty" className="w-[20%] h-[70%]" />
        <h3>Result yet to be filled </h3>
      </div>}
      </div>
    </div>
  );
  return <div>
    <DataTable
      title=""
      columns={columns}
      data={userFinance?.data?.finances}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />

    </div>;
}

export default PaymentTable;
