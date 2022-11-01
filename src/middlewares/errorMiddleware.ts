import { ApiError } from './../exceptions/apiError'

export const ErrorMiddleware = (err, req, res, next) => {
  console.log(err)
  if (err) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors })
  }

  return res.status(500).json({ message: 'Unexpected error' })
}
