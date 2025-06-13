/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as GameGuardImport } from './routes/game/_guard'
import { Route as PublicRegisterImport } from './routes/_public/register'
import { Route as PublicLoginImport } from './routes/_public/login'
import { Route as PrivateDashboardImport } from './routes/_private/dashboard'
import { Route as PrivateGuardImport } from './routes/_private/_guard'
import { Route as PrivateGameMenuImport } from './routes/_private/GameMenu'
import { Route as GameConfigsGameImport } from './routes/game/configs/$game'
import { Route as GameMemoryGameSingleModeMemory1vs1Import } from './routes/game/_memoryGame/singleMode/memory1vs1'
import { Route as GameMemoryGame1vs1ModeMemoryImport } from './routes/game/_memoryGame/1vs1Mode/memory'
import { Route as GameHangmanGameSingleModeHangmanImport } from './routes/game/_hangmanGame/singleMode/hangman'
import { Route as GameHangmanGame1vs1ModeHangman1vs1Import } from './routes/game/_hangmanGame/1vs1Mode/hangman1vs1'

// Create Virtual Routes

const GameImport = createFileRoute('/game')()

// Create/Update Routes

const GameRoute = GameImport.update({
  id: '/game',
  path: '/game',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const GameGuardRoute = GameGuardImport.update({
  id: '/_guard',
  getParentRoute: () => GameRoute,
} as any)

const PublicRegisterRoute = PublicRegisterImport.update({
  id: '/_public/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const PublicLoginRoute = PublicLoginImport.update({
  id: '/_public/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const PrivateDashboardRoute = PrivateDashboardImport.update({
  id: '/_private/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const PrivateGuardRoute = PrivateGuardImport.update({
  id: '/_private/_guard',
  getParentRoute: () => rootRoute,
} as any)

const PrivateGameMenuRoute = PrivateGameMenuImport.update({
  id: '/_private/GameMenu',
  path: '/GameMenu',
  getParentRoute: () => rootRoute,
} as any)

const GameConfigsGameRoute = GameConfigsGameImport.update({
  id: '/configs/$game',
  path: '/configs/$game',
  getParentRoute: () => GameRoute,
} as any)

const GameMemoryGameSingleModeMemory1vs1Route =
  GameMemoryGameSingleModeMemory1vs1Import.update({
    id: '/_memoryGame/singleMode/memory1vs1',
    path: '/singleMode/memory1vs1',
    getParentRoute: () => GameRoute,
  } as any)

const GameMemoryGame1vs1ModeMemoryRoute =
  GameMemoryGame1vs1ModeMemoryImport.update({
    id: '/_memoryGame/1vs1Mode/memory',
    path: '/1vs1Mode/memory',
    getParentRoute: () => GameRoute,
  } as any)

const GameHangmanGameSingleModeHangmanRoute =
  GameHangmanGameSingleModeHangmanImport.update({
    id: '/_hangmanGame/singleMode/hangman',
    path: '/singleMode/hangman',
    getParentRoute: () => GameRoute,
  } as any)

const GameHangmanGame1vs1ModeHangman1vs1Route =
  GameHangmanGame1vs1ModeHangman1vs1Import.update({
    id: '/_hangmanGame/1vs1Mode/hangman1vs1',
    path: '/1vs1Mode/hangman1vs1',
    getParentRoute: () => GameRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_private/GameMenu': {
      id: '/_private/GameMenu'
      path: '/GameMenu'
      fullPath: '/GameMenu'
      preLoaderRoute: typeof PrivateGameMenuImport
      parentRoute: typeof rootRoute
    }
    '/_private/_guard': {
      id: '/_private/_guard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateGuardImport
      parentRoute: typeof rootRoute
    }
    '/_private/dashboard': {
      id: '/_private/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof PrivateDashboardImport
      parentRoute: typeof rootRoute
    }
    '/_public/login': {
      id: '/_public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PublicLoginImport
      parentRoute: typeof rootRoute
    }
    '/_public/register': {
      id: '/_public/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof PublicRegisterImport
      parentRoute: typeof rootRoute
    }
    '/game': {
      id: '/game'
      path: '/game'
      fullPath: '/game'
      preLoaderRoute: typeof GameImport
      parentRoute: typeof rootRoute
    }
    '/game/_guard': {
      id: '/game/_guard'
      path: '/game'
      fullPath: '/game'
      preLoaderRoute: typeof GameGuardImport
      parentRoute: typeof GameRoute
    }
    '/game/configs/$game': {
      id: '/game/configs/$game'
      path: '/configs/$game'
      fullPath: '/game/configs/$game'
      preLoaderRoute: typeof GameConfigsGameImport
      parentRoute: typeof GameImport
    }
    '/game/_hangmanGame/1vs1Mode/hangman1vs1': {
      id: '/game/_hangmanGame/1vs1Mode/hangman1vs1'
      path: '/1vs1Mode/hangman1vs1'
      fullPath: '/game/1vs1Mode/hangman1vs1'
      preLoaderRoute: typeof GameHangmanGame1vs1ModeHangman1vs1Import
      parentRoute: typeof GameImport
    }
    '/game/_hangmanGame/singleMode/hangman': {
      id: '/game/_hangmanGame/singleMode/hangman'
      path: '/singleMode/hangman'
      fullPath: '/game/singleMode/hangman'
      preLoaderRoute: typeof GameHangmanGameSingleModeHangmanImport
      parentRoute: typeof GameImport
    }
    '/game/_memoryGame/1vs1Mode/memory': {
      id: '/game/_memoryGame/1vs1Mode/memory'
      path: '/1vs1Mode/memory'
      fullPath: '/game/1vs1Mode/memory'
      preLoaderRoute: typeof GameMemoryGame1vs1ModeMemoryImport
      parentRoute: typeof GameImport
    }
    '/game/_memoryGame/singleMode/memory1vs1': {
      id: '/game/_memoryGame/singleMode/memory1vs1'
      path: '/singleMode/memory1vs1'
      fullPath: '/game/singleMode/memory1vs1'
      preLoaderRoute: typeof GameMemoryGameSingleModeMemory1vs1Import
      parentRoute: typeof GameImport
    }
  }
}

// Create and export the route tree

interface GameRouteChildren {
  GameGuardRoute: typeof GameGuardRoute
  GameConfigsGameRoute: typeof GameConfigsGameRoute
  GameHangmanGame1vs1ModeHangman1vs1Route: typeof GameHangmanGame1vs1ModeHangman1vs1Route
  GameHangmanGameSingleModeHangmanRoute: typeof GameHangmanGameSingleModeHangmanRoute
  GameMemoryGame1vs1ModeMemoryRoute: typeof GameMemoryGame1vs1ModeMemoryRoute
  GameMemoryGameSingleModeMemory1vs1Route: typeof GameMemoryGameSingleModeMemory1vs1Route
}

const GameRouteChildren: GameRouteChildren = {
  GameGuardRoute: GameGuardRoute,
  GameConfigsGameRoute: GameConfigsGameRoute,
  GameHangmanGame1vs1ModeHangman1vs1Route:
    GameHangmanGame1vs1ModeHangman1vs1Route,
  GameHangmanGameSingleModeHangmanRoute: GameHangmanGameSingleModeHangmanRoute,
  GameMemoryGame1vs1ModeMemoryRoute: GameMemoryGame1vs1ModeMemoryRoute,
  GameMemoryGameSingleModeMemory1vs1Route:
    GameMemoryGameSingleModeMemory1vs1Route,
}

const GameRouteWithChildren = GameRoute._addFileChildren(GameRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/GameMenu': typeof PrivateGameMenuRoute
  '': typeof PrivateGuardRoute
  '/dashboard': typeof PrivateDashboardRoute
  '/login': typeof PublicLoginRoute
  '/register': typeof PublicRegisterRoute
  '/game': typeof GameGuardRoute
  '/game/configs/$game': typeof GameConfigsGameRoute
  '/game/1vs1Mode/hangman1vs1': typeof GameHangmanGame1vs1ModeHangman1vs1Route
  '/game/singleMode/hangman': typeof GameHangmanGameSingleModeHangmanRoute
  '/game/1vs1Mode/memory': typeof GameMemoryGame1vs1ModeMemoryRoute
  '/game/singleMode/memory1vs1': typeof GameMemoryGameSingleModeMemory1vs1Route
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/GameMenu': typeof PrivateGameMenuRoute
  '': typeof PrivateGuardRoute
  '/dashboard': typeof PrivateDashboardRoute
  '/login': typeof PublicLoginRoute
  '/register': typeof PublicRegisterRoute
  '/game': typeof GameGuardRoute
  '/game/configs/$game': typeof GameConfigsGameRoute
  '/game/1vs1Mode/hangman1vs1': typeof GameHangmanGame1vs1ModeHangman1vs1Route
  '/game/singleMode/hangman': typeof GameHangmanGameSingleModeHangmanRoute
  '/game/1vs1Mode/memory': typeof GameMemoryGame1vs1ModeMemoryRoute
  '/game/singleMode/memory1vs1': typeof GameMemoryGameSingleModeMemory1vs1Route
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_private/GameMenu': typeof PrivateGameMenuRoute
  '/_private/_guard': typeof PrivateGuardRoute
  '/_private/dashboard': typeof PrivateDashboardRoute
  '/_public/login': typeof PublicLoginRoute
  '/_public/register': typeof PublicRegisterRoute
  '/game': typeof GameRouteWithChildren
  '/game/_guard': typeof GameGuardRoute
  '/game/configs/$game': typeof GameConfigsGameRoute
  '/game/_hangmanGame/1vs1Mode/hangman1vs1': typeof GameHangmanGame1vs1ModeHangman1vs1Route
  '/game/_hangmanGame/singleMode/hangman': typeof GameHangmanGameSingleModeHangmanRoute
  '/game/_memoryGame/1vs1Mode/memory': typeof GameMemoryGame1vs1ModeMemoryRoute
  '/game/_memoryGame/singleMode/memory1vs1': typeof GameMemoryGameSingleModeMemory1vs1Route
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/GameMenu'
    | ''
    | '/dashboard'
    | '/login'
    | '/register'
    | '/game'
    | '/game/configs/$game'
    | '/game/1vs1Mode/hangman1vs1'
    | '/game/singleMode/hangman'
    | '/game/1vs1Mode/memory'
    | '/game/singleMode/memory1vs1'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/GameMenu'
    | ''
    | '/dashboard'
    | '/login'
    | '/register'
    | '/game'
    | '/game/configs/$game'
    | '/game/1vs1Mode/hangman1vs1'
    | '/game/singleMode/hangman'
    | '/game/1vs1Mode/memory'
    | '/game/singleMode/memory1vs1'
  id:
    | '__root__'
    | '/'
    | '/_private/GameMenu'
    | '/_private/_guard'
    | '/_private/dashboard'
    | '/_public/login'
    | '/_public/register'
    | '/game'
    | '/game/_guard'
    | '/game/configs/$game'
    | '/game/_hangmanGame/1vs1Mode/hangman1vs1'
    | '/game/_hangmanGame/singleMode/hangman'
    | '/game/_memoryGame/1vs1Mode/memory'
    | '/game/_memoryGame/singleMode/memory1vs1'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PrivateGameMenuRoute: typeof PrivateGameMenuRoute
  PrivateGuardRoute: typeof PrivateGuardRoute
  PrivateDashboardRoute: typeof PrivateDashboardRoute
  PublicLoginRoute: typeof PublicLoginRoute
  PublicRegisterRoute: typeof PublicRegisterRoute
  GameRoute: typeof GameRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PrivateGameMenuRoute: PrivateGameMenuRoute,
  PrivateGuardRoute: PrivateGuardRoute,
  PrivateDashboardRoute: PrivateDashboardRoute,
  PublicLoginRoute: PublicLoginRoute,
  PublicRegisterRoute: PublicRegisterRoute,
  GameRoute: GameRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_private/GameMenu",
        "/_private/_guard",
        "/_private/dashboard",
        "/_public/login",
        "/_public/register",
        "/game"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_private/GameMenu": {
      "filePath": "_private/GameMenu.tsx"
    },
    "/_private/_guard": {
      "filePath": "_private/_guard.tsx"
    },
    "/_private/dashboard": {
      "filePath": "_private/dashboard.tsx"
    },
    "/_public/login": {
      "filePath": "_public/login.tsx"
    },
    "/_public/register": {
      "filePath": "_public/register.tsx"
    },
    "/game": {
      "filePath": "game",
      "children": [
        "/game/_guard",
        "/game/configs/$game",
        "/game/_hangmanGame/1vs1Mode/hangman1vs1",
        "/game/_hangmanGame/singleMode/hangman",
        "/game/_memoryGame/1vs1Mode/memory",
        "/game/_memoryGame/singleMode/memory1vs1"
      ]
    },
    "/game/_guard": {
      "filePath": "game/_guard.tsx",
      "parent": "/game"
    },
    "/game/configs/$game": {
      "filePath": "game/configs/$game.tsx",
      "parent": "/game"
    },
    "/game/_hangmanGame/1vs1Mode/hangman1vs1": {
      "filePath": "game/_hangmanGame/1vs1Mode/hangman1vs1.tsx",
      "parent": "/game"
    },
    "/game/_hangmanGame/singleMode/hangman": {
      "filePath": "game/_hangmanGame/singleMode/hangman.tsx",
      "parent": "/game"
    },
    "/game/_memoryGame/1vs1Mode/memory": {
      "filePath": "game/_memoryGame/1vs1Mode/memory.tsx",
      "parent": "/game"
    },
    "/game/_memoryGame/singleMode/memory1vs1": {
      "filePath": "game/_memoryGame/singleMode/memory1vs1.tsx",
      "parent": "/game"
    }
  }
}
ROUTE_MANIFEST_END */
