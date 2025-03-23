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
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
  RegistrationForm,
  registrationFormDefaultValues,
  registrationSchema,
} from "./schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Icons from "@/components/ui/icons";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: registrationFormDefaultValues,
  });

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="h-6 w-6 text-blue-600">
                    <Icons.MediCare />
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
                      {...register("firstName")}
                      id="firstName"
                      placeholder="John"
                      className="pl-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    />
                    {errors.firstName && (
                      <p className="error">{errors.firstName.message}</p>
                    )}
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
                    {...register("lastName")}
                    placeholder="Doe"
                    className="h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName.message}</p>
                  )}
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
                      {...register("email")}
                      placeholder="name@example.com"
                      type="email"
                      className="pl-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    />
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
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
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </Label>
                <div className="relative group">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                  <Input
                    id="password"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                  />
                  {errors.password && (
                    <p className="error">{errors.password.message}</p>
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
                <p className="text-xs text-slate-500">
                  Password must be at least 8 characters long
                </p>
              </div>

              <Button className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                Create account
              </Button>

              <div className="text-center lg:text-left text-sm mt-3">
                <span className="text-slate-500">
                  Already have an account?{" "}
                </span>
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
    </form>
  );
}
