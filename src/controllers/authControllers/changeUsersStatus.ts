import { Response, Request } from 'express'

import { ChangeUsersStatusService } from './../../service/Auth/changeUsersStatus'

export const ChangeUsersStatus = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const { users, status } = req.body
    const usersData = await ChangeUsersStatusService(users, status)
    return res.json(usersData)
  } catch (e) {
    next(e)
  }
}
