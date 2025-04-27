import { client } from './database';

export interface Task {
  id?: number;
  title: string;
  description?: string;
  status: string;
  due_date: string;
  created_at?: string;
}

export const TaskService = {
  async createTask(task: Task) {
    const result = await client.execute({
      sql: 'INSERT INTO tasks (title, description, status, due_date) VALUES (?, ?, ?, ?) RETURNING *',
      args: [task.title, task.description || null, task.status, task.due_date],
    });
    return result.rows[0];
  },

  async getTaskById(id: number) {
    const result = await client.execute({
      sql: 'SELECT * FROM tasks WHERE id = ?',
      args: [id],
    });
    return result.rows[0];
  },

  async getAllTasks() {
    const result = await client.execute('SELECT * FROM tasks ORDER BY due_date ASC');
    return result.rows;
  },

  async updateTaskStatus(id: number, status: string) {
    const result = await client.execute({
      sql: 'UPDATE tasks SET status = ? WHERE id = ? RETURNING *',
      args: [status, id],
    });
    return result.rows[0];
  },

  async deleteTask(id: number) {
    await client.execute({
      sql: 'DELETE FROM tasks WHERE id = ?',
      args: [id],
    });
  },
}; 