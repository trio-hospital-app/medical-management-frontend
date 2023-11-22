import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";
import TakeNursingVitals from "../takeNursingVitals";

function OpdTable() {
  const [showVitalsModal, setShowVitalsModal] = useState(false);

  interface OPD {
    id: number;
    date: string;
    encounterId: number;
    clinic: string;
    patientId: string;
    visitType: string;
    status: string;
  }

  const columns = [
    {
      name: "Date",
      selector: (row: OPD) => row.date,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Encounter ID",
      selector: (row: OPD) => row.encounterId,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Clinic",
      selector: (row: OPD) => row.clinic,
      sortable: true,
    },
    {
      name: "Patient ID",
      selector: (row: OPD) => row.patientId,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Visit Type",
      selector: (row: OPD) => row.visitType,
      sortable: true,
      // width: "200px",
    },
    {
      name: "Status",
      selector: (row: OPD) => row.status,
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

  const data: OPD[] = [
    {
      id: 1,
      date: "03/15/2023",
      encounterId: 123,
      clinic: "General Clinic",
      patientId: "54321",
      visitType: "Walk In",
      status: "seen",
    },
    {
      id: 2,
      date: "03/15/2023",
      encounterId: 123,
      clinic: "General Clinic",
      patientId: "54321",
      visitType: "Walk In",
      status: "Not seen",
    },
    {
      id: 3,
      date: "03/15/2023",
      encounterId: 123,
      clinic: "General Clinic",
      patientId: "54321",
      visitType: "Appointment",
      status: "Seen",
    },
    {
      id: 4,
      date: "03/15/2023",
      encounterId: 123,
      clinic: "General Clinic",
      patientId: "54321",
      visitType: "Appointment",
      status: "Not Seen",
    },
    {
      id: 5,
      date: "03/15/2023",
      encounterId: 123,
      clinic: "General Clinic",
      patientId: "54321",
      visitType: "Appontment",
      status: "Seen",
    },
    // Add more data objects as needed
  ];

  const navigate = useNavigate();

  const handleRowClick = (patientId: number) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
      <DataTable
        columns={columns}
        data={data}
        onRowClicked={(row) => handleRowClick(row.id)}
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
        size='4xl'
      >
        <TakeNursingVitals />
      </BasicModal>
    </div>
  );
}

export default OpdTable;
