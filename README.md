# Inorins Support Hub

Internal helpdesk for Inorins Technologies. The app now uses:

- Full URL-based React Router navigation
- Local JSON-file backend persistence for users, tickets, and messages
- A Node + Express API server under server

## Run Locally

1. Install dependencies:

	npm install

2. Start frontend and backend together:

	npm run dev

3. Open the app:

	http://localhost:8080

The API server runs at http://localhost:3500 and Vite proxies /api requests to it.

## Data Persistence

All runtime data is stored on disk in:

- server/data/users.json
- server/data/tickets.json
- server/data/messages.json

When you create tickets, update status/assignee, or send messages, these JSON files are updated immediately.

## Route Map

Public:

- /login

Staff (role: inorins):

- /staff/dashboard
- /staff/tickets
- /staff/tickets/:ticketId
- /staff/board
- /staff/settings

Client (role: client):

- /client/tickets
- /client/tickets/new
- /client/tickets/:ticketId
- /client/faq

Fallback:

- Any unknown path renders Not Found

## Demo Accounts

Users are stored in server/data/users.json.

Default password for seeded accounts:

- demo123

## Scripts

- npm run dev: Start frontend + backend together
- npm run dev:web: Start frontend only
- npm run dev:api: Start backend only
- npm run test: Run unit tests
- npm run build: Build production frontend bundle
