/**
 * Configuration options for string validation
 * @since 1.0.0
 */
export type StringValidationType = {
  /** 
   * Field name being validated
   * @required
   */
  fieldName: string;

  /** 
   * Minimum allowed length for the string
   * @default 0
   */
  minLength?: number;

  /**
   * Maximum allowed length for the string
   */
  maxLength?: number;

  /**
   * Regular expression to validate string format
   */
  pattern?: RegExp;
}; 