import { ApiError } from './../../exceptions/apiError'
import { User } from '../../models/user'

export const GetAllUsersService = async () => {
  const users = await User.find()
  if (!users) {
    throw ApiError.BadRequest('Something wrong with users')
  }
  return users
}
