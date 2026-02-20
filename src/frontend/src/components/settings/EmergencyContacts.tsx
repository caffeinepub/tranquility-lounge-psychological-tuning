import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useGetUserData } from '../../hooks/useQueries';
import { Phone } from 'lucide-react';

export default function EmergencyContacts() {
  const { data: userData } = useGetUserData();

  const ukDefaults = [
    { name: 'Samaritans', phoneNumber: '116 123', relationship: 'Crisis support' },
    { name: 'NHS 111', phoneNumber: '111', relationship: 'Medical advice' },
  ];

  const contacts = userData?.emergencyContacts || [];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Store emergency contacts for quick access when you need support.
      </p>

      <div className="space-y-2">
        <p className="text-sm font-medium">UK Crisis Numbers</p>
        {ukDefaults.map((contact, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <div className="flex-1">
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-muted-foreground">{contact.relationship}</p>
              </div>
              <p className="font-mono text-sm">{contact.phoneNumber}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {contacts.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Your Contacts</p>
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <div className="flex-1">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                </div>
                <p className="font-mono text-sm">{contact.phoneNumber}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Button variant="outline" className="w-full">
        Add Contact
      </Button>
    </div>
  );
}
