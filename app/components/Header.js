'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <h2>QuicklyTools</h2>
        </Link>

        <nav className="nav">
          {/* Hamburger – only visible < 769px */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
          </button>

          {/* Links */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/tools/age-calculator" onClick={toggleMenu}>Age Calculator</Link></li>
            <li><Link href="/tools/days-between-dates" onClick={toggleMenu}>Days Between Dates</Link></li>
            <li><Link href="/tools/word-counter" onClick={toggleMenu}>Word Counter</Link></li>
            <li><Link href="/tools/password-generator" onClick={toggleMenu}>Password Generator</Link></li>
            <li><Link href="/tools/bmi-calculator" onClick={toggleMenu}>BMI Calculator</Link></li>
            <li><Link href="/tools/loan-calculator" onClick={toggleMenu}>Loan Calculator</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}