import { Avatar, Dropdown } from "flowbite-react";
import { RiArrowDropDownLine } from "react-icons/ri";

function NavBar() {
  return (
    <div className="w-full navbar shadow-md z-[50] bg-white fixed top-0 left-0 right-0 flex items-center justify-between">
      <div className="flex items-center w-[50%]">
        <div>
          <Avatar
            alt="User settings"
            img="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            rounded
          />
        </div>

        <h1 className="font-bold text-xl ml-3 text-ha-primary1">Health App</h1>
      </div>
      <div className="flex items-center justify-end w-[50%] h-full">
        <Avatar
          alt="User settings"
          img="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          rounded
          bordered
        />
        <div className="flex flex-col items-start justify-center mx-5 !important">
          <span className="font-semibold text-ha-primary1">
            Prof. Kenneth Igbenedion
          </span>
          <span className="text-sm text-gray-500">Doctor</span>
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={<RiArrowDropDownLine />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavBar;
