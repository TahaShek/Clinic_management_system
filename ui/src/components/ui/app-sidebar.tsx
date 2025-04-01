"use client";

import type { ReactNode } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  UserRound,
  ClipboardList,
  MessageSquare,
  Settings,
  LogOut,
  Pill,
  Home,
  Users,
  HelpCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

type SidebarLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  isActive?: boolean;
};

const SidebarLink = ({ href, icon, label, isActive }: SidebarLinkProps) => (
  <SidebarMenuItem>
    <SidebarMenuButton asChild isActive={isActive}>
      <Link to={href}>
        {icon}
        <span>{label}</span>
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

type AppSidebarProps = {
  userType?: "guest" | "doctor" | "patient";
  userName?: string;
  userRole?: string;
  userAvatar?: string;
};

export function AppSidebar({
  userType = "guest",
  userName = "Guest User",
  userRole = "Guest",
  userAvatar = "/placeholder.svg?height=40&width=40",
}: AppSidebarProps) {
  // const pathname = usePathname();

  // Define navigation items based on user type
  const getNavigationItems = () => {
    const commonItems = [
      { href: "/", icon: <Home className="h-5 w-5 mr-3" />, label: "Home" },
      {
        href: "/help",
        icon: <HelpCircle className="h-5 w-5 mr-3" />,
        label: "Help & Support",
      },
    ];

    if (userType === "guest") {
      return [
        ...commonItems,
        {
          href: "/role-selection",
          icon: <Users className="h-5 w-5 mr-3" />,
          label: "Choose Role",
        },
      ];
    }

    if (userType === "doctor") {
      return [
        {
          href: "/doctor-dashboard",
          icon: <BarChart3 className="h-5 w-5 mr-3" />,
          label: "Dashboard",
        },
        {
          href: "/appointments",
          icon: <CalendarDays className="h-5 w-5 mr-3" />,
          label: "Appointments",
        },
        {
          href: "/patients",
          icon: <UserRound className="h-5 w-5 mr-3" />,
          label: "Patients",
        },
        {
          href: "/medical-records",
          icon: <ClipboardList className="h-5 w-5 mr-3" />,
          label: "Medical Records",
        },
        {
          href: "/messages",
          icon: <MessageSquare className="h-5 w-5 mr-3" />,
          label: "Messages",
        },
        ...commonItems,
      ];
    }

    if (userType === "patient") {
      return [
        {
          href: "/patient-dashboard",
          icon: <BarChart3 className="h-5 w-5 mr-3" />,
          label: "Dashboard",
        },
        {
          href: "/appointments",
          icon: <CalendarDays className="h-5 w-5 mr-3" />,
          label: "Appointments",
        },
        {
          href: "/medical-records",
          icon: <ClipboardList className="h-5 w-5 mr-3" />,
          label: "Medical Records",
        },
        {
          href: "/medications",
          icon: <Pill className="h-5 w-5 mr-3" />,
          label: "Medications",
        },
        {
          href: "/messages",
          icon: <MessageSquare className="h-5 w-5 mr-3" />,
          label: "Messages",
        },
        ...commonItems,
      ];
    }

    return commonItems;
  };

  const navigationItems = getNavigationItems();

  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <div className="h-5 w-5 text-blue-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                  fill="currentColor"
                />
                <path
                  d="M12.5 22H4.5C3.12 22 2 20.88 2 19.5V18C2 16.9 2.9 16 4 16H13C14.1 16 15 16.9 15 18V19.5C15 20.88 13.88 22 12.5 22Z"
                  fill="currentColor"
                />
                <path
                  d="M15.5 10.5C17.16 10.5 18.5 9.16 18.5 7.5C18.5 5.84 17.16 4.5 15.5 4.5C13.84 4.5 12.5 5.84 12.5 7.5C12.5 9.16 13.84 10.5 15.5 10.5Z"
                  fill="currentColor"
                  opacity="0.4"
                />
                <path
                  d="M8.5 10.5C10.16 10.5 11.5 9.16 11.5 7.5C11.5 5.84 10.16 4.5 8.5 4.5C6.84 4.5 5.5 5.84 5.5 7.5C5.5 9.16 6.84 10.5 8.5 10.5Z"
                  fill="currentColor"
                />
                <path
                  d="M8.97 16C8.97 14.9 8.07 14 6.97 14H5C3.9 14 3 14.9 3 16"
                  fill="currentColor"
                  opacity="0.4"
                />
                <path
                  d="M20 18V19.5C20 20.88 18.88 22 17.5 22C16.12 22 15 20.88 15 19.5V18C15 16.9 15.9 16 17 16C18.1 16 19 16.9 19 18"
                  fill="currentColor"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="text-blue-700 font-bold text-base">MediCare</div>
            <div className="text-slate-500 text-xs">
              {userType === "doctor"
                ? "Doctor Portal"
                : userType === "patient"
                  ? "Patient Portal"
                  : "Healthcare System"}
            </div>
          </div>
        </div>
      </SidebarHeader>

      {/* Sidebar Navigation */}
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              // isActive={pathname === item.href}
            />
          ))}
        </SidebarMenu>

        <div className="px-3 mt-6 mb-2">
          <h3 className="text-xs font-medium text-slate-500">SETTINGS</h3>
        </div>
        <SidebarMenu>
          <SidebarLink
            href="/settings"
            icon={<Settings className="h-5 w-5 mr-3" />}
            label="Settings"
            // isActive={pathname === "/settings"}
          />
          <SidebarLink
            href="/logout"
            icon={<LogOut className="h-5 w-5 mr-3" />}
            label="Logout"
            // isActive={pathname === "/logout"}
          />
        </SidebarMenu>
      </SidebarContent>

      {/* User Profile */}
      <SidebarFooter>
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-700">{userName}</p>
            <p className="text-xs text-slate-500">{userRole}</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

// export function AppSidebarLayout({ children }: { children: ReactNode }) {
//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen">
//         <AppSidebar />
//         <div className="flex-1">
//           <div className="flex items-center h-16 px-4 border-b bg-white">
//             <SidebarTrigger />
//             <div className="ml-4 text-lg font-medium">MediCare Clinic</div>
//           </div>
//           <main className="p-4 md:p-6 bg-slate-50 min-h-[calc(100vh-4rem)]">
//             {children}
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }

export function AppSidebarLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center h-16 px-4 border-b bg-white">
            <SidebarTrigger />
            <div className="ml-4 text-lg font-medium">MediCare Clinic</div>
          </div>

          {/* Main content area - this will scroll if content is long */}
          <main className="flex-1 overflow-auto p-4 md:p-6 bg-slate-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
