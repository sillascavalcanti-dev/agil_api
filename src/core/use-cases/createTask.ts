import { Task, type TaskProps } from '../entities/tasks.js';

// Contrato que o banco de dados deve seguir
export interface TaskRepository {
  save(task: Task): Promise<void>;
}

export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(data: Omit<TaskProps, 'status' | 'createdAt'>) {
    const task = new Task({
      ...data,
      status: 'pending',
      createdAt: new Date()
    });

    await this.taskRepository.save(task);
    return task;
  }
}