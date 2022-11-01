import jwt from 'jsonwebtoken'

export const ValidateRefreshTokenService = (token: string) => {
  try {
    const userData = jwt.verify(token, 'secret')

    return userData
  } catch (e) {
    return null
  }
}
