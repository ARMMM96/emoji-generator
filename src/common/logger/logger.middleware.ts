import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request:, ${req.url} Method: ${req.method}, Time: ${new Date().toISOString()}`);
    next();
  }
}
