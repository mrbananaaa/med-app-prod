import { Route, Routes } from "react-router-dom";
import { Diagnosis } from "./Diagnosis";

export const DiagnosisRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Diagnosis />} />
    </Routes>
  );
};
