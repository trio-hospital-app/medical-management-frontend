import { Button } from "flowbite-react";
import DataTable from "react-data-table-component";
import NewTreatment from "./newTreatment";
import { toast } from "react-toastify";
import {
  useAddTreatment,
  useGetPharmacy,
  useGetUserTreatmentB,
} from "../../../../hooks/reactQuery/usePharmacy";
import Loader from "../../../../components/ui/loader";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";
import { formatDate } from "../../../../hooks/formattedDate";

function PharmacyTable({ id, cid, patientData }) {
  const {
    data: medicationOptions,
    refetch: pharmRefetch,
    isLoading: loadingPharmacy,
  } = useGetPharmacy();
  const {
    data: patientPharmarcy,
    refetch: patientRefetch,
    isLoading: loadingTreatments,
  } = useGetUserTreatmentB(id);
  const {
    mutate,
    status: addTreatmentStatus,
    isLoading: addTreatmentLoading,
  } = useAddTreatment();
  const [showTreatmentModal, setShowTreatmentModal] = useState(false);
  const [formData, setFormData] = useState({
    consultationId: cid,
    text: "",
    medication: [{ medicationId: "", quantity: "", duration: "" }],
    unavailable: [{ drug: "", quantity: "", duration: "" }],
  });

  if (loadingPharmacy || loadingTreatments || addTreatmentLoading) {
    return <Loader />;
  }

  if (addTreatmentStatus === "success") {
    toast.success("Pharmacy order created successfully");
    patientRefetch();
    mutate(null);
  }
  const handleSubmit = async () => {
    await mutate(formData);
    setShowTreatmentModal(false);
  };

  const columns = [
    {
      name: "Administered By",
      selector: (row) =>
        `${row.administeredBy.firstName} ${row.administeredBy.lastName}`,
      sortable: true,
      with: "200px",
    },
    {
      name: "Date",
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => `NGN ${row.amount}`,
      sortable: true,
    },
    {
      name: "Paid",
      cell: (row) => (
        <button
          className={
            row?.paid
              ? "capitalize text-green-500 p-3 w-[80px] flex items-center justify-center rounded-full  font-bold"
              : "capitalize text-red-500 p-3 w-[80px] flex items-center justify-center rounded-full font-bold"
          }
        >
          {row?.paid ? "Paid" : "Not Paid"}
        </button>
      ),
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <button
          className={
            row?.dispensed
              ? "capitalize bg-green-500 p-3 w-[100px] flex items-center justify-center rounded-full text-white font-bold"
              : "capitalize bg-yellow-500 p-3 w-[100px] flex items-center justify-center rounded-full text-white font-bold"
          }
        >
          {row?.dispensed ? "Dispensed" : "Pending"}
        </button>
      ),
      sortable: true,
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <div className="relative p-5 bg-red">
      <div className="flex items-center my-2">
        <span className="mr-2 font-bold">Doctors Comment:</span>
        <span className="text-ha-primary1">
          {data.comment[0]?.text ? data.comments[0].text : "Nil"}
        </span>
      </div>
      <div className="shadow-lg bg-ha-primary2 p-1 rounded-lg mb-3">
        <div className="border-b border-blue-200 w-full px-5 py-1 font-bold text-grey ">
          Drugs Prescribed
        </div>
        <div className="m-5 p-5 bg-black shadow">
          <div className="w-full h-full grid grid-cols-6 bg-black text-white">
            <span className="w-full flex items-center justify-start">Name</span>
            <span className="w-full flex items-center justify-start">
              Manufacturer
            </span>
            <span className="w-full flex items-center justify-start">
              Quantity
            </span>
            <span className="w-full flex items-center justify-start">form</span>
            <span className="w-full flex items-center justify-start">unit</span>

            <span className="w-full flex items-center justify-start">
              Duration
            </span>
          </div>
        </div>
        <div className="m-5 p-5  text-black rounded-md bg-white">
          {data?.medication.length > 0 &&
            data?.medication?.map((el) => (
              <div className="w-full h-full grid grid-cols-6 p-2 border">
                <span className="w-full flex items-center justify-start">
                  {el?.medicationId?.name}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.medicationId?.manufacturer}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.quantity}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.medicationId?.form}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.medicationId?.unit}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.duration}
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="shadow-lg bg-red-100 p-1 rounded-lg mb-2">
        <div className="border-b border-red-200 w-full px-5 py-1 font-bold text-grey ">
          Unavailable Drugs
        </div>
        <div className="m-5 p-5 bg-black shadow">
          <div className="w-full h-full grid grid-cols-3 bg-black text-white">
            <span className="w-full flex items-center justify-start">Name</span>
            <span className="w-full flex items-center justify-start">
              Quantity
            </span>
            <span className="w-full flex items-center justify-start">
              Duration
            </span>
          </div>
        </div>
        <div className="m-5 p-5  text-black rounded-md bg-white">
          {data?.outOfStockDrugs.length > 0 &&
            data?.outOfStockDrugs?.map((el) => (
              <div className="w-full h-full grid grid-cols-3 p-2 border">
                <span className="w-full flex items-center justify-start">
                  {el?.drug}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.quantity}
                </span>
                <span className="w-full flex items-center justify-start">
                  {el?.duration}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <BasicModal
        title="New Pharmacy Order"
        setOpenModal={setShowTreatmentModal}
        openModal={showTreatmentModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="4xl"
        submitHandler={() => handleSubmit()}
      >
        <NewTreatment
          medicationOptions={medicationOptions}
          formData={formData}
          setFormData={setFormData}
        />
      </BasicModal>
      <div className="flex justify-end items-center ">
        <Button
          className="bg-ha-primary1 text-white"
          onClick={() => setShowTreatmentModal(true)}
        >
          Order Pharmacy for Patient
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={patientPharmarcy.data.administer}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default PharmacyTable;
