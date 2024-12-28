import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    navigate("/search-result");
    setQuery("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center w-full max-w-md space-x-2">
        {/* Search input */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="w-full py-1 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs shadow-sm transition duration-300 ease-in-out"
        />
        {/* Search button */}
        <button
          onClick={handleSearch}
          className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md hover:scale-105 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform text-xs"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
