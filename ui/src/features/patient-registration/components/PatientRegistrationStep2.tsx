// components/patient-registration/step2.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

export function PatientRegistrationStep2() {
  const { register } = useFormContext();

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="allergies">Allergies</Label>
          <Textarea
            id="allergies"
            {...register("allergies")}
            placeholder="List any allergies you have (medications, food, etc.)"
            className="min-h-[80px] rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="chronicConditions">Chronic Conditions</Label>
          <Textarea
            id="chronicConditions"
            {...register("chronicConditions")}
            placeholder="List any chronic conditions you have"
            className="min-h-[80px] rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentMedications">Current Medications</Label>
          <Textarea
            id="currentMedications"
            {...register("currentMedications")}
            placeholder="List any medications you are currently taking"
            className="min-h-[80px] rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primaryPhysician">Primary Physician (if any)</Label>
          <Input
            id="primaryPhysician"
            {...register("primaryPhysician")}
            placeholder="Name of your primary doctor"
            className="h-11 rounded-xl"
          />
        </div>
      </CardContent>
    </Card>
  );
}
