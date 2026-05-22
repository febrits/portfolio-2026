import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>PollForge</h1>
      <p>Real-time polling and survey platform with live results.</p>
      <h2>Features</h2>
      <ul>
        <li>Create polls and surveys</li>
        <li>Multiple choice, single choice, and open-ended questions</li>
        <li>Real-time results visualization</li>
        <li>Poll expiration and scheduling</li>
        <li>Anonymous voting</li>
        <li>Share via link or embed</li>
        <li>Analytics and insights</li>
      </ul>
      <p>
        <em>Note: This is a placeholder landing page. Full functionality can be added with a backend (PostgreSQL, Prisma, NextAuth, WebSockets).</em>
      </p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
