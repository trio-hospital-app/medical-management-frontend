import DataTable from "react-data-table-component";

function BillingTable() {
  const columns = [
    {
      name: "Transaction Date",
      selector: (row) => row.transactionDate,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Bill Source",
      selector: (row) => row.billSource,
      sortable: true,
    },
    {
      name: "Bill to",
      selector: (row) => row.billTo,
      sortable: true,
    },
    {
      name: "Bill Type",
      selector: (row) => row.billType,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Selling Price",
      selector: (row) => row.sellingPrice,
      sortable: true,
    },
    {
      name: "Cleared Status",
      selector: (row) => row.clearedStatus,
      sortable: true,
    },
  ];

  const data = [
    {
      transactionDate: "2023-12-08 15:48",
      description: "Cardiology",
      billSource: "Encounter",
      billTo: "SELF (PREPAID)",
      billType: "",
      quantity: 1,
      sellingPrice: 0.0,
      clearedStatus: "CLEARED",
    },
    {
      transactionDate: "2023-12-08 15:48",
      description: "Cardiology",
      billSource: "Laboratory",
      billTo: "SELF (PREPAID)",
      billType: "",
      quantity: 1,
      sellingPrice: 0.0,
      clearedStatus: "NOT CLEARED",
    },
    {
      transactionDate: "2023-12-08 15:48",
      description: "Cardiology",
      billSource: "Encounter",
      billTo: "SELF (PREPAID)",
      billType: "",
      quantity: 1,
      sellingPrice: 0.0,
      clearedStatus: "CLEARED",
    },
    // Add more data as needed
  ];
  return (
    <div className="w-full h-full relative">
      <DataTable
        title=""
        columns={columns}
        data={data}
        selectableRows
        persistTableHead
        className="pt-10"
      />
      <div className="absolute rounded top-0 left-0 right-0 text-white bg-ha-primary1 p-2 flex items-center justify-between">
        <h1 className="font-bold">Total: NGN 0.00</h1>
        <button className="bg-white text-ha-primary1 px-4 py-1 rounded-lg font-bold hover:bg-slate-200">
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default BillingTable;
