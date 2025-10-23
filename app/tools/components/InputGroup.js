import React from 'react';

export default function InputGroup({ label, type, value, onChange, required = false }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required={required} />
    </div>
  );
}