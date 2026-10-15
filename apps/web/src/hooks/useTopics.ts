import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { usePreferences } from '@/stores/preferences';

export function useTopics() {
  const provider = usePreferences((s) => s.provider);
  return useQuery({
    queryKey: ['topics', provider],
    queryFn: async () => (await api.topics(provider)).topics,
    staleTime: 10 * 60_000,
  });
}
