import { Schema, model } from 'mongoose'
import { StringLiteral } from 'typescript'

export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  status: 'active' | 'blocked'
  registrationDate: string
  loginDate: string
}

export const UserSchema = new Schema<IUser>({
  name: { type: String, unique: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  status: { type: String, default: 'active' },
  registrationDate: { type: String },
  loginDate: { type: String },
})

export const User = model<IUser>('User', UserSchema)
