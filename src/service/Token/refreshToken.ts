import { ApiError } from './../../exceptions/apiError'
import { FindTokensService } from './findToken'
import { GenerateTokensService } from './generateTokens'
import { SaveTokenService } from './saveToken'
import { ValidateRefreshTokenService } from './validateRefreshToken'
import { UserDto } from './../../dtos/dtos'
import { User } from '../../models/user'
import { Token } from './../../models/token'

export const RefreshTokenService = async (refreshToken: string) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError()
  }
  const userData = ValidateRefreshTokenService(refreshToken)
  const tokenFromDb = await FindTokensService(refreshToken)

  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError()
  }

  const userTokenData = await Token.findOne({ refreshToken })

  const userDataFromDb = await User.findById(userTokenData?.user)
  let userDto
  if (userDataFromDb) {
    userDto = new UserDto(userDataFromDb)
  }

  const tokens = GenerateTokensService({
    ...userDto,
    status: 'active',
    role: 'user',
  })

  if (userDto.id) {
    await SaveTokenService(userDto.id, tokens.refreshToken)
  }

  return {
    ...tokens,
    user: userDto,
  }
}
