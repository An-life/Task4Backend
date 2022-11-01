import { Schema, model } from 'mongoose'

import { IUser } from './user'

interface IToken {
  user: IUser
  refreshToken: string
}

export const TokenSchema = new Schema<IToken>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
})

export const Token = model<IToken>('Token', TokenSchema)
