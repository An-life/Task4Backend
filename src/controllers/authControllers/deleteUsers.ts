import { Response, Request } from 'express'

import { DeleteUsersService } from './../../service/Auth/deleteUsers'

export const DeleteUsers = async (req: Request, res: Response, next: any) => {
  try {
    const { users } = req.body
    const usersData = await DeleteUsersService(users)
    return res.json(usersData)
  } catch (e) {
    next(e)
  }
}
