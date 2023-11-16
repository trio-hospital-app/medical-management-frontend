import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { GiSkeleton } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

interface DashboardCardProps {
  to: string;
  icon: ReactElement;
  title: string;
}

function DashboardCard({ to, icon, title }: DashboardCardProps) {
  return (
    <Link
      to={to}
      className="group w-full bg-white shadow-md rounded-md transition-transform transform hover:scale-105 flex items-center"
    >
      <div className="text-3xl bg-ha-primary1 p-5 h-full text-white">{icon}</div>
      <h2 className="text-lg text-ha-primary1 p-5 bg-ha-secondary1 w-full h-full font-medium">{title}</h2>
    </Link>
  );
}

function Dashboard() {
  return (
    <div className="Dashboard w-full">
      <div className="relative h-[200px] bg-gradient-to-r to-ha-primary1 from-purple-500 rounded-[1rem] shadow">
        <div className="absolute inset-0">
          {/* Image overlay */}
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Stethoscope-2.png"
            alt="Background"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-lg">
            Explore the amazing features of your dashboard.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 bg-white p-10 rounded-[1rem]">
        <DashboardCard
          to="/dashboard"
          icon={<MdDashboard />}
          title="Dashboard"
        />
        <DashboardCard to="/patients" icon={<IoIosPeople />} title="Patients" />
        <DashboardCard to="/opd" icon={<FaUserDoctor />} title="OPD" />
        <DashboardCard
          to="/laboratory"
          icon={<MdBloodtype />}
          title="Laboratory"
        />
        <DashboardCard
          to="/radiology"
          icon={<GiSkeleton />}
          title="Radiology"
        />
        <DashboardCard to="/pharmacy" icon={<GiMedicines />} title="Pharmacy" />
        <DashboardCard to="/nursing" icon={<FaUserNurse />} title="Nursing" />
        <DashboardCard
          to="/settings"
          icon={<IoMdSettings />}
          title="Settings"
        />
      </div>
    </div>
  );
}

export default Dashboard;
