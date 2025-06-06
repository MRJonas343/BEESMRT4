# TanStackBee

A modern React application built with TanStack Router, TanStack Query, and Hero UI, featuring authentication, form handling, and a beautiful UI.

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

## 📦 Prerequisites

Before running this project, make sure you have:

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
git clone <repository-url>
cd TanStackBee
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
TanStackBee/
├── src/
│   ├── assets/          # Static assets
│   ├── axios/           # HTTP client configuration
│   ├── components/      # Reusable React components
│   ├── guards/          # Route guards and protection
│   ├── hooks/           # Custom React hooks
│   ├── interceptor/     # Request/response interceptors
│   ├── routes/          # Application routes
│   ├── schemas/         # Zod validation schemas
│   ├── services/        # API service functions
│   ├── store/           # State management
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── public/
│   └── fonts/           # Custom font files
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── biome.json          # Biome linter/formatter config
├── app.config.ts       # TanStack Start configuration
├── postcss.config.ts   # PostCSS configuration
└── hero.ts             # Hero UI plugin configuration
```

## 🎨 Features

- **Modern React 19** with latest features
- **Type-safe routing** with TanStack Router
- **Server state management** with TanStack Query
- **Beautiful UI components** with Hero UI
- **Form handling** with React Hook Form and Zod validation
- **Authentication** integration with Better Auth
- **Code quality** with Biome linting and formatting
- **Custom fonts** and modern styling with Tailwind CSS v4

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

**Built with ❤️ using modern React ecosystem tools.**
