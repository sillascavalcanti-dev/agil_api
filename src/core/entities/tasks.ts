export interface TaskProps {
  title: string;
  description: string;
  deliveryDate?: Date;
  status: 'pending' | 'completed';
  createdAt: Date;
}

export class Task {
  constructor(public props: TaskProps) {
    if (props.title.length > 100) throw new Error("Título muito longo.");
  }
}