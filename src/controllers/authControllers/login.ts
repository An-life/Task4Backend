import { Response, Request } from 'express'

import { LoginService } from '../../service/Auth/login'

export const Login = async (req: Request, res: Response, next: any) => {
  try {
    const { email, password } = req.body
    const userData = await LoginService(email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
