// profile.js

import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/auth/me');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      {/* <pre>{JSON.sctringify(user, null, 2)}</pre> */}
    </div>
  );
};

export default withPageAuthRequired(Profile);
