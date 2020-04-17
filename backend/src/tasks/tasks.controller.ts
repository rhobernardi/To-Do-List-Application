import {
  Controller,
  Get,
  Param,
  Delete,
  Body,
  Put,
  Post,
} from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: String): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: String, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: String) {
    this.taskService.delete(id);
  }
}
