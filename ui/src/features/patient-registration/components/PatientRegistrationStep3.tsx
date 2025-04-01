// components/patient-registration/step3.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";

export function PatientRegistrationStep3() {
  const { register, watch, setValue } = useFormContext();
  const preferredCommunication = watch("preferredCommunication");

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label>Emergency Contact</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="emergencyContactName"
              {...register("emergencyContactName")}
              placeholder="Contact Name"
              className="h-11 rounded-xl"
            />
            <Input
              id="emergencyContactRelationship"
              {...register("emergencyContactRelationship")}
              placeholder="Relationship"
              className="h-11 rounded-xl"
            />
            <Input
              id="emergencyContactPhone"
              {...register("emergencyContactPhone")}
              placeholder="Phone Number"
              className="h-11 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="insuranceProvider">Insurance Provider</Label>
          <Input
            id="insuranceProvider"
            {...register("insuranceProvider")}
            placeholder="e.g. Blue Cross Blue Shield"
            className="h-11 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="insurancePolicyNumber">Insurance Policy Number</Label>
          <Input
            id="insurancePolicyNumber"
            {...register("insurancePolicyNumber")}
            placeholder="Your policy number"
            className="h-11 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredPharmacy">Preferred Pharmacy</Label>
          <Input
            id="preferredPharmacy"
            {...register("preferredPharmacy")}
            placeholder="Name and location of your preferred pharmacy"
            className="h-11 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label>Preferred Communication Method</Label>
          <RadioGroup
            value={preferredCommunication}
            onValueChange={(value) => setValue("preferredCommunication", value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="phone" />
              <Label htmlFor="phone">Phone Call</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="sms" />
              <Label htmlFor="sms">SMS/Text Message</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}