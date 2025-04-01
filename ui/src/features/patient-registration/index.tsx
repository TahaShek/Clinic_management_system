// app/patient-registration/page.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MultiStepForm } from "../doctor-registration/components/MultiStepForm";
import { PatientRegistrationStep1 } from "./components/PatientRegistrationStep1";
import { PatientRegistrationStep2 } from "./components/PatientRegistrationStep2";
import { PatientRegistrationStep3 } from "./components/PatientRegistrationStep3";
import { PatientRegistrationFormData, patientRegistrationSchema } from "./schemas";


export default function PatientRegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const formMethods = useForm<PatientRegistrationFormData>({
    resolver: zodResolver(patientRegistrationSchema),
    defaultValues: {
      preferredCommunication: "email",
    },
  });

  const onSubmit = (data: PatientRegistrationFormData) => {
    setIsLoading(true);
    console.log("Form submitted:", data);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle success (redirect, show toast, etc.)
    }, 1500);
  };

  return (
    <MultiStepForm
      title="Patient Registration"
      description="Complete your profile to start using the system"
      totalSteps={totalSteps}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(onSubmit)}
      isLoading={isLoading}
    >
      <PatientRegistrationStep1 />
      <PatientRegistrationStep2 />
      <PatientRegistrationStep3 />
    </MultiStepForm>
  );
}