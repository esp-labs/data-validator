import { ValidationErrorException } from "../exception/validation-error.exception";
import { Validator } from "../ports/validator.interface";
import { StringValidationType } from "../types/string-validation.type";

/**
 * Validates that a value is a string and optionally checks its length and format
 * @since 1.0.0
 * @example
 * const validator = new StringTypeValidation({ fieldName: 'email', minLength: 5, maxLength: 100, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ });
 * validator.validate('test@example.com'); // No error
 */
export class StringValidator implements Validator {
  /**
   * Creates a new StringTypeValidation instance
   * @param options - Configuration options for string validation
   */
  constructor(private options: StringValidationType) {}

  /**
   * Validates the value against the configured options
   * @param value - The value to validate
   * @throws {ValidationErrorException} If validation fails
   */
  validate(value: unknown): boolean {
    if (typeof value !== "string") {
      throw new ValidationErrorException(
        `${this.options.fieldName} must be a string`
      );
    }

    if (this.options.minLength && value.length < this.options.minLength) {
      throw new ValidationErrorException(
        `${this.options.fieldName} must be at least ${this.options.minLength} characters long`
      );
    }

    if (this.options.maxLength && value.length > this.options.maxLength) {
      throw new ValidationErrorException(
        `${this.options.fieldName} must be at most ${this.options.maxLength} characters long`
      );
    }

    if (this.options.pattern && !this.options.pattern.test(value)) {
      throw new ValidationErrorException(
        `${this.options.fieldName} must match the pattern ${this.options.pattern}`
      );
    }
    return true;
  }
}
