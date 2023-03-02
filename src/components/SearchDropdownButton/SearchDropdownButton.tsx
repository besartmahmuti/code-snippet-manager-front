import React, { FC, useState } from 'react';
import { Button, Dropdown, FormControl } from 'react-bootstrap';

interface Props {
  options: string[];
  onSelect: (option: string) => void;
}

const SearchDropdownButton: FC<Props> = ( { options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((index) =>
        index === filteredOptions.length - 1 ? 0 : index + 1
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((index) =>
        index <= 0 ? filteredOptions.length - 1 : index - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex !== -1) {
        handleSelectOption(filteredOptions[selectedIndex]);
        
        setSelectedIndex(-1);
      }
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dropdown onKeyDown={handleKeyDown}>
      <Dropdown.Toggle as={Button} variant="primary">
        {selectedOption || 'Select Language'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <FormControl
          type="text"
          placeholder="Search"
          className="mx-3 my-2 w-auto"
          onChange={handleSearch}
          value={searchTerm}
        />
        <Dropdown.Divider />
        {filteredOptions.map((option, index) => (
          <Dropdown.Item
            key={option}
            active={index === selectedIndex}
            onSelect={() => handleSelectOption(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default SearchDropdownButton