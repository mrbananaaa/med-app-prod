import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import { lazyImport } from "../utils/lazyImport";

const { HomeRoutes: Home } = lazyImport(
  () => import("../features/home"),
  "HomeRoutes",
);
const { SymptomRoutes: Symptom } = lazyImport(
  () => import("../features/symptom"),
  "SymptomRoutes",
);
const { DiagnosisRoutes: Diagnosis } = lazyImport(
  () => import("../features/diagnosis"),
  "DiagnosisRoutes",
);

export const AppRoutes = () => {
  const commonRoute: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/symptom",
      element: <Symptom />,
    },
    {
      path: "/diagnosis",
      element: <Diagnosis />,
    },
  ];

  const element = useRoutes([...commonRoute]);

  return (
    <>
      <MainLayout>{element}</MainLayout>
    </>
  );
};
