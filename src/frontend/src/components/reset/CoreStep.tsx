import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CoreStepProps {
  coreInterpretation: string;
  onCoreInterpretationChange: (value: string) => void;
}

export function CoreStep({ coreInterpretation, onCoreInterpretationChange }: CoreStepProps) {
  console.log('[CoreStep] Current interpretation length:', coreInterpretation.length);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    console.log('[CoreStep] Interpretation changed, length:', value.length);
    onCoreInterpretationChange(value);
  };

  const isValid = coreInterpretation.trim().length > 0;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Core: What's the real story?</h2>
        <p className="text-muted-foreground">
          Beneath the surface emotion, what's actually happening? What need or value is at stake?
        </p>
        {!isValid && (
          <p className="text-sm text-warning font-medium">Please write your interpretation to continue</p>
        )}
      </div>

      <div className="space-y-3">
        <Label htmlFor="core-interpretation" className="text-base font-medium">
          Your interpretation
        </Label>
        <Textarea
          id="core-interpretation"
          placeholder="Example: I'm worried about letting people down... I value being reliable..."
          value={coreInterpretation}
          onChange={handleChange}
          className="min-h-[150px] resize-none"
          aria-required="true"
        />
        <p className="text-sm text-muted-foreground">
          Take a moment to reflect on what's really driving this feeling.
        </p>
      </div>
    </div>
  );
}
