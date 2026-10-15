import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api, ApiError } from '@/lib/api';

export const meKey = ['me'] as const;

export function useAuth() {
  const qc = useQueryClient();

  const me = useQuery({
    queryKey: meKey,
    queryFn: async () => {
      try {
        return (await api.me()).user;
      } catch (e) {
        if (e instanceof ApiError && e.status === 401) return null; // signed out is a normal state
        throw e;
      }
    },
    staleTime: 5 * 60_000,
    retry: false,
  });

  const onSession = () => {
    void qc.invalidateQueries(); // refetch everything that depends on the session
  };

  const login = useMutation({ mutationFn: api.login, onSuccess: onSession });
  const register = useMutation({ mutationFn: api.register, onSuccess: onSession });
  const logout = useMutation({
    mutationFn: api.logout,
    onSuccess: () => {
      qc.setQueryData(meKey, null);
      qc.removeQueries({ queryKey: ['stats'] });
      onSession();
    },
  });

  return { user: me.data ?? null, isLoading: me.isLoading, login, register, logout };
}
