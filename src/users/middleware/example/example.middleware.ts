import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example middleware');
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('no authorization', HttpStatus.FORBIDDEN);
    if (authorization === 'abcdefghij') next();
    else
      throw new HttpException(
        'Invalid Authorization Token',
        HttpStatus.UNAUTHORIZED,
      );
  }
}
