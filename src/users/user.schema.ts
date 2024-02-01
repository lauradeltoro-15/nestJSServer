import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ autoCreate: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  profileImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
