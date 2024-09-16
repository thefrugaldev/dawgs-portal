'use client';

import * as React from "react"

import { Button } from '@/components/ui/button';
/* original
export const SignInButton = ({ onSignIn }: { onSignIn: () => void }) => {
 return (
    <>
      <Button className="bg-glory hover:bg-glory/90" onClick={() => onSignIn()}>
        Sign in
      </Button>
    </>
  );
};
*/

export const SignInButton = ({ onSignIn }: { onSignIn: () => void }) => {
  return (
     <>
       <Button className="bg-glory hover:bg-glory/90" onClick={() => onSignIn()}>
        <a href="/api/auth/login">Sign in</a>
       </Button>
     </>
   );
 };



/*
export default function Login() {
  return <a href="/api/auth/login">Login</a>;
};*/