import { Response, Request } from 'express'

import { LogoutService } from '../../service/Auth/logout'

export const Logout = async (req: Request, res: Response, next: any) => {
  try {
    const { refreshToken } = req.cookies
    const token = await LogoutService(refreshToken)

    res.clearCookie('refreshToken')

    return res.json(token)
  } catch (e) {
    next(e)
  }
}
