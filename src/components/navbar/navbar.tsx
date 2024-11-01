'use client';
import Link from 'next/link';
import DawgsLogo from '@/components/icons/dawgs-logo';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { UserDropdown } from '@/components/navbar/user-dropdown';


import  AuthCheck  from '@/components/authCheck';



export const Navbar = () => {
 

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
            <UserDropdown onSignOut={() => false} />
          ) : (
            <SignInButton onSignIn={() => true} />
          )}


        </div>
      </div>
    </header>
  );
};
