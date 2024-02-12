import DataTable from "react-data-table-component";
import {
  useUserFinance,
  useMakePayment,
} from "../../../../hooks/reactQuery/useFinance";
import Loader from "../../../../components/ui/loader";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../../hooks/formattedDate";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { MdDelete } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { toast } from "react-toastify";
import generateCode from "../../../../lib/generateId";
import { useGetUserByToken } from "../../../../hooks/reactQuery/useUser";
import { useState } from "react";

function BillingTable() {
  const { id } = useParams();
  const [selectedRows, setSelectedRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [PaymentType, setPaymentType] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { data: userData } = useGetUserByToken();
  const {
    data: userFinance,
    isLoading: LoadinguserFinance,
    refetch,
  } = useUserFinance(id);

  const {
    isLoading: LoadingMakePayment,
    status: makepaymentUpdate,
    mutate: makePaymentMutate,
  } = useMakePayment();

  if (LoadingMakePayment || LoadinguserFinance) {
    return <Loader />;
  }

  if (makepaymentUpdate === "success") {
    toast.success("Payment made successfully");
    // Reset the success status
    makePaymentMutate(null);
  }

  // if (makepaymentUpdate && makepaymentUpdate.status) {
  //   // Optional: Handle success after all payments are made
  //   toast("All payments made successfully");
  //   setShowPaymentModal(false);
  // }

  const medications = (drugs) => {
    const drugNames = drugs.map((el) => {
      return el?.medicationId?.name;
    });
    console.log(drugs, drugNames, "drugNames");
    return drugNames.join(", ");
  };

  const department = (row) => {
    if (row.itemType === "labs") {
      return row?.labId?.panelId?.panel;
    }
    if (row.itemType === "radiology") {
      return row?.radiologyId?.testId?.test;
    }
    if (row.itemType === "consultations") {
      return row?.consultationId?.visitType[0]?.name;
    }
    if (row.itemType === "administered-drugs") {
      return medications(row?.administerId?.medication);
    }
  };

  const source = (row) => {
    if (row.itemType === "labs") {
      return "Laboratory";
    }
    if (row.itemType === "radiology") {
      return "Radiology";
    }
    if (row.itemType === "consultations") {
      return "Consultation";
    }
    if (row.itemType === "administered-drugs") {
      return "Pharmacy";
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
        return <div>{source(row)}</div>;
      },
      sortable: true,
    },

    {
      name: "Description",
      selector: (row) => {
        return (
          <div className="capitalize flex flex-wrap">{department(row)}</div>
        );
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
      0,
    );
    setTotal(total);
    console.log(selectedRows);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
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
          <div className="p-3 grid gap-3">
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

            <div className="flex flex-col">
              <label className="font-bold">Select Payment Option</label>
              <select value={PaymentType} onChange={handlePaymentTypeChange}>
                <option value="">Select</option>
                <option value="cash">Cash</option>
                <option value="pos">POS</option>
                <option value="transfer">Transfer</option>
              </select>
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
      0,
    );
    setTotal(total);
    setSelectedRows(updatedRows);
  };

  const makePayment = async () => {
    const receiptId = generateCode(userData?.data?.id);
    if (selectedRows?.length === 0) {
      // Optional: Handle success after all payments are made
      toast.error("No Bill selected");
    }
    if (!PaymentType) {
      toast.error("Select a payment type");
      return;
    }
    try {
      await Promise.all(
        selectedRows?.map(async (row) => {
          await makePaymentMutate({
            id: row.id,
            data: { receipt: receiptId, paymentType: PaymentType },
          });
        }),
      );
      await refetch();
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
        data={userFinance?.data?.finances && userFinance?.data?.finances}
        selectableRows
        onSelectedRowsChange={handleChange}
        persistTableHead
        className="pt-10"
      />
      <div className="absolute rounded top-0 left-0 right-0 text-white bg-ha-primary1 p-2 flex items-center justify-between">
        <h1 className="font-bold">Total: NGN {total}</h1>
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
