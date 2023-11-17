import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/navbar";
import SideBar from "../components/ui/sidebar";
import FooterComponent from "../components/ui/footer";

function AppLayout() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <SideBar />
      <FooterComponent />
      <div className=" ml-[230px] mt-[100px] mr-[30px] mb-[100px]">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
