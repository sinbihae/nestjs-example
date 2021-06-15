import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`[Request Call] ${req.originalUrl}`)
        next();
    }
}
