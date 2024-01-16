import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../../../components/ui/button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BasicModal from "../../../../components/ui/modals/basicModal";
import {
  useAddRadiologyCenter,
  useGetRadiologyCenters,
  useUpdateRadiologyCenter,
  useDeleteRadiologyCenter,
} from "../../../../hooks/reactQuery/useRadiology";
import Loader from "../../../../components/ui/loader";
import { toast } from "react-toastify";
import DeleteWarningModal from "../../../../components/ui/modals/deletWarningModal";

function Departments() {
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // const [departments, setDepartments] = useState([]);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [id, setId] = useState("");
  const { data: departments, isLoading: LoadingLab, refetch } = useGetRadiologyCenters();
  const {
    data: deleteData,
    isLoading: LoadingDelete,
    mutate: deleteMutate,
  } = useDeleteRadiologyCenter();
  const {
    mutate: createMutate,
    isLoading: createLoading,
    data: createData,
  } = useAddRadiologyCenter();

  const {
    mutate: editMutate,
    isLoading: editLoading,
    data: editData,
  } = useUpdateRadiologyCenter();
  if (createLoading || editLoading || LoadingLab || LoadingDelete) {
    return <Loader />;
  }

  if (createData?.status) {
    toast.success("Department Added successfully");
    createMutate(null)
    refetch()
  }

  if (deleteData?.status) {
    toast.success("Department Deleted");
    deleteMutate(null)
    refetch()
  }

  if (editData?.status) {
    toast.success("Department Updated successfully");
    editMutate(null)
    refetch()
  }

  const handleCreate = () => {
    setShowCreate(true);
  };
  const handleDelete = (id) => {
    setId(id);
    setShowDelete(true);
  };

  const handleEdit = (id, center) => {
    setId(id);
    setEditText(center);
    setShowEdit(true);
  };

  const createDepartment = async () => {
    const data = { center: text };
    try {
      await createMutate(data);
      setShowCreate(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editDepartment = async () => {
    const data = { id, data: { center: editText } };
    try {
      await editMutate(data);
      setShowEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteDepartment = async () => {
    try {
      await deleteMutate(id);
      setShowDelete(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full">
      {showCreate && (
        <BasicModal
          title="New Lab Departments"
          setOpenModal={setShowCreate}
          cancelTitle="Cancel"
          openModal={showCreate}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={createDepartment}
        >
          <div className="grid">
            <label>Name Of Department e.g (X-ray Unit)</label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
          </div>
        </BasicModal>
      )}
      {showDelete && (
        <DeleteWarningModal
          setOpenModal={setShowDelete}
          openModal={showDelete}
          showCancelButton
          confirmTitle="Delete"
          confirmHandler={deleteDepartment}
        />
      )}
      {showEdit && (
        <BasicModal
          title=" Edit Department"
          setOpenModal={setShowEdit}
          cancelTitle="Cancel"
          openModal={showEdit}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={() => {
            editDepartment();
          }}
        >
          <div className="grid">
            <label>Name Of Department e.g (X-ray Unit)</label>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </div>
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
        <Button className="bg-ha-primary1 text-white" onClick={handleCreate}>
          New Department
        </Button>
      </div>

      <div className="rounded-[.5rem] py-5 px-5 grid md:grid-cols-3 gap-2">
        {departments?.data?.map((el) => (
          <div
            className="border hover:bg-white border-ha-primary1 bg-ha-primary2 px-5 py-3 rounded-[1rem] grid gap-3"
            key={el.id}
          >
            <h5 className="text-xl capitalize font-bold tracking-tight text-gray-900">
              {el?.center}
            </h5>

            <div className="w-full flex items-center justify-end gap-5">
              <FaEdit
                className="text-ha-primary1 text-lg cursor-pointer"
                onClick={() => handleEdit(el?.id, el?.center)}
              />
              <MdDelete
                className="text-red-500 text-lg cursor-pointer"
                onClick={() => handleDelete(el?.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {departments?.data?.length === 0 && (
        <div className="flex items-center flex-col justify-center w-full h-[400px]">
          <img src="/empty-list.svg" alt="empty" className="w-[50%] h-[60%]" />
          <h3>No Department have been added yet </h3>
        </div>
      )}
    </div>
  );
}

export default Departments;
