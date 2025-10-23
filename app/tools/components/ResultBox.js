import React from 'react';

export default function ResultBox({ title, data }) {
  return (
    <div className="result-box">
      <h3>{title}</h3>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}