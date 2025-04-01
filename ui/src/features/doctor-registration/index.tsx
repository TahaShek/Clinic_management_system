// app/doctor-registration/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DoctorRegistrationStep1 } from "./components/DoctorRegistrationStep1";
import { DoctorRegistrationStep2 } from "./components/DoctorRegistrationStep2";
import { DoctorRegistrationStep3 } from "./components/DoctorRegistrationStep3";
import { MultiStepForm } from "./components/MultiStepForm";
import { doctorRegistrationSchema } from "./schema";

export default function DoctorRegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const formMethods = useForm({
    resolver: zodResolver(doctorRegistrationSchema),
    defaultValues: {
      preferredCommunication: "email",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log("Form submitted:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Handle success (redirect, show toast, etc.)
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MultiStepForm
      title="Doctor Registration"
      description="Complete your profile to start using the system"
      totalSteps={totalSteps}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(onSubmit)}
      isLoading={isLoading}
    >
      <DoctorRegistrationStep1 />
      <DoctorRegistrationStep2 />
      <DoctorRegistrationStep3 />
    </MultiStepForm>
  );
}
