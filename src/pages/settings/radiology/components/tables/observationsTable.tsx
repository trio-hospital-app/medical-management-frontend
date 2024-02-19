import DataTable from "react-data-table-component";
import { FaEdit, FaSearch } from "react-icons/fa";
import { Button } from "../../../../../components/ui/button";
import {
  useGetRadiologyObservation,
  useDeleteRadiologyObservation,
  useAddRadiologyObservation,
  useUpdateRadiologyObservation,
  useGetRadiologyCenters,
} from "../../../../../hooks/reactQuery/useRadiology";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import Loader from "../../../../../components/ui/loader";
import { useState } from "react";
import BasicModal from "../../../../../components/ui/modals/basicModal";
import DeleteWarningModal from "../../../../../components/ui/modals/deletWarningModal";
import NewObservation from "../newObservation";

function ObservationsTable() {
  const [showCreate, setShowCreate] = useState(false);
  const [id, setId] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [createFormData, setCreateFormData] = useState({
    test: "",
    cost: 0,
    centerId: "",
  });
  const { data: departments, isLoading: LoadingCenter } =
    useGetRadiologyCenters();
  const {
    data: pageData,
    isLoading: LoadingLabTests,
    refetch,
  } = useGetRadiologyObservation();
  const {
    mutate: editMutate,
    isLoading: editLoading,
    data: editData,
  } = useUpdateRadiologyObservation();

  const {
    data: deleteData,
    isLoading: LoadingDelete,
    mutate: deleteMutate,
  } = useDeleteRadiologyObservation();
  const {
    mutate: createMutate,
    isLoading: createLoading,
    data: createData,
  } = useAddRadiologyObservation();

  if (deleteData?.status) {
    toast.success("Observation Deleted");
    deleteMutate(null);
    refetch();
  }

  if (createData?.status) {
    toast.success("Observation Added successfully");
    createMutate(null);
    refetch();
  }

  if (editData?.status) {
    toast.success("Observation Updated successfully");
    editMutate(null);
    refetch();
  }

  if (
    LoadingLabTests ||
    createLoading ||
    LoadingDelete ||
    editLoading ||
    LoadingCenter
  ) {
    return <Loader />;
  }
  const createImagingTests = async () => {
    try {
      await createMutate(createFormData);
      setShowCreate(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const editImaging = async () => {
    const data = {
      id,
      data: createFormData,
    };
    try {
      await editMutate(data);
      setShowEdit(false);
      setId("");
    } catch (error) {
      console.log(error.message);
    }
  };
  const deletePanel = async () => {
    try {
      await deleteMutate(id);
      setShowDelete(false);
      setId("");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = (id) => {
    setId(id);
    setShowDelete(true);
  };
  const handleEdit = (id, content) => {
    setId(id);
    setShowEdit(true);
    setCreateFormData(content);
  };

  const handleClick = () => {
    setCreateFormData({
      test: "",
      cost: 0,
      centerId: "",
    });
    setId("");
    setShowCreate(true);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.test, // Assuming 'test' is a primitive type
      sortable: true,
      width: "200px",
    },
    {
      name: "Department",
      selector: (row) => row.centerId.center, // Assuming 'center' is a primitive type
      sortable: true,
    },
    {
      name: "Cost",
      selector: (row) => `NGN ${row.cost}`, // Assuming 'cost' is a primitive type
      sortable: true,
    },
    {
      cell: (row) => (
        <div className="w-full flex justify-end items-center">
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

  return (
    <div className="w-full">
      {showCreate && (
        <BasicModal
          title="New Radiology Observation"
          setOpenModal={setShowCreate}
          cancelTitle="Cancel"
          openModal={showCreate}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={() => {
            createImagingTests();
          }}
        >
          <NewObservation
            createFormData={createFormData}
            departments={departments}
            setCreateFormData={setCreateFormData}
          />
        </BasicModal>
      )}
      {showEdit && (
        <BasicModal
          title="Edit Lab Test"
          setOpenModal={setShowEdit} // Corrected prop here
          cancelTitle="Cancel"
          openModal={showEdit} // Corrected prop here
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={() => {
            editImaging();
          }}
        >
          {/* <EditObservation
            createFormData={createFormData}
            departments={departments}
            setCreateFormData={setCreateFormData}
          /> */}
          <NewObservation
            createFormData={createFormData}
            departments={departments}
            setCreateFormData={setCreateFormData}
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
        <Button onClick={handleClick} className="bg-ha-primary1 text-white">
          New Observation
        </Button>
      </div>
      <DataTable columns={columns} data={pageData?.data || []} />
    </div>
  );
}

export default ObservationsTable;
