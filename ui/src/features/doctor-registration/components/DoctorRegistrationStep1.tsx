// components/doctor-registration/step1.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

const specializations = [
  "Cardiology", "Dermatology", /* ... other specializations */ 
];

export function DoctorRegistrationStep1() {
  const { register, setValue, watch } = useFormContext();
  const specialization = watch("specialization");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="specialization">Medical Specialization</Label>
              <Select
                value={specialization}
                onValueChange={(value) => setValue("specialization", value)}
              >
                <SelectTrigger className="h-11 rounded-xl">
                  <SelectValue placeholder="Select your specialization" />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="licenseNumber">Medical License Number</Label>
              <Input
                id="licenseNumber"
                {...register("licenseNumber")}
                placeholder="Enter your license number"
                className="h-11 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                type="number"
                min="0"
                {...register("yearsOfExperience")}
                placeholder="e.g. 5"
                className="h-11 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education & Qualifications</Label>
              <Textarea
                id="education"
                {...register("education")}
                placeholder="e.g. MD from Harvard Medical School"
                className="min-h-[100px] rounded-xl"
              />
            </div>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
}