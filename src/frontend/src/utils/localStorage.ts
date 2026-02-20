interface SensitiveData {
  journalEntries: Array<{ date: string; content: string }>;
  privateNotes: Array<{ id: string; content: string; timestamp: number }>;
  detailedLogs: Array<{ timestamp: number; type: string; data: unknown }>;
}

const STORAGE_KEY = 'tranquility_sensitive_data';

export function storeSensitiveData(data: Partial<SensitiveData>): void {
  try {
    const existing = getSensitiveData();
    const updated = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to store sensitive data:', error);
  }
}

export function getSensitiveData(): SensitiveData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to retrieve sensitive data:', error);
  }
  return {
    journalEntries: [],
    privateNotes: [],
    detailedLogs: [],
  };
}

export function clearSensitiveData(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportSensitiveData(): string {
  const data = getSensitiveData();
  return JSON.stringify(data, null, 2);
}
