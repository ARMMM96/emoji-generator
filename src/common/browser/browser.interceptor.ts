import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const userAgent = req.header('user-agent');
    const browserCLient = userAgent.split(`/`)[0] || 'Unknown Browser';
    req.browser = browserCLient;
    console.log(`${req.browser}`);
    return next.handle();
  }
}
