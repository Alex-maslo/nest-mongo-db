import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Geo {
  @Prop()
  lat: string;

  @Prop()
  lng: string;
}

const GeoSchema = SchemaFactory.createForClass(Geo);

@Schema()
export class Address {
  @Prop()
  street: string;

  @Prop()
  suite: string;

  @Prop()
  city: string;

  @Prop()
  zipcode: string;

  @Prop({ type: GeoSchema })
  geo: Geo;
}

const AddressSchema = SchemaFactory.createForClass(Address);

@Schema()
export class Company {
  @Prop()
  name: string;

  @Prop()
  catchPhrase: string;

  @Prop()
  bs: string;
}

const CompanySchema = SchemaFactory.createForClass(Company);

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop({ type: AddressSchema })
  address: Address;

  @Prop()
  phone: string;

  @Prop()
  website: string;

  @Prop({ type: CompanySchema })
  company: Company;
}

export const UserSchema = SchemaFactory.createForClass(User);
