import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";

function ObservationsTable() {
  interface Observation {
    id: number;
    name: string;
    modality: string;
  }

  const observationsData: Observation[] = [
    { id: 1, name: "Tes", modality: "CT Unit" },
    { id: 2, name: "Ultrasound Scan Unit", modality: "Test" },
    { id: 3, name: "CT Unit", modality: "Sample" },
    { id: 4, name: "ECG Unit", modality: "Sample" },
    { id: 5, name: "Breast CT scan", modality: "X-ray Unit" },
    { id: 6, name: "CT Scan", modality: "X-ray Unit" },
    { id: 7, name: "Magnetic Resonance Imaging MRI", modality: "X-ray Unit" },
    { id: 8, name: "EEG", modality: "X-ray Unit" },
    { id: 9, name: "2-D Echo", modality: "X-ray Unit" },
    { id: 10, name: "ECG", modality: "X-ray Unit" },

  ];

  const columns = [
    {
      name: "Name",
      selector: (row: Observation) => row.name,
      sortable: true,
      width: "200px",
    },
    {
      name: "Department",
      selector: (row: Observation) => row.modality,
      sortable: true,
    },
    {
      cell: () => (
        <div className=" w-full flex justify-end items-center">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item
                onClick={() => {
                  // setShowLabModal(true);
                }}
              >
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  // setShowImagingModal(true);
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  const navigate = useNavigate();
  const handleRowClick = (observationId: number) => {
    navigate(`/observations/${observationId}`);
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-end border-y py-2 gap-2">
        <div className="relative w-[300px]">
          <input
            type="text"
            placeholder="Search by Name"
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <Button className="bg-ha-primary1 text-white">New Observation</Button>
      </div>
      <DataTable
        columns={columns}
        data={observationsData}
        onRowClicked={(row) => handleRowClick(row.id)}
      />
    </div>
  );
}

export default ObservationsTable;
