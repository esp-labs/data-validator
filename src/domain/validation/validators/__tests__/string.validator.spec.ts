import { StringValidator } from '../string.validator';
import { ValidationErrorException } from '../../exception/validation-error.exception';

describe('StringValidator', () => {
  describe('validate', () => {
    it('should accept valid string', () => {
      const validator = new StringValidator({ fieldName: 'test' });
      expect(validator.validate('valid string')).toBe(true);
    });

    it('should throw error for non-string value', () => {
      const validator = new StringValidator({ fieldName: 'test' });
      expect(() => validator.validate(123)).toThrow(ValidationErrorException);
      expect(() => validator.validate(123)).toThrow('test must be a string');
    });

    describe('minLength validation', () => {
      const validator = new StringValidator({ fieldName: 'test', minLength: 5 });

      it('should accept string with valid minimum length', () => {
        expect(validator.validate('valid string')).toBe(true);
      });

      it('should throw error for string shorter than minimum length', () => {
        expect(() => validator.validate('abc')).toThrow(ValidationErrorException);
        expect(() => validator.validate('abc')).toThrow('test must be at least 5 characters long');
      });
    });

    describe('maxLength validation', () => {
      const validator = new StringValidator({ fieldName: 'test', maxLength: 10 });

      it('should accept string with valid maximum length', () => {
        expect(validator.validate('valid')).toBe(true);
      });

      it('should throw error for string longer than maximum length', () => {
        expect(() => validator.validate('this is too long')).toThrow(ValidationErrorException);
        expect(() => validator.validate('this is too long')).toThrow('test must be at most 10 characters long');
      });
    });

    describe('pattern validation', () => {
      const validator = new StringValidator({
        fieldName: 'email',
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      });

      it('should accept string matching pattern', () => {
        expect(validator.validate('test@example.com')).toBe(true);
      });

      it('should throw error for string not matching pattern', () => {
        expect(() => validator.validate('invalid-email')).toThrow(ValidationErrorException);
        expect(() => validator.validate('invalid-email')).toThrow('email must match the pattern');
      });
    });

    describe('combined validations', () => {
      const validator = new StringValidator({
        fieldName: 'email',
        minLength: 10,
        maxLength: 50,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      });

      it('should accept valid string meeting all criteria', () => {
        expect(validator.validate('test@example.com')).toBe(true);
      });

      it('should throw error when any validation fails', () => {
        expect(() => validator.validate('test@test')).toThrow(ValidationErrorException);
        expect(() => validator.validate('a@b.com')).toThrow(ValidationErrorException);
        expect(() => validator.validate('test@test.com'.repeat(5))).toThrow(ValidationErrorException);
      });
    });
  });
}); 