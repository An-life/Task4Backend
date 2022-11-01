import { Token } from '../../models/token'

export const FindTokensService = async (refreshToken: string) => {
  const tokenData = await Token.findOne({ refreshToken })

  return tokenData
}
