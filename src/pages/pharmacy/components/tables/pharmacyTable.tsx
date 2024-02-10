import DataTable from "react-data-table-component";
import Loader from "../../../../components/ui/loader";
import { formatDate, formatDate1 } from "../../../../hooks/formattedDate";
import { useConfirmTreatment, useGetTreatments, useDeleteTreatment } from "../../../../hooks/reactQuery/usePharmacy";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { useState } from "react";
import DeleteWarningModal from "../../../../components/ui/modals/deletWarningModal";

function PharmacyTable({ treatments }) {
  console.log(treatments)
  const [showDelete, setShowDelete] = useState(false);
  const [rowData, setRowData] = useState(null)
  const { data: patientPharmarcy, refetch: patientRefetch, isLoading: loadingTreatments } = useGetTreatments();
  const {
    mutate,
    status: confirmTreatmentStatus,
    isLoading: confirmTreatmentLoading,
  } = useConfirmTreatment()
  const {
    mutate: deleteMutate,
    status: deleteTreatmentStatus,
    isLoading: deleteTreatmentLoading,
  } = useDeleteTreatment()

  if (loadingTreatments) {
    return <Loader />;
  }

  if (loadingTreatments || confirmTreatmentLoading || deleteTreatmentLoading) {
    return <Loader />;
  }


  if (confirmTreatmentStatus === "success") {
    toast.success("Pharmarcy order Dispensed successfully");
    patientRefetch()
    mutate(null)
  }
  if (deleteTreatmentStatus === "success") {
    toast.success("Pharmarcy order deleted");
    patientRefetch()
    deleteMutate(null)
  }

  const handleConfirmation = async (rowData) => {
    console.log(rowData, 'rowData')
    if (rowData?.paid) {
      const data = {
        id: rowData?.id,
        data: {
          dispensed: true
        }
      }
      await mutate(data)
    } else {
      toast.error("Patient Has not Paid for treatment")
    }

  }
  const handleDelete = (rowData) => {
    setShowDelete(true)
    setRowData(rowData)
  }
  const handleDeleteRecord = async () => {
    await deleteMutate(rowData.id)
    setShowDelete(false)
  }
  const columns = [
    {
      name: "Date",
      selector: (row) => formatDate(row?.createdAt),
      sortable: true,
      width: "100px",
    },
    {
      name: "Administered By",
      selector: (row) => (
        <div>
          {row?.administeredBy?.firstName} {row?.administeredBy?.lastName}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Patient",
      selector: (row) => (
        <div>
          {row?.patientId?.firstName} {row?.patientId?.lastName}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Patient ID",
      selector: (row) => <div>{row?.patientId?.patientId}</div>,
      sortable: true,
    },
    {
      name: "Total Cost",
      selector: (row) => <div> NGN {row?.amount}</div>,
      sortable: true,
    },

    {
      name: "Paid",
      selector: (row) => (
        <button
          onClick={() => handleConfirmation(row)}
          className={
            row?.paid
              ? "capitalize text-green-500 p-3 w-[80px] flex items-center justify-center rounded-full  font-bold"
              : "capitalize text-red-500 p-3 w-[80px] flex items-center justify-center rounded-full font-bold"
          }
        >
          {row?.paid ? 'Paid' : "Not Paid"}
        </button>
      ),
      sortable: true,
      width: '100px'
    },
    {
      name: "Status",
      selector: (row) => (
        <button
          onClick={() => handleConfirmation(row)}
          className={
            row?.dispensed
              ? "capitalize bg-green-500 p-3 w-[80px] flex items-center justify-center rounded-full text-white font-bold"
              : "capitalize bg-yellow-500 p-3 w-[80px] flex items-center justify-center rounded-full text-white font-bold"
          }
        >
          {row?.dispensed ? 'Dispensed' : "Pending"}
        </button>
      ),
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div className="w-full flex items-center justify-end">
          {!row.paid && <MdDeleteForever onClick={() => handleDelete(row)} className='text-red-500 text-xl' />}
        </div>

      ),
      width: '80px'
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <div className="relative">
      <div className="m-5 p-5 bg-black">
        <div className="w-full h-full grid grid-cols-6 bg-black text-white">
          <span className="w-full flex items-center justify-start">Name</span>
          <span className="w-full flex items-center justify-start">Manufacturer</span>
          <span className="w-full flex items-center justify-start">Quantity</span>
          <span className="w-full flex items-center justify-start">form</span>
          <span className="w-full flex items-center justify-start">unit</span>

          <span className="w-full flex items-center justify-start">Duration</span>
        </div></div>
      <div className="m-5 p-5 shadow text-black rounded-md">
        {data?.medication.length > 0 ? data?.medication?.map((el) => (
          <div className="w-full h-full grid grid-cols-6 p-2 border">
            <span className="w-full flex items-center justify-start">{el?.medicationId?.name}</span>
            <span className="w-full flex items-center justify-start">{el?.medicationId?.manufacturer}</span>
            <span className="w-full flex items-center justify-start">{el?.quantity}</span>
            <span className="w-full flex items-center justify-start">{el?.medicationId?.form}</span>
            <span className="w-full flex items-center justify-start">{el?.medicationId?.unit}</span>
            <span className="w-full flex items-center justify-start">{el?.duration}</span>
          </div>
        )) : <div className="flex items-center flex-col justify-center w-full h-[100px]">
          <img src="/empty-list.svg" alt="empty" className="w-[20%] h-[70%]" />
          <h3>Lab result yet to be filled </h3>
        </div>}
      </div>
      {data?.comment && <div className="m-5">
        <div className="flex items-center justify-end w-[50%]">
          <Accordion type="single" collapsible className="w-full p-5 bg-ha-primary2 rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>Comments</AccordionTrigger>
              {data?.comment.map((el) => (
                el?.text && (
                  <AccordionContent key={el?.id}>
                    <div className=" rounded w-full grid bg-white mb-2 p-2">
                      <div className="flex items-center justify-between ">
                        <span className="w-full flex items-center justify-start capitalize">
                          <span className="font-bold">By:</span> {el?.by?.firstName} {el?.by?.lastName}
                        </span>
                        <span className="w-full flex items-center justify-end font-bold">{formatDate1(el?.time)}</span>
                      </div>
                      <div className="flex items-center justify-start mt-2 capitalize font-bold">{el?.text}</div>
                    </div>

                  </AccordionContent>
                )
              ))}

            </AccordionItem>
          </Accordion>
        </div>
      </div>}
    </div>
  );

  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
          {showDelete && (
        <DeleteWarningModal
          setOpenModal={setShowDelete}
          openModal={showDelete}
          showCancelButton
          confirmTitle="Delete"
          confirmHandler={handleDeleteRecord}
        />
      )}
      <DataTable
        columns={columns}
        data={
          // treatments?.data
          //   ? treatments?.data
          //   : patientPharmarcy?.data?.treatments || []
          patientPharmarcy?.data?.treatments
        }
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default PharmacyTable;
