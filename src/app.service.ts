import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEmoji(index?: number): string {
    const emoji = this.getEmojis();
    const emojiIndex = index || this.generateRandomIndex();
    return emoji[emojiIndex];
  }
  generateRandomIndex(): number {
    return Math.floor(Math.random() * 10);
  }
  getEmojis() {
    return ['😀', '😂', '😍', '🤔', '😎', '🥳', '😢', '😡', ' 👍', '👎'];
  }

}