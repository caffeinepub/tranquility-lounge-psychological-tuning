import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AccessibilitySettings from '../components/settings/AccessibilitySettings';
import EmergencyContacts from '../components/settings/EmergencyContacts';
import CrisisInfoLink from '../components/settings/CrisisInfoLink';
import DataExport from '../components/settings/DataExport';
import DeleteAccount from '../components/settings/DeleteAccount';
import AboutSection from '../components/settings/AboutSection';

export default function Settings() {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-light tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences, accessibility options, and account.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-light">Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <AccessibilitySettings />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-light">Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <EmergencyContacts />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-light">Crisis Information</CardTitle>
          </CardHeader>
          <CardContent>
            <CrisisInfoLink />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-light">Privacy & Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <DataExport />
            <Separator />
            <DeleteAccount />
          </CardContent>
        </Card>

        <AboutSection />
      </div>
    </div>
  );
}
