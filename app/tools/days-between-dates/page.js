'use client';

import { useState } from 'react';

export default function DaysBetweenDates() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState(null);

  const calculateDays = () => {
    if (!startDate || !endDate) {
      setResult('Please select both dates.');
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start) || isNaN(end)) {
      setResult('Invalid date format. Please use YYYY-MM-DD.');
      return;
    }
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setResult(`${diffDays} day${diffDays !== 1 ? 's' : ''}`);
  };

  // Debugging to confirm component is loading
  console.log('DaysBetweenDates component loaded');

  return (
    <div className="container">
      <section className="hero">
        <h1>Days Between Dates</h1>
        <p>Calculate the number of days between two dates easily.</p>
      </section>
      <div className="calculator">
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button onClick={calculateDays} className="tool-link">
          Calculate Days
        </button>
        {result && (
          <div className="result-box">
            <h3>Result</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
      <section className="content-section">
        <h2>About Days Between Dates Calculation</h2>
        <p>
          The days between dates calculator is a useful tool that determines the exact number of days between two dates. Whether you're planning an event, tracking project timelines, or calculating time differences for travel, this tool provides accurate and instant results. Use it to measure durations with ease!
        </p>
        <h3>Why Use a Days Between Dates Calculator?</h3>
        <ul className="info-list">
          <li>Plan events like vacations or deadlines with precision.</li>
          <li>Track project milestones or workout challenges.</li>
          <li>Understand time gaps for historical or personal records.</li>
        </ul>
        <h3>Common Uses for Time Differences</h3>
        <p>
          Calculating days between dates is handy for various scenarios. For instance, businesses use it to manage contracts, while individuals might track anniversaries or fitness goals. Knowing the exact duration can help you stay organized and make informed decisions. Try it today!
        </p>
      </section>
    </div>
  );
}