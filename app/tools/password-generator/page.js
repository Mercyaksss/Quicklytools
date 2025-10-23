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
  };

  const handleGenerate = () => {
    generatePassword();
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
          required
        />
        <div className="input-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            /> Include Uppercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            /> Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={(e) => setIncludeSpecial(e.target.checked)}
            /> Include Special Characters
          </label>
        </div>
        <button onClick={handleGenerate} className="tool-link">
          Generate Password
        </button>
        {password && <ResultBox title="Generated Password" data={{ Password: password }} />}
      </div>
      <section className="content-section">
        <h2>About Password Generation</h2>
        <p>
          A password generator creates strong, unique passwords to protect your online accounts. With options to include uppercase letters, numbers, and special characters, this tool helps you meet security standards and reduce the risk of breaches. Use it to enhance your digital safety today!
        </p>
        <h3>Benefits of a Strong Password</h3>
        <ul className="info-list">
          <li>Protect against hacking and unauthorized access.</li>
          <li>Meet complex password requirements for websites.</li>
          <li>Simplify security management with unique passwords per account.</li>
        </ul>
        <h3>Password Security Tips</h3>
        <p>
          For optimal security, use passwords at least 12-16 characters long, combining multiple character types. Avoid reusing passwords across sites and consider a password manager to store them safely. Regularly update passwords, especially for sensitive accounts, to maintain protection!
        </p>
      </section>
    </div>
  );
}