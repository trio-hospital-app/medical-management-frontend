import { useState } from "react";
import { Button } from "../../../components/ui/button";
import UserTable from "./components/userTable";
import BasicModal from "../../../components/ui/modals/basicModal";
import AddUser from "./components/addUser";

function Users() {
  const [showAddUser, setShowAddUser] = useState(false);
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
      >
        <AddUser />
      </BasicModal>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">User Management</h1>
        <Button className="bg-ha-primary1 text-white hover:bg-blue-600" onClick={()=> setShowAddUser(true)}> 
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
