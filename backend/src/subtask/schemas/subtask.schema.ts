import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SubtaskDocument = Subtask & Document;

@Schema({ timestamps: true })
export class Subtask {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Task', required: true })
  taskId: Types.ObjectId;

  @Prop()
  status: string;

  @Prop()
  dueDate: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const SubtaskSchema = SchemaFactory.createForClass(Subtask);