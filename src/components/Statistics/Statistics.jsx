import React from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  countPositive,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPositive}%</p>
    </div>
  );
}
