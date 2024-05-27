// import { Session } from 'next-auth';
// import { signOut } from 'next-auth/react';

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound className="h-8 w-8 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col items-center justify-center p-2">
          <Sticker className="h-[100px] w-[100px] overflow-hidden rounded-full" />
          <h2 className="py-2 text-lg font-bold">Clayton</h2>
          <Button
            // onClick={handleCreateCheckoutSession}
            // disabled={user?.isActive || isPending}
            className="w-64"
          >
            Profile
          </Button>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onSignOut()}>
          <LogOut className="mr-2 size-4" /> <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
