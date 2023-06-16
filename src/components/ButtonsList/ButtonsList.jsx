import Button from 'components/Button/Button';
import React from 'react';

export default function ButtonsList({ options, onButtonClick }) {
  return (
    <div>
      <ul>
        {options.map(el => (
          <Button key={el} title={el} onButtonClick={onButtonClick} />
        ))}
      </ul>
    </div>
  );
}
