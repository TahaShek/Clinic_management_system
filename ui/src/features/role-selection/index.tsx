// export default function DashboardPage() {
//   return <div>index</div>;
// }
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  User,
  ArrowRight,
  CheckCircle,
  X,
  Calendar,
  FileText,
  MessageSquare,
  Pill,
  Activity,
  Users,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";

// Service features for each role
const doctorFeatures = [
  {
    icon: <Users className="h-5 w-5 text-blue-600" />,
    title: "Patient Management",
    description: "Manage your patient records and appointments efficiently",
  },
  {
    icon: <Calendar className="h-5 w-5 text-blue-600" />,
    title: "Smart Scheduling",
    description: "AI-powered scheduling to optimize your working hours",
  },
  {
    icon: <FileText className="h-5 w-5 text-blue-600" />,
    title: "Digital Prescriptions",
    description: "Create and send digital prescriptions securely",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
    title: "Secure Messaging",
    description: "HIPAA-compliant messaging with patients and colleagues",
  },
];

const patientFeatures = [
  {
    icon: <Calendar className="h-5 w-5 text-blue-600" />,
    title: "Easy Appointments",
    description: "Book and manage appointments with just a few clicks",
  },
  {
    icon: <Pill className="h-5 w-5 text-blue-600" />,
    title: "Medication Tracking",
    description: "Track your medications and get timely reminders",
  },
  {
    icon: <Activity className="h-5 w-5 text-blue-600" />,
    title: "Health Monitoring",
    description: "Monitor your vital signs and health metrics",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
    title: "Doctor Consultations",
    description: "Message your healthcare providers securely",
  },
];

// Comparison table data
const comparisonData = [
  { feature: "Profile Management", doctor: true, patient: true },
  { feature: "Appointment Scheduling", doctor: true, patient: true },
  { feature: "Patient Records Access", doctor: true, patient: false },
  { feature: "Prescription Management", doctor: true, patient: true },
  { feature: "Medical History", doctor: true, patient: true },
  { feature: "Billing & Invoicing", doctor: true, patient: false },
  { feature: "Health Metrics Tracking", doctor: false, patient: true },
  { feature: "Medication Reminders", doctor: false, patient: true },
];

export default function RoleSelectionPage() {
  // const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"doctor" | "patient" | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"features" | "comparison">(
    "features"
  );

  const handleContinue = () => {
    if (!selectedRole) return;

    setIsLoading(true);

    // // Simulate loading
    // setTimeout(() => {
    //   // Redirect to the appropriate registration form
    //   // router.push(`/${selectedRole}-registration`);
    // }, 800);
  };

  return (
    <div className=" mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Choose Your Role
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Select how you'll be using the MediCare Clinic system. Your experience
          will be tailored based on your role.
        </p>
      </motion.div>

      {/* Services Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <Card className="border-none shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Our Premium Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">
                  State-of-the-Art Facilities
                </h3>
                <p className="text-slate-500 text-sm">
                  Access to modern medical equipment and comfortable facilities
                  for both doctors and patients.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">
                  Certified Professionals
                </h3>
                <p className="text-slate-500 text-sm">
                  Our platform connects you with certified healthcare
                  professionals with years of experience.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">
                  Comprehensive Care
                </h3>
                <p className="text-slate-500 text-sm">
                  From preventive care to specialized treatments, we offer a
                  full spectrum of healthcare services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Role Selection Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Doctor Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Card
              className={`cursor-pointer border-2 h-full ${
                selectedRole === "doctor"
                  ? "border-blue-500 bg-blue-50/50"
                  : "border-transparent hover:border-blue-200 hover:bg-blue-50/20"
              } transition-all duration-200`}
              onClick={() => setSelectedRole("doctor")}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <Stethoscope className="h-7 w-7 text-blue-600" />
                  </div>
                  {selectedRole === "doctor" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                    >
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </motion.div>
                  )}
                </div>
                <CardTitle className="text-2xl mt-4">I am a Doctor</CardTitle>
                <CardDescription className="text-base">
                  Healthcare provider looking to manage patients and
                  appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {doctorFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <div className="mt-0.5 mr-3">{feature.icon}</div>
                      <div>
                        <div className="font-medium text-slate-700">
                          {feature.title}
                        </div>
                        <div className="text-sm text-slate-500">
                          {feature.description}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  Perfect for healthcare professionals
                </Badge>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Patient Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Card
              className={`cursor-pointer border-2 h-full ${
                selectedRole === "patient"
                  ? "border-blue-500 bg-blue-50/50"
                  : "border-transparent hover:border-blue-200 hover:bg-blue-50/20"
              } transition-all duration-200`}
              onClick={() => setSelectedRole("patient")}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-7 w-7 text-blue-600" />
                  </div>
                  {selectedRole === "patient" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                    >
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </motion.div>
                  )}
                </div>
                <CardTitle className="text-2xl mt-4">I am a Patient</CardTitle>
                <CardDescription className="text-base">
                  Individual seeking healthcare services and appointment
                  management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {patientFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <div className="mt-0.5 mr-3">{feature.icon}</div>
                      <div>
                        <div className="font-medium text-slate-700">
                          {feature.title}
                        </div>
                        <div className="text-sm text-slate-500">
                          {feature.description}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  Ideal for individuals seeking healthcare
                </Badge>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Features and Comparison Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <Tabs
          defaultValue="features"
          onValueChange={(value) =>
            setActiveTab(value as "features" | "comparison")
          }
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
            <TabsTrigger value="features">Key Features</TabsTrigger>
            <TabsTrigger value="comparison">Role Comparison</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="features" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features by Role</CardTitle>
                    <CardDescription>
                      Discover the specialized features available for each role
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                          <Stethoscope className="h-5 w-5 mr-2 text-blue-600" />{" "}
                          Doctor Features
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Complete patient management system</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Electronic prescription writing</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Medical records management</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Appointment scheduling and management</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Billing and invoicing tools</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Secure messaging with patients</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                          <User className="h-5 w-5 mr-2 text-blue-600" />{" "}
                          Patient Features
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Easy appointment booking</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Personal health record access</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Medication tracking and reminders</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Secure messaging with doctors</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Health metrics monitoring</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>
                              Prescription history and refill requests
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Role Comparison</CardTitle>
                    <CardDescription>
                      Compare the features available to doctors and patients
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50">
                            <th className="text-left py-3 px-4 font-semibold text-slate-900 border-b">
                              Feature
                            </th>
                            <th className="text-center py-3 px-4 font-semibold text-slate-900 border-b">
                              <div className="flex items-center justify-center">
                                <Stethoscope className="h-4 w-4 mr-2 text-blue-600" />{" "}
                                Doctor
                              </div>
                            </th>
                            <th className="text-center py-3 px-4 font-semibold text-slate-900 border-b">
                              <div className="flex items-center justify-center">
                                <User className="h-4 w-4 mr-2 text-blue-600" />{" "}
                                Patient
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonData.map((item, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-slate-50"
                              }
                            >
                              <td className="py-3 px-4 border-b border-slate-200">
                                {item.feature}
                              </td>
                              <td className="py-3 px-4 border-b border-slate-200 text-center">
                                {item.doctor ? (
                                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                              </td>
                              <td className="py-3 px-4 border-b border-slate-200 text-center">
                                {item.patient ? (
                                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <Button
          onClick={handleContinue}
          disabled={!selectedRole || isLoading}
          className="w-full md:w-auto h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium text-base shadow-md hover:shadow-lg"
          size="lg"
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
              Processing...
            </div>
          ) : (
            <div className="flex items-center">
              Continue as{" "}
              {selectedRole
                ? selectedRole === "doctor"
                  ? "Doctor"
                  : "Patient"
                : "Selected Role"}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
