/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Dropdown } from "flowbite-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGetUserByToken } from "../../hooks/reactQuery/useUser";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function NavBar() {
  const [, , removeCookie] = useCookies(["accessToken"]);
  const navigate = useNavigate();

  const { data } = useGetUserByToken();
  const handleLogout = () => {
    removeCookie("accessToken");
    navigate("/login");
  };
  return (
    <div className="w-full navbar shadow-md z-[40] bg-white fixed top-0 left-0 right-0 flex items-center justify-between">
      <div className="flex items-center w-[50%]">
        <div>
          <Avatar
            alt="User settings"
            img="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            rounded
          />
        </div>

        <h1 className="font-bold text-xl ml-3 text-ha-primary1">MedOpt</h1>
      </div>
      <div className="flex items-center justify-end w-[50%] h-full">
        <Avatar
          alt="User settings"
          img="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          rounded
          bordered
        />
        <div className="md:flex hidden flex-col items-start justify-center mx-5">
          <span className="font-semibold text-ha-primary1 capitalize">
            {data?.data?.firstName} {data?.data?.lastName}
          </span>
          <span className="text-sm text-gray-500">
            {`${data?.data?.username} ${data?.data?.role}`}{" "}
          </span>
        </div>
        <Dropdown arrowIcon={false} inline label={<RiArrowDropDownLine />}>
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">
              <span className="text-sm text-gray-500">{data?.data?.email}</span>
            </span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavBar;
