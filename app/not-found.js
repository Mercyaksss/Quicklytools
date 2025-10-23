import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="tool-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}