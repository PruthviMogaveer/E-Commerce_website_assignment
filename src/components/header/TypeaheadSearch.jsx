import React, { useState } from 'react';

const TypeaheadSearch = ({ items }) => {
  const [query, setQuery] = useState(''); //Input field value
  const [suggestions, setSuggestions] = useState([]); //All the categories which matches with the searched input are stored
  const [isFocused, setIsFocused] = useState(false); //Stores that the input is focused or not

  //Function is used to take the input field value and search the similar categories which matches and store it into the "Suggestion"
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Input field */}
      <input
        type="text"
        value={query}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleInputChange}
        placeholder="Search for products, brands and more"
        className="w-full max-sm:w-full p-2 border border-gray-300 rounded text-black"
      />
      {/* Suggestions */}
      {suggestions.length > 0 && isFocused && (
        <div className={` absolute bg-white border border-gray-300 w-full max-h-40 overflow-y-auto mt-1 rounded z-20`}>
          {suggestions.map((item, index) => (
            <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer text-black">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeaheadSearch;
