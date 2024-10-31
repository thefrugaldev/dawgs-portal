'use client';

import * as React from "react"
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { CircleUserRound, LogOut, Sticker } from 'lucide-react';


export const SignInButton = ({ onSignIn }: { onSignIn: () => void }) => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
    return (
      <div>
        (
          <Button className="bg-glory hover:bg-glory/90" onSubmit={() => onSignIn()}>
          <Link href="/api/auth/login">Login</Link>
          </Button>
        )
      </div>
    );
 };