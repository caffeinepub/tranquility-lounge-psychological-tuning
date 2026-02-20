import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 space-y-6">
      <Button
        onClick={() => navigate({ to: '/settings' })}
        variant="ghost"
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Settings
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-light">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-amber dark:prose-invert max-w-none">
          <p className="lead">
            Your privacy is important to us. This policy explains how Tranquility Lounge Psychological Tuning collects, uses, and protects your personal information.
          </p>

          <h2>Data Controller</h2>
          <p>
            Valentina D. Diaconu is the data controller responsible for your personal information.
          </p>

          <h2>What Data We Collect</h2>
          <p>We collect and store the following information:</p>
          <ul>
            <li>Your goal focus and escalation patterns (selected during onboarding)</li>
            <li>Preferred tools and daily time windows</li>
            <li>Personalised plan configurations</li>
            <li>Regulation ratings (before/after reset intensity scores)</li>
            <li>Functional wellbeing metrics (sleep quality, focus readiness, energy levels)</li>
            <li>Habit completion records</li>
            <li>Favourite tools</li>
            <li>Emergency contacts (if you choose to add them)</li>
            <li>Accessibility preferences (text size, high contrast mode)</li>
          </ul>

          <h2>How We Store Your Data</h2>
          <p>
            We use a privacy-first approach to data storage:
          </p>
          <ul>
            <li><strong>Backend storage:</strong> Your profile, plans, and tracking metrics are stored securely on the Internet Computer blockchain.</li>
            <li><strong>Local storage:</strong> Sensitive information such as detailed journal entries, private notes, and granular activity logs are stored locally on your device and never transmitted to our servers.</li>
          </ul>

          <h2>How We Use Your Data</h2>
          <p>
            Your data is used solely to:
          </p>
          <ul>
            <li>Provide personalised regulation tools and recommendations</li>
            <li>Track your progress over time</li>
            <li>Generate insights about your regulation patterns</li>
            <li>Maintain your preferences and settings</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third parties.
          </p>

          <h2>Analytics</h2>
          <p>
            We only collect analytics data if you explicitly consent. You can withdraw consent at any time in Settings. Analytics, if enabled, help us understand how the app is used and improve the experience.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under GDPR, you have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data in a portable format</li>
            <li>Withdraw consent for analytics</li>
            <li>Object to data processing</li>
          </ul>
          <p>
            You can exercise these rights through the Settings page or by contacting us directly.
          </p>

          <h2>Data Retention</h2>
          <p>
            Your data is retained for as long as your account is active. When you delete your account, all data stored in our backend is permanently removed. Data stored locally on your device is also cleared.
          </p>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant changes by displaying a notice in the app.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy or how your data is handled, please contact Valentina D. Diaconu.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
