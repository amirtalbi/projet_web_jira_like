import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TaskModule } from './task/task.module';
import { SubtaskModule } from './subtask/subtask.module';
import { JwtServiceModule } from './jwt-service/jwt-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UsersModule,
    ProjectsModule,
    TaskModule,
    SubtaskModule,
    JwtServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
