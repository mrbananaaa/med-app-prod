import { Route, Routes } from "react-router-dom";
import { Symptom } from "./Symptom";

export const SymptomRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Symptom />} />
    </Routes>
  );
};
