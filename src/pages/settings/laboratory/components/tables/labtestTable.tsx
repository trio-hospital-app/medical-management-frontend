import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
import BasicModal from "../../../../../components/ui/modals/basicModal";
import NewLabTests from "../newLabTests";
import Loader from "../../../../../components/ui/loader";
import {
  useAddLabTest,
  useGetLabTests,
  //   useUpdateLabTest,
  //   useDeleteLabTest,
} from "../../../../../hooks/reactQuery/useLabs";
import { toast } from "react-toastify";

function LabTestsTable() {
  const [showCreate, setShowCreate] = useState(false);
  const { data: pageData, isLoading: LoadingLabTests } = useGetLabTests();
  const {
    mutate: createMutate,
    isLoading: createLoading,
    data: createData,
  } = useAddLabTest();
  const [createFormData, setCreateFormData] = useState({
    panel: "",
    labObservation: [],
    cost: "",
    specimenId: "",
    centerId: 0,
  });

  if (LoadingLabTests || createLoading) {
    return <Loader />;
  }

  if (createData?.status) {
    toast.success("Lab Test Added successfully");
  }

  const createLabTests = async () => {
    try {
      await createMutate(createFormData);
      setShowCreate(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  interface LabTest {
    id: number;
    panel: string;
    observations: string;
    specimenType: string;
    labUnit: string;
    backgroundColor: string;
  }

  const columns = [
    {
      name: "Name",
      selector: (row: LabTest) => row.panel,
      sortable: true,
      width: "300px",
    },
    {
      name: "Specimen Type",
      cell: (row: LabTest) => (
        <div
          className="p-2 w-[70%] flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: row.backgroundColor,
            // color: isLightColor(row.backgroundColor) ? "black" : "white",
            color: "white",
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
  // const isLightColor = (color: string): boolean => {
  //   // Calculate the perceived luminance of the color
  //   const luminance =
  //     (0.299 * parseInt(color.substr(1, 2), 16) +
  //       0.587 * parseInt(color.substr(3, 2), 16) +
  //       0.114 * parseInt(color.substr(5, 2), 16)) /
  //     255;
  //   return luminance > 0.5;
  // };

  const handleClick = () => {
    setShowCreate(true);
  };

  return (
    <div className="w-full">
      {showCreate && (
        <BasicModal
          title="New Lab Test"
          setOpenModal={setShowCreate}
          cancelTitle="Cancel"
          openModal={showCreate}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={() => {
            createLabTests;
          }}
        >
          <NewLabTests
            createFormData={createFormData}
            setCreateFormData={setCreateFormData}
          />
        </BasicModal>
      )}
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
        <Button className="bg-ha-primary1 text-white" onClick={handleClick}>
          New Lab Test
        </Button>
      </div>
      <DataTable columns={columns} data={pageData?.data || []} />
    </div>
  );
}

export default LabTestsTable;
