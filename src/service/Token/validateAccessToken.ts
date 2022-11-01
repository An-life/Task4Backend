import jwt from 'jsonwebtoken'

export const ValidateAccessTokenService = (token: string) => {
  try {
    const userData = jwt.verify(token, 'secret')

    return userData
  } catch (e) {
    return null
  }
}
