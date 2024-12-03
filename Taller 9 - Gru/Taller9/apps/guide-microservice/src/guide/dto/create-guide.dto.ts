import { IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export class CreateGuideDto {
  @IsNumber()
  @IsNotEmpty()
  channelId: number;

  @IsNumber()
  @IsNotEmpty()
  programId: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsDate()
  @IsNotEmpty()
  transmissionTime: Date;

  @IsNumber()
  @IsNotEmpty()
  ratingScale: number;
}

