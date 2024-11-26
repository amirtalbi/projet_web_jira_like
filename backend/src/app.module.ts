import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TaskModule } from './task/task.module';
import { SubtaskModule } from './subtask/subtask.module';

@Module({
  imports: [AuthModule, UsersModule, ProjectsModule, TaskModule, SubtaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
