# Next.js Demo Project

A modern Next.js application with TypeScript, Tailwind CSS, and robust development tooling.

## Prerequisites

- Node.js 20.x or later
- PNPM

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/oleksii-st/next-demo.git
cd next-demo
pnpm install
```

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks
- `pnpm lint:fix` - Run ESLint and fix auto-fixable issues

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 15
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/)
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **UI Components**:
  - [React](https://react.dev/) 19
  - [Geist](https://github.com/vercel/geist-font) font
  - [clsx](https://github.com/lukeed/clsx) for class name management

## Development Tools

- **Linting**: ESLint with multiple plugins:
  - eslint-plugin-import
  - eslint-plugin-react
  - typescript-eslint
  - eslint-config-next
- **Code Formatting**: Prettier
- **Staged Files Linting**: lint-staged

## Project Structure

```
next-demo/
├── public/          # Static files
├── src/
│   ├── app/        # Next.js App Router files
│   ├── components/ # React components
│   └── types/      # TypeScript type definitions
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Before Starting

Cope `.env.example` as `.env

## Code Quality

This project uses several tools to maintain code quality:

1. **TypeScript** for static type checking
2. **ESLint** for code linting with custom rules
3. **Prettier** for consistent code formatting
4. **lint-staged** for running checks on staged files

## Build and Deployment

To build the project for production:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```
