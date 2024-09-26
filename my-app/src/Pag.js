import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const PaginationExample = () => {
  const [micList, setMicList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMicrophones();
  }, [currentPage]);

  const fetchMicrophones = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/?page=${currentPage}`);
      setMicList(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Microphones</h1>
      <div className="mic-list">
        {micList.map(mic => (
          <Card key={mic.id} mic={mic} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PaginationExample;
