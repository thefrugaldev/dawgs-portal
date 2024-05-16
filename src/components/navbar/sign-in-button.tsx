'use client';

// import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const SignInButton = ({ onSignIn }: { onSignIn: () => void }) => {
  return (
    <>
      <Button className="bg-glory hover:bg-glory/90" onClick={() => onSignIn()}>
        Sign in
      </Button>
    </>
  );
};
