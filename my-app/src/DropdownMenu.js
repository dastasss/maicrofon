import React from 'react';

const DropdownMenu = ({ items, onSelect }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <select onChange={e => onSelect(e.target.value)} style={{ padding: '10px', fontSize: '16px' }} defaultValue="">
        <option value="" disabled hidden>Elige tu marca de micrófono</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
