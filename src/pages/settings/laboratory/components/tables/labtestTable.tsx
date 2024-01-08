// import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaSearch } from "react-icons/fa";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
import BasicModal from "../../../../../components/ui/modals/basicModal";
import NewLabTests from "../newLabTests";
import Loader from "../../../../../components/ui/loader";
import {
  useAddLabTest,
  useGetLabTests,
  useUpdateLabTest,
  useDeleteLabTest,
  useSpecimens,
  useGetLabCenters,
} from "../../../../../hooks/reactQuery/useLabs";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import DeleteWarningModal from "../../../../../components/ui/modals/deletWarningModal";
import EditLabTests from "../editLabTests";

function LabTestsTable() {
  const [showCreate, setShowCreate] = useState(false);
  const [id, setId] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const { data: specimens, isLoading: LoadingLab } = useSpecimens();
  const { data: departments, isLoading: LoadingLabCenter } = useGetLabCenters();
  const { data: pageData, isLoading: LoadingLabTests } = useGetLabTests();
  const {
    mutate: editMutate,
    isLoading: editLoading,
    data: editData,
  } = useUpdateLabTest();

  const {
    data: deleteData,
    isLoading: LoadingDelete,
    mutate: deleteMutate,
  } = useDeleteLabTest();
  const {
    mutate: createMutate,
    isLoading: createLoading,
    data: createData,
  } = useAddLabTest();

  const [createFormData, setCreateFormData] = useState({
    panel: "",
    cost: 0,
    specimenId: "",
    centerId: "",
  });

  if (
    LoadingLabTests ||
    createLoading ||
    LoadingDelete ||
    editLoading ||
    LoadingLab ||
    LoadingLabCenter
  ) {
    return <Loader />;
  }

  if (deleteData?.status) {
    toast.success("Lab Test Deleted");
  }

  if (createData?.status) {
    toast.success("Lab Test Added successfully");
  }

  if (editData?.status) {
    toast.success("Lab Test Updated successfully");
  }

  const createLabTests = async () => {
    console.log(createFormData);
    try {
      await createMutate(createFormData);
      setShowCreate(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editLabTest = async () => {
    const data = {
      id,
      data: createFormData,
    };
    try {
      await editMutate(data);
      setShowEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = (id) => {
    setId(id);
    setShowDelete(true);
  };
  const deletePanel = async () => {
    try {
      await deleteMutate(id);
      setShowDelete(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleEdit = (id, content) => {
    console.log(content, id);
    setId(id);
    setShowEdit(true);
    setCreateFormData(content);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.panel,
      sortable: true,
      width: "350px",
    },
    {
      name: "Specimen Type",
      cell: (row) => (
        <div
          className="p-2 w-full flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: row?.specimenId?.color,
            // color: isLightColor(row.backgroundColor) ? "black" : "white",
            color: "white",
          }}
        >
          {row?.specimenId?.type}
        </div>
      ),
      selector: (row) => row?.specimenId?.type,
      sortable: true,
      width: "250px",
    },
    {
      name: "Description",
      selector: (row) => row?.specimenId?.description,
      sortable: true,
      width: "350px",
    },
    {
      cell: (row) => (
        <div className=" w-full flex justify-end items-center">
          {/* <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
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
          </div> */}
          <div className="w-full flex items-center justify-end gap-5">
            <FaEdit
              className="text-ha-primary1 text-lg cursor-pointer"
              onClick={() => handleEdit(row?.id, row)}
            />
            <MdDelete
              className="text-red-500 text-lg cursor-pointer"
              onClick={() => handleDelete(row?.id)}
            />
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
            createLabTests();
          }}
        >
          <NewLabTests
            createFormData={createFormData}
            setCreateFormData={setCreateFormData}
            specimens={specimens}
            departments={departments}
          />
        </BasicModal>
      )}
      {showEdit && (
        <BasicModal
          title="Edit Lab Test"
          setOpenModal={setShowCreate}
          cancelTitle="Cancel"
          openModal={showCreate}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={() => {
            editLabTest();
          }}
        >
          <EditLabTests
            createFormData={createFormData}
            setCreateFormData={setCreateFormData}
            specimens={specimens}
          />
        </BasicModal>
      )}
      {showDelete && (
        <DeleteWarningModal
          setOpenModal={setShowDelete}
          openModal={showDelete}
          showCancelButton
          confirmTitle="Delete"
          confirmHandler={deletePanel}
        />
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
