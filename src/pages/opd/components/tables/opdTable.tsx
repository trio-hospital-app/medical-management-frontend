import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";
import TakeNursingVitals from "../takeNursingVitals";
import { useGetConsultations } from "../../../../hooks/reactQuery/useVisit";
import Loader from "../../../../components/ui/loader";
import { formatDate } from "../../../../hooks/formattedDate";

function OpdTable({consults}) {
   
  const navigate = useNavigate();
  const [showVitalsModal, setShowVitalsModal] = useState(false);
  const {
    data: consultationData,
    isLoading: loadingConsults,
} = useGetConsultations();
  

if(loadingConsults) {
  return <Loader/>
}

  const columns = [
    {
      name: "Date",
      selector: (row) => formatDate(row?.createdAt),
      sortable: true,
      // width: "200px",
    },
    {
      name: "Visit ID",
      selector: (row) => row?.id,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Doctor",
      selector: (row) => <div>{row?.doctorId?.firstName} {row?.doctorId?.lastName}</div>,
      sortable: true,
    },
    {
      name: "Patient ID",
      selector: (row) => <div>{row?.patientId?.firstName} {row?.patientId?.lastName}</div>,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Visit Type",
      selector: (row) => row?.visitType[0]?.name,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      sortable: true,
      // width: "200px",
    },
    {
      cell: () => (
        <div className=" w-full flex justify-end items-center ">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item
                onClick={() => {
                  setShowVitalsModal(true);
                }}
              >
                Take Nursing Vitals
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  const handleRowClick = (patientId, cid) => {
    navigate(`/visits/${patientId}/${cid}`);
  };

  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
      <DataTable
        columns={columns}
        data={consultationData?.data?.consultations}
        onRowClicked={(row) => handleRowClick(row.patientId.id, row.id)}
      />

      {/* Nursing Vitals modal */}
      <BasicModal
        title="Take Nursing Vitals"
        setOpenModal={setShowVitalsModal}
        cancelTitle="Cancel"
        openModal={showVitalsModal}
        showCancelButton={true}
        submitTitle="Submit Vitals"
        showSubmitButton={true}
        size="4xl"
      >
        <TakeNursingVitals />
      </BasicModal>
    </div>
  );
}

export default OpdTable;
