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
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AuthFormSchema,
  authSchema,
  authSchemaDefaultValues,
} from "./schemas/authSchema";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: authSchemaDefaultValues,
  });

  const submit = (data: AuthFormSchema) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
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

              {/* <form className="space-y-4"> */}
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
                    {...register("email")}
                    className="pl-10 h-12 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    required
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message?.toString()}</p>
                  )}
                </div>
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
                    {...register("password")}
                    className="pl-10 pr-10 h-12 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    required
                  />
                  {errors.password && (
                    <p className="error">
                      {errors.password.message?.toString()}
                    </p>
                  )}

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
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
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
                // disabled={isLoading}
              >
                Sign in
              </Button>

              <div className="relative flex items-center justify-center my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
              </div>
              {/* </form> */}

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
      </form>
    </div>
  );
}
