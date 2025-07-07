import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEmoji(): string {
    const emoji = this.generateRandomEmoji();
    return emoji;
  }

  generateRandomEmoji(): string {
    const emojis = ['😀', '😂', '😍', '🤔', '😎', '🥳', '😢', '😡', ' 👍', '👎'];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

}