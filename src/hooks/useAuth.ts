import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    // placeholder: load persisted auth state
  }, []);
  return { user, signIn: () => setUser({ id: '1', name: 'Demo' }), signOut: () => setUser(null) };
}
