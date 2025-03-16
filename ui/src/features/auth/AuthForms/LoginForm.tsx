import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import AuthImagePanel from "@/components/ui/auth-image-panel";
import { Link } from "react-router-dom";
import Icons from "@/components/ui/icons";
import { useForm } from "react-hook-form";
import 

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  // // Hardcoded credentials for demo
  // const validCredentials = {
  //   email: "demo@medicare.com",
  //   password: "password123",
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left side - Image */}
      <AuthImagePanel />

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="w-full max-w-md space-y-6">
          {/* Form branding */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <div className="h-6 w-6 text-blue-600">
                  <Icons.MediCare />
                </div>
              </div>
              <div>
                <div className="text-blue-700 font-bold text-lg">
                  MediCare Clinic
                </div>
                <div className="text-slate-500 text-xs">
                  Healthcare Management System
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500">
              Please sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  required
                />
              </div>
              {email === "" ? (
                <p className="text-xs text-blue-600 mt-1">
                  Demo email: demo@medicare.com
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  required
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
              {password === "" ? (
                <p className="text-xs text-blue-600 mt-1">
                  Demo password: password123
                </p>
              ) : null}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="text-blue-500 border-slate-300 rounded data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              />
              <label
                htmlFor="remember"
                className="text-sm text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium text-base shadow-md hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </Button>

            <div className="relative flex items-center justify-center my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
            </div>
          </form>

          <div className="text-center lg:text-left text-sm">
            <span className="text-slate-500">Don't have an account? </span>
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
