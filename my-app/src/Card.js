import React from 'react';

const Card = ({ item }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: '200px',
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    }}>
      <p style={{ fontSize: '14px' }}>MODEL:<strong>{item.Title}</strong></p>
      <p style={{ fontSize: '14px' }}>
        <strong>URL:</strong> <a href={item.Title_URL} target="_blank" rel="noopener noreferrer">{item.Title_URL}</a>
      </p>
      {item.Image && <img src={item.Image} alt="Microphone" style={{ width: '50%', height: 'auto', borderRadius: '5px' }} />}
    </div>
  );
};

export default Card;
