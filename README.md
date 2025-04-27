# Marion's DTS Developer Technical Test

See the task in parent repo.

A task management system for caseworkers built with Node.js, TypeScript, and SQLite.

## What it does

This is a simple task manager where you can:

- Create tasks with a title, description, status, and due date
- View all your tasks in a card-based layout
- Update task status (To Do → In Progress → Done)
- Delete tasks you don't need anymore

## Tech Stack & How it Works

### Frontend

Inherited from the [Frontend Starter Repo](https://github.com/hmcts/hmcts-dev-test-frontend).

- **Nunjucks** templating engine for dynamic HTML
- **GOV.UK** design system
- **Webpack**

### Backend

- **Express.js** with TypeScript
- **SQLite** database (via `@libsql/client` which is modern client by the Turso team) so that it's much easier to setup.

### API

All API endpoints are under `/api/tasks`:

- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/:id/status` - Update task status
- `DELETE /api/tasks/:id` - Delete a task

### Data Storage

- Single `tasks` table with: id, title, description, status, due_date, created_at
- Database auto-initializes on first run

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- Yarn package manager

## Getting Started

To run this application locally, follow these steps:

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Build the assets:

   ```bash
   yarn webpack
   ```

3. Start the development server:

   ```bash
   yarn start:dev
   ```

   Alternatively, you can navigate to package.json and run the start:dev script manually through your IDE.

## Accessing the Application

Once the server is running, you can access the application at: https://localhost:3100

Note: Since the development server uses a self-signed certificate for HTTPS, you'll see a security warning in your browser on first visit. This is normal.
