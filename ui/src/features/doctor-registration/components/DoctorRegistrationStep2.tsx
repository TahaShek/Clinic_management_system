// components/doctor-registration/step2.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

export function DoctorRegistrationStep2() {
  const { register } = useFormContext();

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
              <Label htmlFor="hospitalAffiliation">Hospital Affiliation</Label>
              <Input
                id="hospitalAffiliation"
                {...register("hospitalAffiliation")}
                placeholder="e.g. MediCare General Hospital"
                className="h-11 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="officeAddress">Office Address</Label>
              <Textarea
                id="officeAddress"
                {...register("officeAddress")}
                placeholder="Enter your office address"
                className="min-h-[80px] rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="officePhone">Office Phone Number</Label>
              <Input
                id="officePhone"
                {...register("officePhone")}
                placeholder="e.g. +1 (555) 000-0000"
                className="h-11 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="consultationFee">Consultation Fee ($)</Label>
              <Input
                id="consultationFee"
                type="number"
                min="0"
                {...register("consultationFee")}
                placeholder="e.g. 150"
                className="h-11 rounded-xl"
              />
            </div>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
}