import React from 'react';

export default function Button({ title, onButtonClick }) {
  return (
    <button onClick={onButtonClick} name={title}>
      {title}
    </button>
  );
}
