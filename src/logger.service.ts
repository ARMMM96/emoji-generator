import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    info(message: string): void {
        console.log(`INFO: ${message}`);
    }
}
