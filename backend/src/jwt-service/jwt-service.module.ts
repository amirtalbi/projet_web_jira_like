import { Module } from '@nestjs/common';
import { JwtServiceService } from './jwt-service.service';

@Module({
  providers: [JwtServiceService]
})
export class JwtServiceModule {}
