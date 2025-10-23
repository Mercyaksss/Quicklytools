'use client';
import { useState } from 'react';
// import InputGroup from '../../components/InputGroup';
import ResultBox from '../components/ResultBox';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('meters');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [result, setResult] = useState(null);

  const convertHeight = (value, unit) => {
    const numValue = parseFloat(value);
    if (numValue <= 0) return 0;
    switch (unit) {
      case 'inches':
        return numValue / 39.3701; // Convert inches to meters
      case 'centimeters':
        return numValue / 100; // Convert centimeters to meters
      case 'meters':
      default:
        return numValue;
    }
  };

  const convertWeight = (value, unit) => {
    const numValue = parseFloat(value);
    if (numValue <= 0) return 0;
    switch (unit) {
      case 'lbs':
        return numValue / 2.20462; // Convert pounds to kilograms
      case 'kg':
      default:
        return numValue;
    }
  };

  const calculateBMI = (height, weight, heightUnit, weightUnit) => {
    const heightInMeters = convertHeight(height, heightUnit);
    const weightInKg = convertWeight(weight, weightUnit);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      let category = '';
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';
      return { BMI: bmi.toFixed(1), Category: category };
    }
    return null;
  };

  const handleCalculate = () => {
    if (height && weight) {
      const bmiResult = calculateBMI(height, weight, heightUnit, weightUnit);
      if (bmiResult) {
        setResult(bmiResult);
      }
    }
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>BMI Calculator</h1>
        <p>Check your Body Mass Index with customizable units for better health insights.</p>
      </section>
      <div className="calculator">
        <div className="input-group">
          <label>Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step="0.01"
            min="0.1"
            required
            placeholder={heightUnit === 'meters' ? 'e.g., 1.75' : heightUnit === 'centimeters' ? 'e.g., 175' : 'e.g., 69'}
          />
          <div className="unit-toggle">
            <label>
              <input
                type="radio"
                name="heightUnit"
                value="meters"
                checked={heightUnit === 'meters'}
                onChange={(e) => setHeightUnit(e.target.value)}
              /> Meters
            </label>
            <label>
              <input
                type="radio"
                name="heightUnit"
                value="centimeters"
                checked={heightUnit === 'centimeters'}
                onChange={(e) => setHeightUnit(e.target.value)}
              /> Centimeters
            </label>
            <label>
              <input
                type="radio"
                name="heightUnit"
                value="inches"
                checked={heightUnit === 'inches'}
                onChange={(e) => setHeightUnit(e.target.value)}
              /> Inches
            </label>
          </div>
        </div>
        <div className="input-group">
          <label>Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="0.1"
            min="1"
            required
            placeholder={weightUnit === 'kg' ? 'e.g., 70' : 'e.g., 154'}
          />
          <div className="unit-toggle">
            <label>
              <input
                type="radio"
                name="weightUnit"
                value="kg"
                checked={weightUnit === 'kg'}
                onChange={(e) => setWeightUnit(e.target.value)}
              /> kg
            </label>
            <label>
              <input
                type="radio"
                name="weightUnit"
                value="lbs"
                checked={weightUnit === 'lbs'}
                onChange={(e) => setWeightUnit(e.target.value)}
              /> lbs
            </label>
          </div>
        </div>
        <button onClick={handleCalculate} className="tool-link">
          Calculate BMI
        </button>
        {result && <ResultBox title="Result" data={result} />}
      </div>
      <section className="content-section">
        <h2>Understanding BMI</h2>
        <p>
          Body Mass Index (BMI) is a widely used metric to assess whether your weight is healthy based on your height. It’s calculated by dividing your weight in kilograms by the square of your height in meters. This tool lets you input measurements in meters, centimeters, inches, kilograms, or pounds for convenience, offering insights into your health status.
        </p>
        <h3>Benefits of Monitoring BMI</h3>
        <ul className="info-list">
          <li>Identify potential health risks like obesity or underweight conditions.</li>
          <li>Track weight changes over time for fitness goals.</li>
          <li>Support conversations with healthcare providers about wellness.</li>
        </ul>
        <h3>BMI Categories and Health Tips</h3>
        <p>
          BMI is classified into categories: Underweight (below 18.5), Normal (between 18.5 and 24.9), Overweight (between 25 and 29.9), and Obese (30 or higher). A Normal classification suggests a balanced weight, but factors like muscle mass or age may influence accuracy. For a healthy lifestyle, pair BMI checks with regular exercise and a balanced diet—consult a professional for personalized guidance!
        </p>
      </section>
    </div>
  );
}