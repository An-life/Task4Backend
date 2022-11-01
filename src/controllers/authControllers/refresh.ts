import { Response, Request } from 'express'

import { RefreshTokenService } from '../../service/Token/refreshToken'

export const Refresh = async (req: Request, res: Response, next: any) => {
  try {
    const { refreshToken } = req.cookies
    const userData = await RefreshTokenService(refreshToken)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
