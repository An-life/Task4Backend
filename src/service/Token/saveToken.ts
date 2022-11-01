import jwt from 'jsonwebtoken'

import { Token } from '../../models/token'

export const SaveTokenService = async (
  userId: string,
  refreshToken: string,
) => {
  const tokenData = await Token.findOne({ userId })

  if (tokenData) {
    tokenData.refreshToken = refreshToken
    return tokenData.save()
  }

  const token = await Token.create({ user: userId, refreshToken })

  return token
}
