'use client';

import { useState } from 'react';
import InputGroup from '../components/InputGroup';
import ResultBox from '../components/ResultBox';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let charPool = lowercase;
    if (includeUppercase) charPool += uppercase;
    if (includeNumbers) charPool += numbers;
    if (includeSpecial) charPool += special;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Copy failed. Please select and copy manually.');
    }
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>Password Generator</h1>
        <p>Create strong, secure passwords instantly with customizable options.</p>
      </section>

      <div className="calculator">
        <InputGroup
          label="Password Length"
          type="number"
          value={length}
          onChange={(e) => setLength(Math.max(4, Math.min(32, parseInt(e.target.value) || 12)))}
          min="4"
          max="32"
        />

        {/* CLEAN, NO-INHERITANCE CHECKBOXES */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          margin: '24px 0',
          padding: '0 4px'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: '#007bff', cursor: 'pointer' }}
            />
            <span>Include Uppercase Letters</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: '#007bff', cursor: 'pointer' }}
            />
            <span>Include Numbers</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={(e) => setIncludeSpecial(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: '#007bff', cursor: 'pointer' }}
            />
            <span>Include Special Characters</span>
          </label>
        </div>

        <button onClick={generatePassword} className="tool-link" style={{ width: '100%', padding: '14px', marginTop: '10px' }}>
          Generate Password
        </button>

        {password && (
          <div style={{ marginTop: '20px' }}>
            <ResultBox title="Generated Password" data={{ Password: password }} />
            <button
              onClick={copyToClipboard}
              style={{
                marginTop: '12px',
                padding: '10px 16px',
                backgroundColor: copied ? '#28a745' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}