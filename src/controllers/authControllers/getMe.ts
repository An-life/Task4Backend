import { Response, Request } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

import { GetMeService } from './../../service/Auth/getMe'

interface IUserData {
  id: string
  status: 'active' | 'blocked'
}

export const GetMe = async (req: Request, res: Response, next: any) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
  if (token) {
    try {
      const userData = jwt.verify(token, 'secret') as IUserData

      if (userData) {
        const user = await GetMeService(userData.id)

        return res.json(user)
      }
    } catch (e) {
      next(e)
    }
  }
}
