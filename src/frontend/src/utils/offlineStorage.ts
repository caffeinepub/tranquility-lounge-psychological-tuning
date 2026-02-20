interface CachedTool {
  id: string;
  name: string;
  category: string;
  data: unknown;
  cachedAt: number;
}

const CACHE_KEY = 'tranquility_offline_cache';

export function cacheToolData(tool: CachedTool): void {
  try {
    const cache = getOfflineCache();
    cache[tool.id] = tool;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Failed to cache tool:', error);
  }
}

export function getOfflineCache(): Record<string, CachedTool> {
  try {
    const stored = localStorage.getItem(CACHE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to retrieve cache:', error);
  }
  return {};
}

export function getCachedTool(id: string): CachedTool | null {
  const cache = getOfflineCache();
  return cache[id] || null;
}

export function isOnline(): boolean {
  return navigator.onLine;
}
