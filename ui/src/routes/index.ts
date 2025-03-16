import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import * as React from "react";
import Layout from "@/pages/layout";
import DashboardPage from "@/pages/dashboard";

const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));

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
    path: "dashboard",
    element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(DashboardPage),
      },
    ],
  },
]);

export default router;
