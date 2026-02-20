import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useAccessibility } from '../../hooks/useAccessibility';
import { useGetUserData, useSaveUserData } from '../../hooks/useQueries';
import { toast } from 'sonner';

export default function AccessibilitySettings() {
  const { textSize, highContrast, setTextSize, setHighContrast } = useAccessibility();
  const { data: userData } = useGetUserData();
  const saveUserData = useSaveUserData();

  const handleTextSizeChange = async (size: 'small' | 'medium' | 'large') => {
    setTextSize(size);
    if (userData) {
      const sizeValue = size === 'small' ? 14 : size === 'large' ? 18 : 16;
      await saveUserData.mutateAsync({
        ...userData,
        textSize: BigInt(sizeValue),
      });
      toast.success('Text size updated');
    }
  };

  const handleHighContrastChange = async (enabled: boolean) => {
    setHighContrast(enabled);
    if (userData) {
      await saveUserData.mutateAsync({
        ...userData,
        highContrast: enabled,
      });
      toast.success(enabled ? 'High contrast enabled' : 'High contrast disabled');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="text-size">Text Size</Label>
        <Select value={textSize} onValueChange={handleTextSizeChange}>
          <SelectTrigger id="text-size">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="high-contrast">High Contrast Mode</Label>
        <Switch
          id="high-contrast"
          checked={highContrast}
          onCheckedChange={handleHighContrastChange}
        />
      </div>
    </div>
  );
}
