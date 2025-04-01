// components/doctor-registration/step3.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

export function DoctorRegistrationStep3() {
  const { register, setValue, watch } = useFormContext();
  const preferredCommunication = watch("preferredCommunication", "email");

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
              <Label>Availability Schedule</Label>
              <Textarea
                {...register("availability")}
                placeholder="e.g. Monday-Friday: 9am-5pm, Saturday: 10am-2pm"
                className="min-h-[80px] rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label>Professional Bio</Label>
              <Textarea
                {...register("bio")}
                placeholder="Tell patients about your professional background"
                className="min-h-[150px] rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label>Preferred Communication Method</Label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    {...register("preferredCommunication")}
                    value="email"
                    checked={preferredCommunication === "email"}
                    onChange={() => setValue("preferredCommunication", "email")}
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    {...register("preferredCommunication")}
                    value="phone"
                    checked={preferredCommunication === "phone"}
                    onChange={() => setValue("preferredCommunication", "phone")}
                  />
                  <span>Phone Call</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    {...register("preferredCommunication")}
                    value="sms"
                    checked={preferredCommunication === "sms"}
                    onChange={() => setValue("preferredCommunication", "sms")}
                  />
                  <span>SMS/Text Message</span>
                </label>
              </div>
            </div>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
}