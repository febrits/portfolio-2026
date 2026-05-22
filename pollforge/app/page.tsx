"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [pollActive, setPollActive] = useState(false);
  const [results, setResults] = useState<number[]>([0, 0]);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    if (newOptions.length < 2) setOptions(['', '']);
  };

  const handleStartPoll = () => {
    const validOptions = options.filter(opt => opt.trim() !== '');
    if (question.trim() && validOptions.length >= 2) {
      setPollActive(true);
      setResults(Array(validOptions.length).fill(0));
    }
  };

  const handleVote = (index: number) => {
    setResults(prev => {
      const newResults = [...prev];
      newResults[index] += 1;
      return newResults;
    });
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>PollForge</h1>
      <p>Real-time polling and survey platform with live results.</p>
      
      {!pollActive && (
        <div style={{ margin: '2rem 0' }}>
          <h2>Create a Poll (frontend demo)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter poll question"
              style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {options.map((opt, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    value={opt}
                    onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[index] = e.target.value;
                      setOptions(newOptions);
                    }}
                    placeholder={`Option ${index + 1}`}
                    style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', flex: '1' }}
                  />
                  {options.length > 2 && (
                    <button
                      onClick={() => handleRemoveOption(index)}
                      style={{ padding: '0.25rem 0.5rem', backgroundColor: '#f3f3f3', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={handleAddOption}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#f3f3f3', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
              >
                Add Option
              </button>
            </div>
            <button
              onClick={handleStartPoll}
              style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Start Poll
            </button>
          </div>
        </div>
      )}

      {pollActive && (
        <div style={{ margin: '2rem 0' }}>
          <h2>Live Poll Results</h2>
          <p><strong>{question}</strong></p>
          {options.map((opt, index) => (
            <div key={index} style={{ marginBottom: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '150px' }}>{opt || `Option ${index + 1}`}:</span>
              <div style={{ backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden', width: '200px' }}>
                <div 
                  style={{ 
                    backgroundColor: '#0070f3', 
                    color: 'white', 
                    textAlign: 'center', 
                    width: `${results[index] > 0 ? Math.min((results[index] / Math.max(...results) * 100, 100) : 0)}%`, 
                    height: '24px', 
                    lineHeight: '24px', 
                    fontSize: '0.875rem' 
                  }}
                >
                  {results[index]} votes
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            {options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleVote(index)}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Vote for {opt || `Option ${index + 1}`}
              </button>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Note: This is a frontend-only demo. In a full implementation, poll data would be stored in a database with real-time updates.
          </p>
        </div>
      )}

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
