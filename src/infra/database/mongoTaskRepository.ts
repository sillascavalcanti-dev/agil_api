import { type TaskRepository } from '../../core/use-cases/createTask.js';
import { Task } from '../../core/entities/tasks.js';

export class MongoTaskRepository implements TaskRepository {
  async save(task: Task): Promise<void> {
    // Aqui vai a lógica real do MongoDB Atlas que você já conhece
    console.log(`Salvando no MongoDB: ${task.props.title}`);
  }
}