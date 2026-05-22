# Portfolio 2026

A collection of 5 professional full-stack projects built with Next.js, TypeScript, and Tailwind CSS.

## Projects

1. [ReviewHub](./reviewhub) - Product review platform
2. [EventSync](./eventssync) - Event management with RSVP
3. [SnippetVault](./snippetvault) - Code snippet manager
4. [PollForge](./pollforge) - Real-time polling platform
5. [BudgetBuddy](./budgetbuddy) - Personal finance tracker

Each project is a standalone Next.js 13+ app with the following tech stack:

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Future Backend**: PostgreSQL, Prisma, NextAuth (to be added)

## Live Demos

All projects are deployed to Vercel with interactive frontend-only demos:

| Project | Live Demo | Alias |
|---------|-----------|-------|
| ReviewHub | [https://reviewhub-3mkw1nj8t-bangpeb.vercel.app](https://reviewhub-3mkw1nj8t-bangpeb.vercel.app) | [https://reviewhub-smoky.vercel.app](https://reviewhub-smoky.vercel.app) |
| EventSync | [https://eventsync-5z4ovhkj7-bangpeb.vercel.app](https://eventsync-5z4ovhkj7-bangpeb.vercel.app) | [https://eventsync-chi.vercel.app](https://eventsync-chi.vercel.app) |
| SnippetVault | [https://snippetvault-88owqtlue-bangpeb.vercel.app](https://snippetvault-88owqtlue-bangpeb.vercel.app) | [https://snippetvault-tawny.vercel.app](https://snippetvault-tawny.vercel.app) |
| PollForge | [https://pollforge-n9vfdaij4-bangpeb.vercel.app](https://pollforge-n9vfdaij4-bangpeb.vercel.app) | [https://pollforge-sigma.vercel.app](https://pollforge-sigma.vercel.app) |
| BudgetBuddy | [https://budgetbuddy-4y81g6lxi-bangpeb.vercel.app](https://budgetbuddy-4y81g6lxi-bangpeb.vercel.app) | [https://budgetbuddy-bangpeb.vercel.app](https://budgetbuddy-bangpeb.vercel.app) |

**Note**: These demos are frontend-only (no backend/database). For full functionality, a backend would need to be added.

## Getting Started for Any Project

```bash
# Navigate to the project directory
cd <project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

## Installation Scripts

We provide installer scripts to get you started quickly:

### One-Shot Installer
```bash
bash <(curl -s https://raw.githubusercontent.com/febrits/portfolio-2026/main/installer/one-shot-installer.sh)
```

### Full Installer (in br10n-installer repo)
See [br10n-installer](https://github.com/br10n-installer) for a more comprehensive setup script.

## Deployment

Each project can be deployed independently to Vercel by connecting the respective subdirectory as a project root.

Alternatively, you can deploy the entire monorepo and configure Vercel to build each project separately.

## License

MIT