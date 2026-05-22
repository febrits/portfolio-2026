import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [voteCount, setVoteCount] = useState(0);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>ReviewHub</h1>
      <p>A professional platform for product reviews with voting, categories, and analytics.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <h2>Try the voting feature (frontend demo)</h2>
        <p>This is a simple frontend-only demo of how voting could work.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setVoteCount(voteCount + 1)}
            style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Upvote ({voteCount})
          </button>
          <button 
            onClick={() => setVoteCount(voteCount - 1)}
            style={{ padding: '0.5rem 1rem', backgroundColor: '#f3f3f3', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
          >
            Downvote
          </button>
        </div>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          Note: This is a frontend-only demo. In a full implementation, votes would be stored in a database.
        </p>
      </div>

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
