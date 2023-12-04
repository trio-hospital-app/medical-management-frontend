import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { QueryClient } from "react-query";
import {
  useDeleteUser,
  useGetUsers,
} from "../../../../hooks/reactQuery/useUser";
import Loader from "../../../../components/ui/loader";
import { toast } from "react-toastify";

function UserTable() {
  const { data: users, isLoading } = useGetUsers();
  const { mutate: deleteUser, isLoading: isDeleteUserLoading, data:DeleteUserData } = useDeleteUser();

  if (isLoading || isDeleteUserLoading) {
    return <Loader />;
  }

  if(DeleteUserData && DeleteUserData?.status){
    toast.success('User Deleted')
  }

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const columns = [
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Username",
      selector: "username",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
    },
    {
      name: "Online",
      selector: "online",
      sortable: true,
    },
    {
      
      cell: (row) => (
        <div className="w-full flex justify-end items-center">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item
                onClick={() => {
                  // Handle reset password
                  console.log("Reset Password Clicked");
                }}
              >
                Reset Password
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDeleteUser(row.id);
                }}
              >
                Delete User
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  // Handle edit user
                  console.log("Edit User Clicked");
                }}
              >
                Edit User
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  // Handle deactivate user
                  console.log("Deactivate User Clicked");
                }}
              >
                Deactivate User
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  return (
    <div className="w-full h-[50vh] p-5">
      <div className="border-b py-2 flex items-center justify-end">
        <div className="relative w-[300px]">
          <input
            type="text"
            placeholder="Search by Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </div>
      {/* @ts-expect-error: Just ignore the next line */}
      <DataTable columns={columns} data={users.data} />
    </div>
  );
}

export default UserTable;
