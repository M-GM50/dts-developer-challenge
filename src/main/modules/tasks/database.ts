import { createClient } from '@libsql/client';

const client = createClient({
  url: 'file:tasks.sqlite',
});

export const initDatabase = async () => {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL,
      due_date TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Add some fun example tasks
  const tasks = [
    ['🦖 Deal with T-Rex in parking lot', 'Jurassic Park lawyers need help with escaped dinosaur. Bring large net and snacks.', 'TODO', new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString()],
  ];

  // Clear existing tasks and add new ones
  await client.execute('DELETE FROM tasks');
  for (const [title, description, status, due_date] of tasks) {
    await client.execute({
      sql: 'INSERT INTO tasks (title, description, status, due_date) VALUES (?, ?, ?, ?)',
      args: [title, description, status, due_date],
    });
  }
};

export { client }; 