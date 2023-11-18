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
              <span className="hidden lg:flex">Dashboard</span>
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/patients" icon={IoIosPeople}>
              <span className="hidden lg:flex">Patients</span>
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/opd" icon={FaUserDoctor}>
              <span className="hidden lg:flex">OPD</span>
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/laboratory" icon={MdBloodtype}>
              <span className="hidden lg:flex">Laboratory</span>
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/radiology" icon={GiSkeleton}>
              <span className="hidden lg:flex">Radiology</span>
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/pharmacy" icon={GiMedicines}>
              <span className="hidden lg:flex">Pharmacy</span>
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/nursing" icon={FaUserNurse}>
              <span className="hidden lg:flex">Nursing</span>
            </Sidebar.Item>
            {/* <Sidebar.Item as={Link} to="/settings" icon={IoMdSettings}>
              <span className="hidden lg:flex">Settings</span>
            </Sidebar.Item> */}
            <Sidebar.Collapse icon={IoMdSettings} label="Settings">
              <Sidebar.Item as={Link} to="/settings">
                Laboratory
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/settings">
                Radiology
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/settings">
                Pharmarcy
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/settings/forms">
                Form Creation
              </Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
