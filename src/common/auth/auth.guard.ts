import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('AuthGuard: Checking access...');
    const request = context.switchToHttp().getRequest();
    const apiKey = request.header['x-api-key'];
    console.log(`API Key: ${apiKey}`);
    if (!apiKey || apiKey !== "SECRET_SAUCE") {
      console.error('AuthGuard: Invalid or missing API key');
      return false;

    }
    console.log('AuthGuard: Access granted');
    return true;
  }
}
