// TODO: Remove when deprecating useState
'use client';
import Link from 'next/link';
import DawgsLogo from '@/components/icons/dawgs-logo';
//import { getServerSession } from 'next-auth';

//import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import  AuthCheck  from '@/components/authCheck';



export const Navbar = () => {
  // TODO: implement auth
   //const session = getSession();
  //const [loggedIn, setLoggedIn] = useState<boolean>(false);

 const [loggedIn, setLoggedIn] = useState<boolean>(false);
 //const { user, error, isLoading } = useUser();
 const authCheck = AuthCheck();

  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between bg-black pr-8">
        <Link href="/" className="font-mono text-lg font-bold">
          <DawgsLogo />
        </Link>

        <div className="flex items-center gap-10">
          <Link href="/" className="text-white font-mono text-lg font-bold">
            Map
          </Link>

          <Link href="/database" className="text-white font-mono text-lg font-bold">
            Database
          </Link>
          {authCheck ? (
            <UserDropdown onSignOut={() => setLoggedIn(false)} />
          ) : (
            <SignInButton onSignIn={() => setLoggedIn(true)} />
          )}


        </div>
      </div>
    </header>
  );
};
