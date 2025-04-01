// components/multi-step-form.tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface MultiStepFormProps {
  title: string;
  description: string;
  totalSteps: number;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  children: React.ReactNode;
  formMethods: UseFormReturn<any>;
  onSubmit: () => void;
  isLoading?: boolean;
}

export function MultiStepForm({
  title,
  description,
  totalSteps,
  currentStep,
  setCurrentStep,
  children,
  formMethods,
  onSubmit,
  isLoading = false,
}: MultiStepFormProps) {
  const { trigger } = formMethods;

  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger([
        "dateOfBirth",
        "gender",
        "height",
        "weight",
        "bloodType",
      ]);
    } else if (currentStep === 2) {
      isValid = await trigger([
        "allergies",
        "chronicConditions",
        "currentMedications",
        "primaryPhysician",
      ]);
    }

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Title and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-slate-500">{description}</p>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex justify-between items-center mb-6"
        >
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium ${
                  currentStep > index + 1
                    ? "bg-blue-600 text-white"
                    : currentStep === index + 1
                      ? "bg-blue-100 text-blue-600 border-2 border-blue-600"
                      : "bg-slate-100 text-slate-400"
                }`}
              >
                {currentStep > index + 1 ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 w-10 sm:w-16 md:w-24 lg:w-32 ${
                    currentStep > index + 1 ? "bg-blue-600" : "bg-slate-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </motion.div>

        <form onSubmit={onSubmit}>
          <div className="mt-6">
            {React.Children.map(children, (child, index) => (
              <motion.div
                key={`step-${index + 1}`}
                initial={{ opacity: 0, x: currentStep > index + 1 ? -20 : 20 }}
                animate={{
                  opacity: currentStep === index + 1 ? 1 : 0,
                  x:
                    currentStep === index + 1
                      ? 0
                      : currentStep > index + 1
                        ? -20
                        : 20,
                }}
                transition={{ duration: 0.3 }}
                className={currentStep === index + 1 ? "block" : "hidden"}
              >
                {child}
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between pt-6"
          >
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="h-11 rounded-xl"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isLoading}
                className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700"
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
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Complete Registration{" "}
                    <CheckCircle2 className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Button>
            )}
          </motion.div>
        </form>
      </motion.div>
    </FormProvider>
  );
}
