// components/AuthCheck.js

import { useUser } from '@auth0/nextjs-auth0/client';

const AuthCheck = () => {
  const { user} = useUser();
  if (user) {
    return (true);
  } else {
    return (false);
  }
};

export default AuthCheck;
