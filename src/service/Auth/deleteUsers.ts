import { ApiError } from './../../exceptions/apiError'
import { User } from './../../models/user'

export const DeleteUsersService = async (users: string[]) => {
  if (users) {
    const deletedUsersData = await User.deleteMany({ _id: [...users] })
    console.log(deletedUsersData, ' чет не то c deletedData')
    return deletedUsersData
  }
  throw ApiError.BadRequest('Users data is not correct')
}
