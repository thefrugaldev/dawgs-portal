import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

export interface SearchResult {
  name: string;
  address: string;
}

interface SearchInputProps {
  // eslint-disable-next-line no-unused-vars
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <Input
          onChange={handleInputChange}
          type="text"
          placeholder="Search Database by Station Name"
        />

        <Button onClick={() => onSearch(searchInput)}>
          <Search />
        </Button>
      </div>
    </>
  );
};

export default SearchInput;
