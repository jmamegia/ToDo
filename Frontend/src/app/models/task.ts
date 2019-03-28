export interface Task {
  id?: number;
  responsible?: string;
  name?: string;
  description?: string;
  image?: string;
  created_at?: Date;
  priority?: number
}
