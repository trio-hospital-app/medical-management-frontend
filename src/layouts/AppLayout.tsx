import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/ui/navbar";
import SideBar from "../components/ui/sidebar";
import FooterComponent from "../components/ui/footer";
import { Cookies } from "react-cookie";

function AppLayout() {
  const cookies = new Cookies();
  const access = cookies.get("accessToken");
  const location = useLocation();

  return (
    <div className="w-full h-full">
      <NavBar />
      <SideBar />
      <FooterComponent />
      <div className=" md:ml-[230px] ml-[80px] mt-[100px] mr-[30px] mb-[100px]">
        {access ? (
          <Outlet />
        ) : (
          <Navigate to="/login" state={{ from: location }} replace />
        )}
      </div>
    </div>
  );
}

export default AppLayout;
