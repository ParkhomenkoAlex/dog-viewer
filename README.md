# Dog Viewer

> 🚀 **Extended development continues in Advanced Dog Viewer**
>
> This repository contains the original implementation created within the scope of the initial coding assignment and is intentionally kept as the baseline version.
>
> All further development — including new features, architectural improvements, UX enhancements, testing, and production-oriented improvements — is being implemented separately in **Advanced Dog Viewer**:
>
> - **Live Demo:** https://advanced-dog-viewer.vercel.app/
> - **GitHub Repository:** https://github.com/ParkhomenkoAlex/advanced-dog-viewer

Dog Viewer is a small React and TypeScript application that displays random dog images and their breeds from the Dog API. Users can browse dogs and add selected dogs to a favorites list.

## Live Demo

https://dog-viewer-kappa.vercel.app

## Features

- Random dog images from the Dog API
- Main dog image with breed name
- 10 dog thumbnails
- Main dog selection from thumbnails
- Smooth thumbnail hover effect
- Favorites list
- Dog selection from favorites
- Favorite removal
- Duplicate favorite prevention
- Loading and error handling
- Responsive layout

## Tech Stack

- React
- TypeScript
- Vite
- CSS Modules
- [Dog API](https://dog.ceo/dog-api/documentation)

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
git clone https://github.com/ParkhomenkoAlex/dog-viewer.git
cd dog-viewer
pnpm install
```

### Development

```bash
pnpm dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

- `pnpm dev` — starts the Vite development server.
- `pnpm build` — type-checks the project and creates a production build.
- `pnpm lint` — runs ESLint.
- `pnpm format` — formats files with Prettier.
- `pnpm format:check` — checks formatting with Prettier.
- `pnpm preview` — serves the production build locally.

## API

This application uses the [Dog API](https://dog.ceo/dog-api/documentation) for dog images and breed data.

## Notes

This project was built as a one-hour coding assignment. The structure is intentionally kept simple and easy to extend for follow-up interview tasks.
