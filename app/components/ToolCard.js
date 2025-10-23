import Link from 'next/link';

export default function ToolCard({ name, path, description }) {
  return (
    <div className="tool-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <Link href={path} className="tool-link">
        Use Tool
      </Link>
    </div>
  );
}