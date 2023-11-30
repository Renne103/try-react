import React, { useState, useEffect } from 'react';
import './App.css';

interface SearchResult {
  name: string;
  description: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  useEffect(() => {
    // Проверка наличия ранее сохраненного поискового запроса в локальном хранилище
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  const handleSearch = () => {
    localStorage.setItem('searchTerm', searchTerm); // Сохранение поискового запроса в локальном хранилище
    console.log(`Searching for: ${searchTerm}`);


    const dummyResults: SearchResult[] = [
      { name: 'Result', description: `${searchTerm}` },
    ];

    setSearchResults(dummyResults);
  };

  return (
    <div className="app">
      {/* Top Section */}
      <div className="top-section">
        <h1>Top Section</h1>
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} type="button">
          Search
        </button>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <h1>Search Results</h1>
        {searchResults.map((result, index) => (
          <div key={index}>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
