import { Token } from '../../models/token'

export const RemoveTokensService = async (refreshToken: string) => {
  const tokenData = await Token.deleteOne({ refreshToken })

  return tokenData
}
