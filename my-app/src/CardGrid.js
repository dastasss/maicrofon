import React from 'react';
import Card from './Card';

const CardGrid = ({ records }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {records.map((record, index) => (
        <Card key={index} item={record} />
      ))}
    </div>
  );
};

export default CardGrid;
