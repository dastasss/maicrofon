import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropdownMenu from './DropdownMenu';
import CardGrid from './CardGrid';

const App = () => {
  const [selectedTable, setSelectedTable] = useState('');
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTableSelect = (table) => {
    setSelectedTable(table);
    setCurrentPage(1); 
  };

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${selectedTable}/?page=${currentPage}`);
        console.log('API Response:', response.data); 
        setRecords(response.data.results); // Usa `results` del objeto de respuesta
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    if (selectedTable) {
      fetchRecords();
    }
  }, [currentPage, selectedTable]); // Agrega currentPage y selectedTable como dependencias

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DropdownMenu items={['neumann', 'sennheiser']} onSelect={handleTableSelect} />
      {selectedTable && <CardGrid records={records} />}
      <div className="pagination" style={{ marginTop: 'auto' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default App;
