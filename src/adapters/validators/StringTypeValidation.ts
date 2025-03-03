import { ValidationRule } from "../../domain/ports/ValidationRule.interface";
import { ValidationErrorException } from "../../domain/exceptions/ValidationErrorException";


export class StringTypeValidation implements ValidationRule {
  constructor(private fieldName: string) {}

  validate(value: unknown): void {
    if (typeof value !== 'string') {
      throw new ValidationErrorException(`${this.fieldName} must be a string`);
    }
  }
} 