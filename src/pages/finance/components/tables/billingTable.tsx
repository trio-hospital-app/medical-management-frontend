import DataTable from "react-data-table-component";
import {
  useUserFinance,
  useMakePayment,
} from "../../../../hooks/reactQuery/useFinance";
import Loader from "../../../../components/ui/loader";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../../hooks/formattedDate";
import { useState } from "react";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { MdDelete } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { toast } from "react-toastify";

function BillingTable() {
  const { id } = useParams();
  const [selectedRows, setSelectedRows] = useState([]);
  const [total, setTotal] = useState();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { data: userFinance, isLoading: LoadinguserFinance } =
    useUserFinance(id);

  const {
    data: makepaymentUpdate,
    isLoading: LoadingMakePayment,
    mutate: makePaymentMutate,
  } = useMakePayment();

  if (LoadinguserFinance || LoadingMakePayment) {
    return <Loader />;
  }
  
  if (makepaymentUpdate && makepaymentUpdate.status) {
    // Optional: Handle success after all payments are made
    toast("All payments made successfully");
    setShowPaymentModal(false);
  }
  const department = (row) => {
    if (row.itemType === "labs") {
      return row?.labId?.panelId?.panel;
    }
  };

  const source = (row) => {
    if (row.itemType === "labs") {
      return "Laboratory";
    }
  };
  const columns = [
    {
      name: "Transaction Date",
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
    },
    {
      name: "Bill Source",
      selector: (row) => {
        source(row);
      },
      sortable: true,
    },

    {
      name: "Description",
      selector: (row) => {
        department(row);
      },
      sortable: true,
    },
    // {
    //   name: "Bill to",
    //   selector: (row) => row.billTo,
    //   sortable: true,
    // },
    // {
    //   name: "Bill Type",
    //   selector: (row) => row.billType,
    //   sortable: true,
    // },
    // {
    //   name: "Quantity",
    //   selector: (row) => row.quantity,
    //   sortable: true,
    // },
    {
      name: "Price",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Cleared Status",
      selector: (row) => {
        if (row.cleared) {
          return (
            <div className="bg-green-500 p-3 flex items-center justify-center font-bold text-white rounded">
              Cleared
            </div>
          );
        } else {
          return (
            <div className="bg-red-500 p-3 flex items-center justify-center font-bold text-white rounded">
              {" "}
              Not Cleared
            </div>
          );
        }
      },
      sortable: true,
    },
  ];

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
    let total = selectedRows.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    setTotal(total);
    console.log(selectedRows);
  };

  const SelectedRowsDisplay = ({ selectedRows, onDeleteRow }) => {
    return (
      <>
        {selectedRows.length === 0 ? (
          <div className="flex items-center flex-col justify-center w-full h-[200px]">
            <img
              src="/empty-list.svg"
              alt="empty"
              className="w-[50%] h-[60%]"
            />
            <h3>No Bill have been added yet </h3>
          </div>
        ) : (
          <div className="p-3">
            <h2 className="font-bold text-lg my-1">Selected Bills:</h2>
            <div>
              {selectedRows.map((row, index) => (
                <div
                  className="grid grid-cols-5 p-1 border rounded"
                  key={index}
                >
                  <div>{formatDate(row.createdAt)}</div>
                  <div>{source(row)}</div>
                  <div>{department(row)}</div>
                  <div>{row.amount}</div>
                  <button
                    onClick={() => onDeleteRow(index)}
                    className="flex items-center justify-center"
                  >
                    <MdDelete className="text-red-500 text-lg" />
                  </button>
                </div>
              ))}
            </div>

            <div className="font-bold text-lg flex items-center justify-start my-2">
              Total Payment:{" "}
              <span className="flex items-center justify-start ml-1">
                <TbCurrencyNaira className="text-xl" />
                {total}
              </span>
            </div>
          </div>
        )}
      </>
    );
  };

  const onDeleteRow = (index) => {
    const updatedRows = [...selectedRows];
    updatedRows.splice(index, 1);
    const total = updatedRows.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    setTotal(total);
    setSelectedRows(updatedRows);
  };

  const makePayment = async () => {
    if (selectedRows?.length === 0) {
      // Optional: Handle success after all payments are made
      toast("No Bill selected");
    }
    try {
      await Promise.all(
        selectedRows?.map(async (row) => {
          await makePaymentMutate(row.id);
        })
      );
    } catch (error) {
      console.log("Error making payments:", error);
      // Optional: Handle errors here
    }
  };

  return (
    <div className="w-full h-full relative">
      {showPaymentModal && (
        <BasicModal
          title="Make Payment"
          setOpenModal={setShowPaymentModal}
          openModal={showPaymentModal}
          cancelTitle="Cancel"
          submitTitle="Make Payment"
          showCancelButton={true}
          showSubmitButton={true}
          size="5xl"
          submitHandler={() => {
            makePayment();
          }}
        >
          {/* <DataTable columns={columns} data={selectedRows} /> */}
          <SelectedRowsDisplay
            selectedRows={selectedRows}
            onDeleteRow={onDeleteRow}
          />
        </BasicModal>
      )}
      <DataTable
        title=""
        columns={columns}
        data={userFinance?.data?.finances}
        selectableRows
        onSelectedRowsChange={handleChange}
        persistTableHead
        className="pt-10"
      />
      <div className="absolute rounded top-0 left-0 right-0 text-white bg-ha-primary1 p-2 flex items-center justify-between">
        <h1 className="font-bold">Total: NGN 0.00</h1>
        <button
          className="bg-white text-ha-primary1 px-4 py-1 rounded-lg font-bold hover:bg-slate-200"
          onClick={() => setShowPaymentModal(true)}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default BillingTable;
