import { Document } from 'mongoose';

export class Task extends Document {
  description: String;
  completed: Boolean;
}
