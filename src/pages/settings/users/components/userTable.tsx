import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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
            <Dropdown arrowIcon={false} inline label={<BsThreeDotsVertical style={{ color: "black" }} />}>
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
      <DataTable columns={columns} data={data}/>
      {/* Other modals */}
    </div>
  );
}

export default UserTable;
