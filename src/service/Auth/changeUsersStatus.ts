import { ApiError } from '../../exceptions/apiError'
import { User } from '../../models/user'

export const ChangeUsersStatusService = async (
  users: string[],
  status: string,
) => {
  if (users && status) {
    const updatedUsersData = await User.updateMany(
      { _id: { $in: users } },
      { status },
      { multi: true },
    )
    return updatedUsersData
  }
  throw ApiError.BadRequest('Users data is not correct')
}
