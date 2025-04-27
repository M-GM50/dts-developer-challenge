# Marion's DTS Developer Technical Test

See task in [task.md](/task.md)

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- Yarn package manager

## Getting Started

To run this application locally, follow these steps:

1) Install dependencies:
   ```bash
   yarn install
   ```

2) Build the assets:
   ```bash
   yarn webpack
   ```

3) Start the development server:
   ```bash
   yarn start:dev
   ```
   
   Alternatively, you can navigate to package.json and run the start:dev script manually through your IDE.

## Accessing the Application

Once the server is running, you can access the application at: https://localhost:3100

Note: Since the development server uses a self-signed certificate for HTTPS, you'll see a security warning in your browser on first visit. This is normal.



