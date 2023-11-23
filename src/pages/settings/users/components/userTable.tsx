import { FaSearch } from 'react-icons/fa';
import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";

function UserTable() {
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
      name: "Last Login",
      selector: "lastLogin",
      sortable: true,
    },
    {
      name: "Password Recovery",
      selector: "passwordRecovery",
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
                  // Handle delete user
                  console.log("Delete User Clicked");
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

  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      lastLogin: "2022-02-15",
      passwordRecovery: "2022-02-20",
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      lastLogin: "2022-02-15",
      passwordRecovery: "2022-02-20",
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      lastLogin: "2022-02-15",
      passwordRecovery: "2022-02-20",
    },
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      lastLogin: "2022-02-15",
      passwordRecovery: "2022-02-20",
    },
    // Add more user data objects as needed
  ];

  return (
    <div className="w-full">
      <div className='border-b py-2 flex items-center justify-end'>
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
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default UserTable;
