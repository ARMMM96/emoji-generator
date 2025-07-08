import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return;
    }
    if (isNaN(value)) {
      throw new BadRequestException(`Validation filed ${value} is notu a number`);
    }
    if (value < 0 || value > 10) {
      throw new BadRequestException(`Validation filed ${value} is not in range 0-10`);
    }
    console.log(`Validation passed for value: ${value}`);
    return Number(value);

  }
}
