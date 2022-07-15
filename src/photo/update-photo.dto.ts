import { IsBoolean, IsInt, IsString } from 'class-validator';

export class UpdatePhotoDto {
  @IsString({ message: 'ใส่ name นำเด้อพี่น้อง' })
  name: string;

  @IsString({ message: 'ใส่ description นำเด้อพี่น้อง' })
  description: string;

  @IsString({ message: 'ใส่ filename นำเด้อพี่น้อง' })
  filename: string;

  @IsInt()
  views: number;

  @IsBoolean()
  isPublished: boolean;
}
