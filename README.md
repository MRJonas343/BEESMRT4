# BEESMRT4 🐝

**An engaging English learning platform that makes language education fun through gamification**

BEESMRT4 is a modern web application designed to help users improve their English language skills through interactive games and competitive learning experiences. Built with a bee-themed interface, the platform combines education with entertainment to create an immersive learning environment.

## 🎯 About The Project

BEESMRT4 transforms traditional English learning into an exciting adventure where users can:
- **Play Interactive Games**: Master vocabulary, grammar, and sentence structure through engaging mini-games
- **Compete Globally**: Challenge friends and players worldwide in real-time 1v1 English battles
- **Track Progress**: Level up through structured learning paths with achievements and rewards
- **Learn at Your Pace**: Choose from different difficulty levels suitable for beginners to advanced learners

The platform features a comprehensive suite of educational games including Memory Match, Hangman, Drag & Drop vocabulary, and Sentence Scramble - all designed to reinforce English language concepts through active participation.

## 🎮 Learning Games & Features

### **Educational Games**
- **🧠 Memory Game**: Match English words with their definitions or images to strengthen vocabulary retention
- **🎪 Hangman**: Classic word-guessing game that helps with spelling and vocabulary recognition  
- **🔄 Drag & Drop**: Interactive vocabulary building by matching words to their corresponding images or meanings
- **🔤 Sentence Scramble**: Improve grammar and sentence structure by rearranging scrambled sentences

### **Competitive Features**
- **⚔️ 1v1 Battle Mode**: Real-time competitive matches against other learners worldwide
- **🏆 Global Leaderboards**: Track your progress and compete with learners from around the globe
- **🎯 Level Progression**: Structured learning paths from beginner to advanced levels
- **🏅 Achievement System**: Earn badges, points, and unlock special content as you progress

### **Personalization**
- **🎨 Profile Customization**: Personalize your avatar and showcase your achievements
- **📊 Progress Tracking**: Detailed analytics of your learning journey and skill development
- **🔒 Secure Authentication**: Safe and secure user account management

## 🚀 Technologies Used

### **Core Framework & Build Tools**
- **Vinxi** - Full-stack framework for React applications
- **TanStack React Start** - Modern React meta-framework
- **TypeScript** - Type-safe JavaScript superset
- **Vite** - Fast build tool and development server

### **Frontend Stack**
- **React 19** - Latest React with modern features
- **TanStack React Router** - Type-safe routing with devtools
- **TanStack React Query** - Data fetching and server state management
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### **UI & Styling**
- **Hero UI** - Modern React UI components library
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Icons** - Popular icon library
- **PostCSS** - CSS transformation tool

### **HTTP & Authentication**
- **Axios** - Promise-based HTTP client
- **Better Auth** - Modern authentication library

### **Development Tools**
- **Biome** - Fast formatter, linter, and bundler
- **Bun** - JavaScript runtime and package manager
- **TypeScript Path Mapping** - Clean import paths with `@/*` aliases

### **Custom Fonts**
- **Bebas Neue** - Custom font family
- **Oswald** - Custom font family

## 🏗️ Architecture Overview

BEESMRT4 follows a modern, scalable architecture designed for performance and maintainability:

### **Frontend Architecture**
- **Component-Based Design**: Modular React components organized by functionality (games, authentication, UI)
- **Route-Based Code Splitting**: Automatic code splitting using TanStack Router for optimal loading performance
- **State Management**: Centralized state management with TanStack Query for server state and local state handling
- **Type Safety**: Full TypeScript implementation ensuring code reliability and developer experience

### **Project Structure Pattern**
```
Feature-Based Organization:
├── components/
│   ├── games/           # Game-specific components
│   ├── stateless/       # Reusable UI components  
│   └── stateful/        # Interactive components
├── routes/              # Route definitions and page components
├── services/            # API integration and business logic
├── utils/               # Helper functions and utilities
└── assets/              # Static resources and images
```

### **Security & Authentication**
- **Better Auth Integration**: Secure authentication flow with session management
- **Route Protection**: Protected routes for authenticated game experiences
- **Secure API Communication**: Axios-based HTTP client with proper error handling

## 📦 Prerequisites

Before running BEESMRT4, make sure you have:
- **Bun** installed (recommended) or **Node.js** (v18 or higher)

- **Git** for version control

### Installing Bun (Recommended)

```bash
# Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MRJonas343/BEESMRT4.git
cd BEESMRT4
```

### 2. Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm/yarn
npm install
# yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Copy the example environment file (if available)
cp .env.example .env

# Or create a new .env file with required variables
```

Add the following environment variables to your `.env` file:

```env
VITE_BEESMRT_API=your_api_base_url_here
```

**Note:** Replace `your_api_base_url_here` with your actual API endpoint URL.

### 4. Development Server

Start the development server:

```bash
# Using Bun
bun run dev

# Or using npm/yarn
npm run dev
# yarn dev
```

The application will be available at: **http://localhost:4000**

### 5. Building for Production

To build the application for production:

```bash
# Using Bun
bun run build

# Or using npm/yarn
npm run build
# yarn build
```

### 6. Starting Production Server

To start the production server:

```bash
# Using Bun
bun run start

# Or using npm/yarn
npm run start
# yarn start
```

## 📁 Project Structure

```
BEESMRT4/
├── src/
│   ├── assets/          # Game images and static resources
│   ├── components/      # React components
│   │   ├── games/       # Game-specific components (Memory, Hangman, etc.)
│   │   ├── stateless/   # Reusable UI components
│   │   └── stateful/    # Interactive components with state
│   ├── constants/       # Game configurations and feature definitions
│   ├── hooks/           # Custom React hooks for game logic
│   ├── routes/          # Application routing and page components
│   │   ├── _private/    # Protected routes (authenticated games)
│   │   └── _public/     # Public routes (landing, auth)
│   ├── schemas/         # Zod validation schemas for forms
│   ├── services/        # API communication and game services
│   ├── styles/          # Global CSS and Tailwind configuration
│   └── utils/           # Helper functions and utilities
├── public/
│   └── fonts/           # Custom font files (Bebas Neue, Oswald)
├── app.config.ts        # TanStack Start configuration
├── biome.json          # Code formatting and linting rules
├── hero.ts             # Hero UI component library configuration
├── postcss.config.ts   # PostCSS and Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Educational Approach

BEESMRT4 employs proven pedagogical methods to enhance English language learning:

### **Gamification Theory**
- **Immediate Feedback**: Instant responses to player actions reinforce correct learning patterns
- **Progressive Difficulty**: Adaptive challenge levels maintain optimal learning zones
- **Achievement Systems**: Badges and rewards provide motivation and track progress milestones

### **Cognitive Learning Strategies**
- **Spaced Repetition**: Games revisit vocabulary and concepts at optimal intervals
- **Active Recall**: Players actively retrieve information rather than passive recognition
- **Contextual Learning**: Words and grammar are presented within meaningful contexts

### **Social Learning**
- **Peer Competition**: 1v1 battles encourage healthy competition and skill development
- **Global Community**: Leaderboards create a sense of community among learners worldwide
- **Collaborative Progress**: Shared achievements and social features enhance motivation

## 🎯 Target Audience

- **English Language Learners**: Students of all levels seeking interactive learning experiences
- **ESL Students**: Non-native speakers looking to improve vocabulary and grammar
- **Educators**: Teachers seeking engaging supplementary materials for their curriculum
- **Casual Learners**: Anyone interested in improving English skills through fun, game-based learning

## 🔧 Development Commands

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Format code with Biome
bunx biome format --write .

# Lint code with Biome
bunx biome lint .

# Check and fix code issues
bunx biome check --write .
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

---

**Built with ❤️ for English language learners worldwide using modern React ecosystem tools.**
