import { useState } from "react";
import { Button } from "../../../components/ui/button";
import UserTable from "./components/userTable";
import BasicModal from "../../../components/ui/modals/basicModal";
import AddUser from "./components/addUser";
import { useRegister } from "../../../hooks/reactQuery/useUser";
import Loader from "../../../components/ui/loader";
import { toast } from "react-toastify";



function Users() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    role: [],
  });
  interface UserFormData {
    firstName: string;
    lastName: string;
    email: string;
    role: string[];
  }

  const {mutate, isLoading, data} = useRegister();

  if (isLoading) {
    return <Loader/>;
  }

  if(data && data.status){
    toast.success('User Created')
  }

  const handleSubmit = async () => {
    await mutate(formData);
    setShowAddUser(false);
    toast.success('user added successfully')
  };



  
  return (
    <div>
      <BasicModal
        title="Add User"
        setOpenModal={setShowAddUser}
        cancelTitle="Cancel"
        openModal={showAddUser}
        showCancelButton={true}
        submitTitle="Submit"
        showSubmitButton={true}
        size="3xl"
        submitHandler={() => handleSubmit()}
      >
        <AddUser setFormData={setFormData} />
      </BasicModal>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">User Management</h1>
        <Button
          className="bg-ha-primary1 text-white hover:bg-blue-600"
          onClick={() => setShowAddUser(true)}
        >
          Add User
        </Button>
      </div>
      <div className="px-5 py-2 flex items-center mt-5 bg-white rounded-lg">
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
