import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>ReviewHub</h1>
      <p>A professional platform for product reviews with voting, categories, and analytics.</p>
      <h2>Features</h2>
      <ul>
        <li>User authentication and profiles</li>
        <li>Product categorization</li>
        <li>Voting system (upvote/downvote)</li>
        <li>Review moderation</li>
        <li>Analytics dashboard</li>
        <li>Responsive design</li>
      </ul>
      <p>
        <em>Note: This is a placeholder landing page. Full functionality can be added with a backend (PostgreSQL, Prisma, NextAuth).</em>
      </p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
