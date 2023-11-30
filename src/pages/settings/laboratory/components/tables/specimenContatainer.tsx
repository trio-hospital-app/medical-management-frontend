import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";

function SpecimenContainerTable() {

  interface SpecimenContainer {
    id: number;
    specimenName: string;
    color: string;
    description: string;
    specimen: string;
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const specimenContainerData: SpecimenContainer[] = [
    {
      id: 1,
      specimenName: "RBC",
      color: "Blood fountain",
      description: "Contact Lab",
      specimen: "Blood",
    },
    {
      id: 2,
      specimenName: "805000",
      color: "hello",
      description: "Plain paper",
      specimen: "hey",
    },
    {
      id: 3,
      specimenName: "Aerobic/Anaerobic Bottle",
      color: "Swab Stick",
      description: "Universal Container",
      specimen: "nan",
    },
    {
      id: 4,
      specimenName: "Plain Bottle",
      color: "Pain Bottle",
      description: "Plain bottle",
      specimen: "Plain Bottle",
    },
    // Add other data objects as needed
  ];

  specimenContainerData.forEach(item => {
    item.color = getRandomColor();
  });

  const columns = [
    {
      name: "Specimen Name",
      selector: (row: SpecimenContainer) => row.specimenName,
      sortable: true,
      width: "200px",
    },
    {
        name: "Color",
        selector: (row: SpecimenContainer) => (
          <div style={{ backgroundColor: row.color, width: "25px", height: "25px", borderRadius: '50px' }} />
        ),
        sortable: true,
      },
    {
      name: "Description",
      selector: (row: SpecimenContainer) => row.description,
      sortable: true,
    },
    {
      name: "Specimen",
      selector: (row: SpecimenContainer) => row.specimen,
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
  const handleRowClick = (specimenContainerId: number) => {
    navigate(`/specimencontainers/${specimenContainerId}`);
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
        <Button className="bg-ha-primary1 text-white">New Specimen Container</Button>
      </div>
      <DataTable
        // @ts-expect-error: Just ignore the next line
        columns={columns}
        data={specimenContainerData}
        onRowClicked={(row) => handleRowClick(row.id)}
      />
    </div>
  );
}

export default SpecimenContainerTable;
