
class ValidationErrorException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationErrorException';
  }
}

export { ValidationErrorException };