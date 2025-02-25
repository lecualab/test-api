import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpCallController } from './http-call.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://pokeapi.co/api/v2',
    }),
  ],
  controllers: [HttpCallController],
})
export class HttpCallModule {}
