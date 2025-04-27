import express, { Request, Response } from 'express';
import { TaskService, Task } from './service';

const router = express.Router();

// Create a task
router.post('/', async (req: Request, res: Response) => {
  const task: Task = req.body;
  if (!task.title || !task.status || !task.due_date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newTask = await TaskService.createTask(task);
  res.status(201).json(newTask);
});

// Get all tasks
router.get('/', async (req: Request, res: Response) => {
  const tasks = await TaskService.getAllTasks();
  res.json(tasks);
});

// Get task by ID
router.get('/:id', async (req: Request, res: Response) => {
  const task = await TaskService.getTaskById(Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// Update task status
router.patch('/:id/status', async (req: Request, res: Response) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }
  const task = await TaskService.updateTaskStatus(Number(req.params.id), status);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// Delete task
router.delete('/:id', async (req: Request, res: Response) => {
  await TaskService.deleteTask(Number(req.params.id));
  res.status(204).send();
});

export default router; 