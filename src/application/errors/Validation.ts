export class RequiredFieldError extends Error {
  constructor (fieldname?: string) {
    const message = fieldname === undefined ? 'Field required' : `The field ${fieldname} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}
