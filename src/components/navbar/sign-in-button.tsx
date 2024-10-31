'use client';

import * as React from "react"
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { CircleUserRound, LogOut, Sticker } from 'lucide-react';

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
/*
export const SignInButton = ({ onSignIn }: { onSignIn: () => void }) => {
  return (
     <>
       <Button className="bg-glory hover:bg-glory/90" onClick={() => onSignIn()}>
        <a href="/api/auth/login">Sign in</a>
        
       v

     </>
   );
 };
*/


/*
export default function Login() {
  return <a href="/api/auth/login">Login</a>;
};*/


// pages/index.js


/*
const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
            <h1>Welcome to the App</h1>
      {user ? (
        <div>
          <p>Hello, {user.name}!</p>
          <Link href="/api/auth/logout">Logout</Link>
          <Link href="/profile">Profile</Link>
        </div>
      ) : (
        <Link href="/api/auth/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
*/

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