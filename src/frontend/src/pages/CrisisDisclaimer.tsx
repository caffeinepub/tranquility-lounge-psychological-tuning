import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, Phone } from "lucide-react";

export function CrisisDisclaimer() {
  const navigate = useNavigate();
  const [acknowledged, setAcknowledged] = useState(false);

  console.log('[CrisisDisclaimer] Acknowledged state:', acknowledged);

  const handleContinue = () => {
    console.log('[CrisisDisclaimer] Continue button clicked, acknowledged:', acknowledged);
    if (acknowledged) {
      navigate({ to: "/onboarding" });
    }
  };

  const handleAcknowledgeChange = (checked: boolean) => {
    console.log('[CrisisDisclaimer] Acknowledgment changed to:', checked);
    setAcknowledged(checked);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 space-y-6">
        <div className="flex items-center gap-3 text-warning">
          <AlertTriangle className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Important Information</h1>
        </div>

        <div className="space-y-4 text-foreground">
          <p className="text-lg font-medium">This app is not a substitute for professional help.</p>

          <p>
            If you're experiencing a mental health crisis or having thoughts of self-harm, please contact
            emergency services or a crisis helpline immediately.
          </p>

          <Card className="bg-muted p-4 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <Phone className="h-5 w-5" />
              <span>UK Crisis Numbers</span>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Emergency:</strong> 999 or 112
              </div>
              <div>
                <strong>Samaritans:</strong> 116 123 (24/7)
              </div>
              <div>
                <strong>Crisis Text Line:</strong> Text SHOUT to 85258
              </div>
              <div>
                <strong>NHS 111:</strong> Call 111 (mental health support)
              </div>
            </div>
          </Card>

          <p>
            This app provides tools for emotional regulation and self-management. It's designed to complement,
            not replace, professional mental health support.
          </p>
        </div>

        <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
          <Checkbox
            id="acknowledge"
            checked={acknowledged}
            onCheckedChange={handleAcknowledgeChange}
            className="mt-1"
          />
          <label htmlFor="acknowledge" className="text-sm cursor-pointer">
            I understand that this app is not a substitute for professional mental health care, and I will
            seek appropriate help if I'm in crisis.
          </label>
        </div>

        {!acknowledged && (
          <p className="text-sm text-warning font-medium">
            Please acknowledge the disclaimer to continue
          </p>
        )}

        <Button
          onClick={handleContinue}
          disabled={!acknowledged}
          className="w-full"
          size="lg"
        >
          I Understand - Continue to App
        </Button>
      </Card>
    </div>
  );
}
