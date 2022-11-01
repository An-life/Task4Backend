import { Response, Request } from 'express'
import { validationResult } from 'express-validator'

import { ApiError } from './../../exceptions/apiError'
import { RegistrationService } from '../../service/Auth/registration'

export const Registration = async (req: Request, res: Response, next: any) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Validation error', errors.array()))
    }

    const { name, email, password } = req.body
    const userData = await RegistrationService(name, email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
