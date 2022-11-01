import bcrypt from 'bcryptjs'

import { ApiError } from '../../exceptions/apiError'
import { GenerateTokensService } from '../Token/generateTokens'
import { SaveTokenService } from '../Token/saveToken'
import { User } from '../../models/user'
import { UserDto } from '../../dtos/dtos'

export const LoginService = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select('password').select('status')

  const loginDate = new Date()

  if (user) {
    await User.updateOne({ email }, { loginDate })
  }

  if (!user) {
    throw ApiError.BadRequest('User with this email is not found')
  }

  if (!user.password) {
    throw ApiError.BadRequest('Password is not correct')
  }

  const isPassEquals = await bcrypt.compare(password, user.password)

  if (!isPassEquals) {
    throw ApiError.BadRequest('Password is not correct')
  }

  const userDto = new UserDto(user)

  const tokens = GenerateTokensService({ ...userDto })

  await SaveTokenService(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto,
  }
}
