'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUserRound, LogOut, Sticker } from 'lucide-react';

export const UserDropdown = ({ onSignOut }: { onSignOut: () => void }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound className="h-8 w-8 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>{' '}
        <div className="flex flex-col items-center justify-center p-2">
          <Sticker className="h-[100px] w-[100px] overflow-hidden rounded-full" />
          <h2 className="py-2 text-lg font-bold">{user?.name}</h2>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSubmit={() => onSignOut()}>
          <LogOut className="mr-2 size-4" />
          <Link href="/api/auth/logout">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
