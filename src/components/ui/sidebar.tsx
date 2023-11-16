import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdBloodtype } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { GiSkeleton } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function SideBar() {
  return (
    <div className="h-full custom-bg-black shadow-md z-[20]">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/dashboard" icon={MdDashboard}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/patients" icon={IoIosPeople}>
              Patients
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/opd" icon={FaUserDoctor}>
              OPD
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/laboratory" icon={MdBloodtype}>
              Laboratory
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/radiology" icon={GiSkeleton}>
              Radiology
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/pharmacy" icon={GiMedicines}>
              Pharmacy
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/nursing" icon={FaUserNurse}>
              Nursing
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/settings" icon={IoMdSettings}>
              Settings
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
