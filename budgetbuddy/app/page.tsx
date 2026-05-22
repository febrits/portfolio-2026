import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <h1>BudgetBuddy</h1>
      <p>Personal finance tracker with budgeting and expense analytics.</p>
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
