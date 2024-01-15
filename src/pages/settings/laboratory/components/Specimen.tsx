import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../../../components/ui/button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { SketchPicker } from "react-color";
import BasicModal from "../../../../components/ui/modals/basicModal";
import {
  useAddSpecimen,
  useSpecimens,
  useUpdateSpecimen,
  useDeleteLabSpecimen,
} from "../../../../hooks/reactQuery/useLabs";
import Loader from "../../../../components/ui/loader";
import { toast } from "react-toastify";
import DeleteWarningModal from "../../../../components/ui/modals/deletWarningModal";

function Specimen() {
  const [showCreate, setShowCreate] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [specimen, setSpecimen] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { data: specimens, isLoading: LoadingLab, refetch } = useSpecimens();
  const {
    data: deleteData,
    isLoading: LoadingDelete,
    mutate: deleteMutate,
  } = useDeleteLabSpecimen();
  const {
    mutate: createMutate,
    isLoading: createLoading,
    data: createData,
  } = useAddSpecimen();

  const {
    mutate: editMutate,
    isLoading: editLoading,
    data: editData,
  } = useUpdateSpecimen();
  if (createLoading || editLoading || LoadingLab || LoadingDelete) {
    return <Loader />;
  }

  if (createData?.status) {
    toast.success("Specimen Container Added successfully");
     createMutate(null)
    refetch()
  }

  if (deleteData?.status) {
    toast.success("Specimen Container Deleted");
    deleteMutate(null)
    refetch()
  }

  if (editData?.status) {
    toast.success("Specimen Container Updated successfully");
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

  const handleEdit = (id, content) => {
    setId(id);
    setSpecimen(content.specimen);
    setDescription(content.description);
    setType(content.type);
    setBackgroundColor(content.color);
    setShowEdit(true);
  };

  const createSpecimen = async () => {
    const data = { specimen, color: backgroundColor, description, type };
    try {
      await createMutate(data);
      setShowCreate(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editSpecimen = async () => {
    const data = {
      id,
      data: { specimen, color: backgroundColor, description, type },
    };
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

  const handleChangeComplete = async (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div className="w-full">
      {showCreate && (
        <BasicModal
          title="New Specimen Container"
          setOpenModal={setShowCreate}
          cancelTitle="Cancel"
          openModal={showCreate}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={createSpecimen}
        >
          <div className="grid gap-3">
            <div className="grid">
              <label>Name Of Vacutainer or Specimen Container e.g (EDTA)</label>
              <input type="text" onChange={(e) => setType(e.target.value)} />
            </div>

            <div className="grid">
              <label>Description</label>
              <textarea
                className="border"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid">
              <label>Specimen (Blood)</label>
              <input
                type="text"
                onChange={(e) => setSpecimen(e.target.value)}
              />
            </div>
            <div className="grid py-3">
              <label>Pick Container Color</label>
              <SketchPicker
                color={backgroundColor}
                onChangeComplete={handleChangeComplete}
              />
            </div>
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
            editSpecimen();
          }}
        >
          <div className="grid gap-3">
            <div className="grid">
              <label>Name Of Vacutainer or Specimen Container e.g (EDTA)</label>
              <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            <div className="grid">
              <label>Description</label>
              <textarea
                value={description}
                className="border"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid">
              <label>Specimen (Blood)</label>
              <input
                type="text"
                value={specimen}
                onChange={(e) => setSpecimen(e.target.value)}
              />
            </div>
            <div className="grid py-3">
              <label>Pick Container Color</label>
              <SketchPicker
                color={backgroundColor}
                onChangeComplete={handleChangeComplete}
              />
            </div>
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
          New Specimen Container
        </Button>
      </div>

      <div className="py-5 px-5 grid md:grid-cols-3 gap-2">
        {specimens?.data?.map((el) => (
          <div
            className="shadow-lg hover:bg-white bg-ha-primary2 grid p-2"
            key={el.id}
          >
            <div
              style={{ backgroundColor: el?.color }}
              className={`p-2 rounded-top-[1rem] flex items-center justify-center font-bold capitalize text-lg`}
            >
              {el.type}
            </div>
            <div className="flex items-center justify-center flex-col p-3 gap-5">
              <div className="flex items-center justify-start p-3">
                {el?.description}
              </div>

              <div className="w-full flex items-center justify-between px-3">
                <div className=" justify-start items-center">
                  <span className="capitalize border-ha-primary1 p-2 border shadow-lg rounded-3xl">
                    {el?.specimen}
                  </span>
                </div>
                <div className="w-full flex items-center justify-end gap-5">
                  <FaEdit
                    className="text-ha-primary1 text-lg cursor-pointer"
                    onClick={() => handleEdit(el?.id, el)}
                  />
                  <MdDelete
                    className="text-red-500 text-lg cursor-pointer"
                    onClick={() => handleDelete(el?.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {specimens?.data?.length === 0 && (
        <div className="flex items-center flex-col justify-center w-full h-[400px]">
          <img src="/empty-list.svg" alt="empty" className="w-[50%] h-[60%]" />
          <h3>No Specimen have been added yet </h3>
        </div>
      )}
    </div>
  );
}

export default Specimen;
