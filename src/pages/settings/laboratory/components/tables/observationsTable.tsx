import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";

function ObservationsTable() {
  interface Observation {
    id: number;
    observationName: string;
    type: string;
    uom: string;
    referenceRange: Array<string>;
  }

  const observationsData: Observation[] = [
    {
      id: 1,
      observationName: "B-HCG",
      type: "Float",
      uom: "m IU/mL",
      referenceRange: [
        "3RD WEEK 5-50",
        "4TH WEEK 5-426",
        "5TH WEEK 18-7,340",
        "6TH WEEK 1,080-56,500",
        "7-8 WEEK 7,650-229,000",
        "9-12 WEEK 25,700-288,000",
        "13-16 WEEK 13,300-254,000",
        "17-24 WEEK 4,000-165,400",
        "25-40 WEEK 3,640-117,000",
        "45-60 WEEK 4,5000-405,00",
      ],
    },
    {
      id: 2,
      observationName: "STOOL M/C/S",
      type: "Text",
      uom: "NIL",
      referenceRange: ["NIL"],
    },
    {
      id: 3,
      observationName: "stool analysis",
      type: "Text",
      uom: "NIL",
      referenceRange: ["NIL"],
    },
    {
      id: 4,
      observationName: "SFA",
      type: "Text",
      uom: "NIL",
      referenceRange: ["NIL"],
    },
    {
      id: 5,
      observationName: "PSA",
      type: "Integer",
      uom: "ng/mL",
      referenceRange: [
        "up to 4ng/mL-normal",
        "4-10ng/mL-prostatic hyperplasia",
        "10ng & above - prostatic tumors",
      ],
    },
    {
      id: 6,
      observationName: "FBS",
      type: "Integer",
      uom: "mmol/l",
      referenceRange: ["4.2-6.5"],
    },
    {
      id: 7,
      observationName: "RBS",
      type: "Integer",
      uom: "mmol/l",
      referenceRange: ["4.2-7.0"],
    },
    {
      id: 8,
      observationName: "TUMOUR MARKERS",
      type: "Integer",
      uom: "ng/mL",
      referenceRange: ["0-4"],
    },
    // Add other data objects as needed
  ];

  const columns = [
    {
      name: "Observation Name",
      selector: (row: Observation) => row.observationName,
      sortable: true,
      width: "200px",
    },
    {
      name: "Type",
      selector: (row: Observation) => row.type,
      sortable: true,
    },
    {
      name: "UoM",
      selector: (row: Observation) => row.uom,
      sortable: true,
    },
    {
      name: "Reference Range",
      cell: (row: Observation) => (
        <div className="w-full">
          {row.referenceRange.map((range, index) => (
            <div key={index} className="p-1 border w-full">
              {range}
            </div>
          ))}
        </div>
      ),
      sortable: true,
      width: "300px",
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
