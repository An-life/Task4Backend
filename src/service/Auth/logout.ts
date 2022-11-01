import { RemoveTokensService } from '../Token/removeToken'

export const LogoutService = async (refreshToken: string) => {
  const token = await RemoveTokensService(refreshToken)

  return token
}
