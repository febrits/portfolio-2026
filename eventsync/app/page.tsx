import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>EventSync</h1>
      <p>Professional event management platform with RSVP and calendar integration.</p>
      <h2>Features</h2>
      <ul>
        <li>Create and manage events</li>
        <li>RSVP system</li>
        <li>Calendar sync (Google, iCal)</li>
        <li>Event discovery and search</li>
        <li>Ticketing (future)</li>
        <li>Attendee management</li>
        <li>Reminders and notifications</li>
      </ul>
      <p>
        <em>Note: This is a placeholder landing page. Full functionality can be added with a backend (PostgreSQL, Prisma, NextAuth).</em>
      </p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
