"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [rsvp, setRsvp] = useState(false);
  const [rsvpCount, setRsvpCount] = useState(0);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>EventSync</h1>
      <p>Professional event management platform with RSVP and calendar integration.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <h2>Try the RSVP feature (frontend demo)</h2>
        <p>This is a simple frontend-only demo of how RSVP could work.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              setRsvp(!rsvp);
              setRsvpCount(rsvp ? rsvpCount - 1 : rsvpCount + 1);
            }}
            style={{ 
              padding: '0.5rem 1rem', 
              backgroundColor: rsvp ? '#0070f3' : '#f3f3f3', 
              color: rsvp ? 'white' : '#333', 
              border: rsvp ? 'none' : '1px solid #ccc', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            {rsvp ? 'You are attending' : 'RSVP'} ({rsvpCount})
          </button>
        </div>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          Note: This is a frontend-only demo. In a full implementation, RSVP data would be stored in a database.
        </p>
      </div>

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
