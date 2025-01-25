# Next.js Demo Project

A modern Next.js application with TypeScript, Tailwind CSS, and robust development tooling.

## Prerequisites

- Node.js 20.x or later
- Yarn 4.5.1 (specified as package manager)

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/oleksii-st/next-demo.git
cd next-demo
yarn install
```

## Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Create production build
- `yarn start` - Start production server
- `yarn lint` - Run ESLint checks
- `yarn lint:fix` - Run ESLint and fix auto-fixable issues

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
- **Git Hooks**: Husky
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
4. **Husky** for git hooks
5. **lint-staged** for running checks on staged files

Pre-commit hooks are configured to automatically format code using Prettier.

## Build and Deployment

To build the project for production:

```bash
yarn build
```

To start the production server:

```bash
yarn start
```
