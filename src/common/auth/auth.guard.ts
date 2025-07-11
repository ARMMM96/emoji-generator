import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '../../logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly logger: LoggerService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('AuthGuard: Checking acce ss...');
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    console.log(`API Key: ${apiKey}`);
    if (!apiKey || apiKey !== "SECRET_SAUCE") {
      console.error('AuthGuard: Invalid or missing API key');
      return false;

    }
    this.logger.info('Guard: Passed authrization');
    return true;
  }
}
