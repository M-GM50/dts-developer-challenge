import { Application } from 'express';
import taskRoutes from '../modules/tasks/routes';
import { initDatabase } from '../modules/tasks/database';

export default async (app: Application) => {
  await initDatabase();
  app.use('/api/tasks', taskRoutes);
}; 