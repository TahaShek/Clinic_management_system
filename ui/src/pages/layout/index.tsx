import { AppSidebarLayout } from "@/components/ui/app-sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <AppSidebarLayout>
        <Outlet />
      </AppSidebarLayout>
    </>
  );
}

export default Layout;
