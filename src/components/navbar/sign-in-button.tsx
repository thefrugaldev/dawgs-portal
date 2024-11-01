'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export const SignInButton = ({ onSignIn }: { onSignIn: () => void }) => {
  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      (
      <Button
        className="bg-glory hover:bg-glory/90"
        onSubmit={() => onSignIn()}
      >
        <Link href="/api/auth/login">Login</Link>
      </Button>
      )
    </div>
  );
};
