import { IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateExpenseDto {
  @IsNumber()
  amount: number;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsDateString()
  date: Date;
}
