'use client';

import { useState } from 'react';
import InputGroup from '../components/InputGroup';
import ResultBox from '../components/ResultBox';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const months = parseFloat(loanTerm) * 12;

    if (principal && annualRate && months && principal > 0 && annualRate >= 0 && months > 0) {
      const monthlyRate = annualRate / 12;
      const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      return { 'Monthly Payment': `$${monthlyPayment.toFixed(2)}` };
    }
    return null;
  };

  const handleCalculate = () => {
    const loanResult = calculateLoan();
    setResult(loanResult);
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>Loan Calculator</h1>
        <p>Estimate your loan payments with ease using customizable terms.</p>
      </section>
      <div className="calculator">
        <InputGroup
          label="Loan Amount ($)"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          min="1"
          required
        />
        <InputGroup
          label="Annual Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          min="0"
          step="0.1"
          required
        />
        <InputGroup
          label="Loan Term (Years)"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          min="1"
          required
        />
        <button onClick={handleCalculate} className="tool-link">
          Calculate Payment
        </button>
        {result && <ResultBox title="Result" data={result} />}
      </div>
      <section className="content-section">
        <h2>About Loan Calculators</h2>
        <p>
          A loan calculator helps you determine monthly payments and total interest for loans like mortgages, car loans, or personal loans. By inputting the loan amount, interest rate, and term, you can plan your finances effectively. Use this tool to make informed borrowing decisions!
        </p>
        <h3>Benefits of Using a Loan Calculator</h3>
        <ul className="info-list">
          <li>Plan budgets with accurate monthly payment estimates.</li>
          <li>Compare loan options to find the best terms.</li>
          <li>Avoid surprises with a clear view of total costs.</li>
        </ul>
        <h3>Loan Planning Tips</h3>
        <p>
          Choose a loan term that balances monthly payments with total interest—shorter terms mean higher payments but less interest over time. Aim for an interest rate below the market average, and consider extra payments to reduce debt faster. Consult a financial advisor for tailored advice!
        </p>
      </section>
    </div>
  );
}