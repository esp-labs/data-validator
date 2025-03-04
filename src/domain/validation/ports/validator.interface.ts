
/**
 * Port defining validation operations
 */
export interface Validator {
  validate(value: unknown): boolean;
} 