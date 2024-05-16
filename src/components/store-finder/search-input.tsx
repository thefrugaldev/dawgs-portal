import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Find Gas Station" />

        <Button type="submit">
          <Search />
        </Button>
      </div>
    </>
  );
};

export default SearchInput;
