'use client';

import { SessionProvider } from 'next-auth/react';

export function AuthProvider({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
