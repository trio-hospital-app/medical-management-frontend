import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Patients from "./pages/patients";
import PatientId from './pages/laboratory/componenets/takeSpecimen'
import Laboratory from "./pages/laboratory";
import Imaging from "./pages/imaging";
import Pharmacy from "./pages/pharmacy";
import Settings from "./pages/settings";
import OPD from "./pages/opd";
import Nursing from "./pages/nursing";
import NotFound from "./pages/NotFound";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import TakeSpecimen from "./pages/laboratory/componenets/takeSpecimen";

function App() {
  return (
    <Routes>
      {/* login route */}
      <Route path="/login" element={<AuthLayout />} />

      {/* routes in the applayout */}
      <Route path="/" element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/:id" element={<PatientId />} />
        <Route path="/laboratory/:id" element={<TakeSpecimen />} />
        <Route path="/patients/new" element={<PatientId />} />
        <Route path="/opd" element={<OPD />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/radiology" element={<Imaging />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
