import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import * as React from "react";
import Layout from "@/pages/layout";
import DashboardPage from "@/pages/dashboard";

const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));
const RoleSelection = lazy(() => import("@/pages/role-selection"));
const PatientRegistration = lazy(
  () => import("@/pages/patient-registration/index")
);
const DoctorRegistration = lazy(() => import("@/pages/doctor-registration"));
const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(LoginPage),
    index: true,
  },
  {
    path: "register",
    element: React.createElement(RegisterPage),
  },
  {
    path: "",
    element: React.createElement(Layout),
    children: [
      {
        path: "dashboard",
        element: React.createElement(DashboardPage),
      },
      {
        path: "role-selection",
        element: React.createElement(RoleSelection),
      },
      {
        path: "patient-registration",
        element: React.createElement(PatientRegistration),
      },
      {
        path: "doctor-registration",
        element: React.createElement(DoctorRegistration),
      },
    ],
  },
]);

export default router;
