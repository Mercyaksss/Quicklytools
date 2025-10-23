'use client';
import { useState } from 'react';
import InputGroup from '../components/InputGroup';
import ResultBox from '../components/ResultBox';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const calculateWordCount = (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charsWithSpaces = text.length;
    const charsWithoutSpaces = text.replace(/\s/g, '').length;
    return {
      Words: `${words} word${words !== 1 ? 's' : ''}`,
      'Characters (with spaces)': charsWithSpaces,
      'Characters (without spaces)': charsWithoutSpaces,
    };
  };

  const handleCalculate = () => {
    if (text) {
      const count = calculateWordCount(text);
      setResult(count);
    }
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>Word Counter</h1>
        <p>Effortlessly count words and characters in your text with accuracy.</p>
      </section>
      <div className="calculator">
        <InputGroup
          label="Enter Text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button onClick={handleCalculate} className="tool-link">
          Count
        </button>
        {result && <ResultBox title="Result" data={result} />}
      </div>
      <section className="content-section">
        <h2>About Word Counting</h2>
        <p>
          A word counter is an essential tool for writers, students, and professionals who need to monitor text length. Whether you're crafting an essay, blog post, or social media update, this tool helps you stay within word limits and optimize your content. Try it now to analyze your text efficiently!
        </p>
        <h3>Benefits of Using a Word Counter</h3>
        <ul className="info-list">
          <li>Meet writing assignment word count requirements.</li>
          <li>Optimize content for SEO with ideal word lengths.</li>
          <li>Improve readability by balancing word and character counts.</li>
        </ul>
        <h3>Word Count Guidelines</h3>
        <p>
          Different formats have recommended word counts. For example, a blog post typically ranges from 800-1500 words for optimal engagement, while a tweet is limited to 280 characters. Use our word counter to align your writing with these standards and enhance your audience reach!
        </p>
      </section>
    </div>
  );
}