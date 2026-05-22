"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [snippet, setSnippet] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [snippets, setSnippets] = useState([
    { id: 1, language: 'javascript', code: 'console.log("Hello, world!");' },
    { id: 2, language: 'python', code: 'print("Hello, world!")' },
  ]);

  const handleAdd = () => {
    if (snippet.trim()) {
      setSnippets([
        ...snippets,
        { id: Date.now(), language, code: snippet },
      ]);
      setSnippet('');
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>SnippetVault</h1>
      <p>A code snippet manager with syntax highlighting and tagging.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <h2>Try adding a snippet (frontend demo)</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <textarea
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            placeholder="Enter your code snippet..."
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', flex: '1', minWidth: '200px' }}
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
          <button
            onClick={handleAdd}
            style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Add Snippet
          </button>
        </div>
        {snippets.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h3>Your Snippets:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {snippets.map((s) => (
                <li key={s.id} style={{ marginBottom: '0.5rem', padding: '0.5rem', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                  <strong>{s.language.toUpperCase()}:</strong> <pre style={{ margin: '0.5rem 0', display: 'inline-block' }}>{s.code}</pre>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          Note: This is a frontend-only demo. In a full implementation, snippets would be stored in a database with user accounts.
        </p>
      </div>

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
