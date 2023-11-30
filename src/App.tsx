import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
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
        <h1>Bottom Section</h1>
      </div>
    </div>
  );
}

export default App;
