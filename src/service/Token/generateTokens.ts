import jwt from 'jsonwebtoken'

export const GenerateTokensService = (payload: any) => {
  const accessToken = jwt.sign(payload, 'secret', {
    expiresIn: '1 d',
  })
  const refreshToken = jwt.sign(payload, 'secret', {
    expiresIn: '60 d',
  })

  return {
    accessToken,
    refreshToken,
  }
}
