import { Response, Request } from 'express'

import { GetAllUsersService } from '../../service/Auth/getAllUsers'

export const GetUsers = async (req: Request, res: Response, next: any) => {
  try {
    const users = await GetAllUsersService()

    return res.json(users)
  } catch (e) {
    next(e)
  }
}
