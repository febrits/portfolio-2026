"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState<Array<{id: number; type: 'income' | 'expense'; amount: number; description: string}>>([]);

  const handleAddTransaction = (type: 'income' | 'expense') => {
    const amount = parseFloat(type === 'income' ? income : expense);
    if (isNaN(amount) || amount <= 0 || !description.trim()) return;

    setTransactions([
      ...transactions,
      { id: Date.now(), type, amount, description: description.trim() },
    ]);
    if (type === 'income') setIncome('');
    else setExpense('');
    setDescription('');
  };

  const totalIncome = transactions.reduce((sum, t) => t.type === 'income' ? sum + t.amount : sum, 0);
  const totalExpense = transactions.reduce((sum, t) => t.type === 'expense' ? sum + t.amount : sum, 0);
  const balance = totalIncome - totalExpense;

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>BudgetBuddy</h1>
      <p>Personal finance tracker with budgeting and expense analytics.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <h2>Add Transaction (frontend demo)</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'end' }}>
          <input
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Income amount"
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', width: '100px' }}
          />
          <input
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Expense amount"
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', width: '100px' }}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', flex: '1', minWidth: '150px' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => handleAddTransaction('income')}
              style={{ padding: '0.5rem 1rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add Income
            </button>
            <button
              onClick={() => handleAddTransaction('expense')}
              style={{ padding: '0.5rem 1rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add Expense
            </button>
          </div>
        </div>
        {transactions.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h3>Recent Transactions:</h3>
            <ul style={{ listStyle: 'none', padding: 0, maxHeight: '200px', overflowY: 'auto' }}>
              {transactions.slice(-10).reverse().map((t) => (
                <li key={t.id} style={{ padding: '0.5rem', marginBottom: '0.25rem', borderBottom: '1px solid #eee' }}>
                  <span style={{ fontWeight: 'bold' }}>{t.description}</span>
                  <span style={{ float: 'right', color: t.type === 'income' ? '#10b981' : '#ef4444' }}>
                    {t.type === 'income' ? `+${t.amount}` : `-${t.amount}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          Note: This is a frontend-only demo. In a full implementation, transactions would be stored in a database with user accounts.
        </p>
      </div>

      <div style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: '#f9f9f3', borderRadius: '8px', textAlign: 'center' }}>
        <h2>Summary</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
          <div>
            <h3>Total Income</h3>
            <p style={{ fontSize: '1.5rem', color: '#10b981' }}>{totalIncome}</p>
          </div>
          <div>
            <h3>Total Expense</h3>
            <p style={{ fontSize: '1.5rem', color: '#ef4444' }}>{totalExpense}</p>
          </div>
          <div>
            <h3>Balance</h3>
            <p style={{ fontSize: '1.5rem', color: balance >= 0 ? '#10b981' : '#ef4444' }}>{balance}</p>
          </div>
        </div>
      </div>

      <h2>Features</h2>
      <ul>
        <li>Track income and expenses</li>
        <li>Budget planning and monitoring</li>
        <li>Expense categorization</li>
        <li>Financial reports and charts</li>
        <li>Recurring transactions</li>
        <li>Data export (CSV, PDF)</li>
        <li>Secure and private</li>
      </ul>
      <p>
        <em>Note: This is a placeholder landing page. Full functionality can be added with a backend (PostgreSQL, Prisma, NextAuth).</em>
      </p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
