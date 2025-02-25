import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HttpCallModule } from './http-call';

@Module({
  imports: [
    HttpCallModule,
    RouterModule.register([
      {
        path: 'http-call',
        module: HttpCallModule,
      },
    ]),
  ],
})
export class FeaturesModule {}
