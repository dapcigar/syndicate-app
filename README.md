# Syndicate App

A modern web application for managing rotating savings groups and credit associations.

## Features

- Create and manage savings groups
- Track contributions and payouts
- Invite members securely
- Real-time payment tracking
- Automated payout schedules

## Tech Stack

- Next.js 14
- TypeScript
- Prisma
- NextAuth.js
- Tailwind CSS
- PostgreSQL

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Environment Setup

Create a `.env` file with:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/syndicate_db"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Database Setup

```bash
npx prisma generate
npx prisma db push
```
