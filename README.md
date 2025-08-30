# 🎮 Games Library
__________________________________________________________________________________________________________________________________________
<img width="1905" height="914" alt="Screenshot_2" src="https://github.com/user-attachments/assets/8c7a0462-acc4-4ca4-9ae4-1df7da2563ef"/>


# A modern Next.js application for managing a game library, built with development best practices and responsive design.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [API](#api)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)

## 🎯 Overview

This application allows you to manage a game library with the following features:
- Responsive grid listing of games
- Detailed view of each game
- Add new games
- Edit existing games
- Remove games
- Modern and responsive interface

## 🚀 Technologies

- **Next.js 14+** - React Framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Styling and design system
- **API RESTful** - Backend integration

## 📁 Project Structure

```plaintext
src/
├── components/           # Reusable components
│   ├── GameCard.tsx     # Individual game card
│   ├── Badge.tsx        # Genre and platform badges
│   ├── Rating.tsx       # Rating component
│   ├── PriceTag.tsx     # Price formatting
│   ├── Alert.tsx        # Error/success messages
│   └── Loading.tsx      # Loading state
├── app/                 # Application pages
│   ├── page.tsx         # Home page (list)
│   ├── games/new/       # Create new game
│   └── games/[id]/      # Game details/Edit
├── lib/                 # Utilities
│   ├── api.ts          # Backend integration
│   └── utils.ts        # Utility functions
└── types/              # Type definitions
    └── game.ts         # Game interfaces
```

## 🔌 API

### Endpoints

```typescript
GET    /games     # Lista todos os jogos
GET    /games/:id # Obtém detalhes de um jogo
POST   /games     # Cria um novo jogo
PATCH  /games/:id # Atualiza um jogo
DELETE /games/:id # Remove um jogo
```

### Formato dos Dados

```typescript
{
  id: number;          // Unique identifier
  title: string;       // Game title
  genre: string;       // Genre
  platform: string;    // Platform
  releaseDate: string; // Release date
  rating: number;      // Rating
  price: number;       // Price
}
```

## 🧩 Components

### GameCard
- Game information display
- Image with hover effect
- Genre and platform badges
- Visual rating
- Formatted price
- Action buttons

### Design System
- Reusable components
- Consistent design system
- Responsiveness
- Visual feedback
- Loading states
- Error handling

## 🛠 Installation

1. Clone the repository:
```bash
git clone [REPOSITORY_URL]
```

2. Install dependencies:
```bash
cd frontend-games
npm install
```

3. Set up the environment:
   - Make sure the API is running on http://localhost:3000
   - Verify that images are in the public/images/games folder

4. Start the development server:
```bash
npm run dev
```

## 💻 Usage

The application will be available at http://localhost:3001 and offers:

- **Home Page**: Grid of games with informative cards
- **Details**: Complete view of game information
- **Form**: Interface for creating and editing games
- **Actions**: Buttons to edit and remove games

## 🎨 Design System

- Consistent colors for visual feedback
- Hierarchical typography
- Reusable components
- Smooth animations and transitions
- Fully responsive layout

## ✨ Features

- [x] Responsive grid list of games
- [x] Cards with detailed information
- [x] Visual rating system
- [x] Date and price formatting
- [x] Category badges
- [x] Loading states
- [x] Error handling
- [x] Visual feedback for actions
- [x] Modern and responsive design

## 🔒 Security and Validation

- Form validation
- Confirmation for destructive actions
- API error handling
- Visual feedback for users

## 🤝 Contributing

Contributions are welcome! Please read the contribution guidelines before submitting pull requests.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for details.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
