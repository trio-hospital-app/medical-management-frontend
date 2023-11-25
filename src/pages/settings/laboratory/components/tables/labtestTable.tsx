import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../../../../components/ui/button";

function LabTestsTable() {
  interface LabTest {
    id: number;
    name: string;
    observations: string;
    specimenType: string;
    labUnit: string;
    backgroundColor: string;
  }

  const labTestData: LabTest[] = [
    {
      id: 1,
      name: "STOOL M/C/S",
      observations: "STOOL M/C/S",
      specimenType: "Plain Bottle",
      labUnit: "Serelogy",
      backgroundColor: "#F0F0F0",
    },
    {
      id: 2,
      name: "STOOL ANALYSIS",
      observations: "stool analysis",
      specimenType: "Contact Laboratory",
      labUnit: "Microbiology",
      backgroundColor: "blue",
    },
    {
      id: 3,
      name: "PSA",
      observations: "PSA",
      specimenType: "Lithium Heparin",
      labUnit: "Chemistry",
      backgroundColor: "purple",
    },
    {
      id: 4,
      name: "BHCG",
      observations: "BHCG",
      specimenType: "Lithium Heparin",
      labUnit: "Chemistry",
      backgroundColor: "gray",
    },
    {
      id: 5,
      name: "URINE M/C/S",
      observations: "URINE M/C/S",
      specimenType: "Flouride Oxalate",
      labUnit: "Microbiology",
      backgroundColor: "red",
    },
    {
      id: 6,
      name: "FBS",
      observations: "FBS",
      specimenType: "Lithium Heparin",
      labUnit: "Chemistry",
      backgroundColor: "yellow",
    },
    {
      id: 7,
      name: "RBS",
      observations: "RBS",
      specimenType: "Lithium Heparin",
      labUnit: "Chemistry",
      backgroundColor: "purple",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row: LabTest) => row.name,
      sortable: true,
      width: "250px",
    },
    {
      name: "Observations",
      selector: (row: LabTest) => row.observations,
      sortable: true,
      width: "250px",
    },
    {
      name: "Specimen Type",
      cell: (row: LabTest) => (
        <div
          className="p-2 w-[70%] flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: row.backgroundColor,
            color: isLightColor(row.backgroundColor) ? "black" : "white",
          }}
        >
          {row.specimenType}
        </div>
      ),
      selector: (row: LabTest) => row.specimenType,
      sortable: true,
      width: "250px",
    },
    {
      name: "Lab Unit",
      selector: (row: LabTest) => row.labUnit,
      sortable: true,
      width: "200px",
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

  // Function to check if a color is light or dark
  const isLightColor = (color: string): boolean => {
    // Calculate the perceived luminance of the color
    const luminance =
      (0.299 * parseInt(color.substr(1, 2), 16) +
        0.587 * parseInt(color.substr(3, 2), 16) +
        0.114 * parseInt(color.substr(5, 2), 16)) /
      255;
    return luminance > 0.5;
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
        <Button className="bg-ha-primary1 text-white">New Lab Test</Button>
      </div>
      <DataTable columns={columns} data={labTestData} />
    </div>
  );
}

export default LabTestsTable;
