import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return updatedTask;
  }

  async remove(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return deletedTask;
  }

  async getTaskTree(projectId: Types.ObjectId): Promise<Task[]> {
    const tasks = await this.taskModel.find({ projectId }).exec();
    return this.buildTaskTree(tasks);
  }

  private buildTaskTree(tasks: Task[]): Task[] {
    const taskMap = new Map<string, Task>();

    tasks.forEach(task => {
      taskMap.set(task._id.toString(), task);
    });

    const taskTree: Task[] = [];

    tasks.forEach(task => {
      if (task.parent) {
        const parentTask = taskMap.get(task.parent.toString());
        if (parentTask) {
          if (!parentTask.children) {
            parentTask.children = [];
          }
          parentTask.children.push(task);
        }
      } else {
        taskTree.push(task);
      }
    });

    return taskTree;
  }
}
