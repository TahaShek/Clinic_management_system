"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  EyeIcon,
  EyeOffIcon,
  LockKeyhole,
  Mail,
  User,
  Phone,
} from "lucide-react";
import { useState } from "react";
import AuthImagePanel from "@/components/ui/auth-image-panel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left side - Image */}
      <AuthImagePanel />

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="w-full max-w-md">
          {/* Form branding */}
          <div className="flex flex-col items-center lg:items-start mb-4">
            <div className="flex items-center mb-2">
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
                <div className="text-blue-700 font-bold text-base">
                  MediCare Clinic
                </div>
                <div className="text-slate-500 text-xs">
                  Healthcare Management System
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-center lg:text-left mb-4">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Create an account
            </h1>
            <p className="text-sm text-slate-500">
              Join our healthcare platform
            </p>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-slate-700"
                >
                  First name
                </Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="pl-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-slate-700"
                >
                  Last name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    className="pl-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-700"
                >
                  Phone number
                </Label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    className="pl-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="userType"
                className="text-sm font-medium text-slate-700"
              >
                I am a
              </Label>
              <Select>
                <SelectTrigger className="h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="patient">Patient</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </Label>
              <div className="relative group">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-slate-400 hover:text-blue-500 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                Password must be at least 8 characters long
              </p>
            </div>

            <Button className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
              Create account
            </Button>

            <div className="text-center lg:text-left text-sm mt-3">
              <span className="text-slate-500">Already have an account? </span>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
