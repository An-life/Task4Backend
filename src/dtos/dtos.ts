export class UserDto {
  id
  status

  constructor(model: { _id: string; status: string }) {
    this.id = model._id
    this.status = model.status
  }
}
