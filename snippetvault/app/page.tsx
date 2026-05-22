import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>SnippetVault</h1>
      <p>A code snippet manager with syntax highlighting and tagging.</p>
      <h2>Features</h2>
      <ul>
        <li>Create, organize, and search code snippets</li>
        <li>Syntax highlighting for 50+ languages</li>
        <li>Tagging system</li>
        <li>Favorite snippets</li>
        <li>Copy to clipboard with one click</li>
        <li>Dark/Light mode</li>
        <li>Responsive design</li>
      </ul>
      <p>
        <em>Note: This is a placeholder landing page. Full functionality can be added with a backend (PostgreSQL, Prisma, NextAuth).</em>
      </p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
