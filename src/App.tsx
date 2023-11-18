import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Patients from "./pages/patients";
import Laboratory from "./pages/laboratory";
import Imaging from "./pages/imaging";
import Pharmacy from "./pages/pharmacy";
import OPD from "./pages/opd";
import Nursing from "./pages/nursing";
import NotFound from "./pages/NotFound";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import PatientId from "./pages/patients/components/patientId";
import Forms from "./pages/settings/forms";
import FormBuilder from "./pages/settings/forms/builder";

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
        <Route path="/patients/new" element={<PatientId />} />
        <Route path="/opd" element={<OPD />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/radiology" element={<Imaging />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/settings/forms" element={<Forms />} />
        <Route path="/settings/forms/:id" element={<FormBuilder />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
