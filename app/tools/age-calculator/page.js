'use client';
import { useState } from 'react';
import InputGroup from '../components/InputGroup';
import ResultBox from '../components/ResultBox';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateAge = (birthDateStr) => {
    const birth = new Date(birthDateStr);
    const today = new Date();
    let ageYears = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      ageYears--;
    }
    const months = (today.getMonth() - birth.getMonth() + 12) % 12;
    const days = Math.floor((today - birth) / (1000 * 60 * 60 * 24)) % 30;
    return { Years: ageYears, Months: months, Days: days };
  };

  const handleCalculate = () => {
    if (birthDate) {
      const age = calculateAge(birthDate);
      setResult(age);
    }
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>Age Calculator</h1>
        <p>Discover your exact age in years, months, and days with precision.</p>
      </section>
      <div className="calculator">
        <InputGroup
          label="Birth Date"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <button onClick={handleCalculate} className="tool-link">
          Calculate Age
        </button>
        {result && <ResultBox title="Your Age" data={result} />}
      </div>
      <section className="content-section">
        <h2>About Age Calculation</h2>
        <p>
          An age calculator is a handy tool that determines your age based on your birth date. Whether you're tracking personal milestones, planning events, or curious about your age in different units, this calculator provides accurate results. Use it to find out how old you are today or calculate the age difference between two dates!
        </p>
        <h3>Why Use an Age Calculator?</h3>
        <ul className="info-list">
          <li>Track life milestones like birthdays or anniversaries.</li>
          <li>Understand age-related health or legal considerations.</li>
          <li>Plan for future events with precise age data.</li>
        </ul>
        <h3>Age Milestones to Watch</h3>
        <p>
          Certain ages mark important life stages. For example, turning 18 is a legal adulthood milestone in many countries, while 65 is often associated with retirement. Knowing your exact age can help you prepare for these transitions. Stay informed with our tool!
        </p>
      </section>
    </div>
  );
}