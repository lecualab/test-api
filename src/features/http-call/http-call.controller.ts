import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map } from 'rxjs';

@Controller('pokemon')
export class HttpCallController {
  constructor(private readonly httpService: HttpService) {}

  @Get(':name')
  httpCall(@Param('name') name: string) {
    return this.httpService.get<object>(`/pokemon/${name}`).pipe(
      catchError((error: AxiosError) => {
        throw new HttpException(
          error.response?.data ?? error.message,
          error.response?.status ?? HttpStatus.BAD_GATEWAY,
        );
      }),
      map(({ data }) => data),
    );
  }
}
