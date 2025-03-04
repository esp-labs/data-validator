# @esp-labs/validators

This library provides a clean and extensible way to validate data in your TypeScript/JavaScript applications.

[![npm version](https://badge.fury.io/js/@esp-labs%2Fvalidators.svg)](https://www.npmjs.com/package/@esp-labs/validators)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎯 Strong TypeScript support
- 🏗️ Hexagonal Architecture design
- 🧩 Extensible validation system
- 📝 Comprehensive string validation
- 🔍 Pattern matching support
- ⚡ Zero dependencies
- 📚 Well-documented API
- ✅ 100% test coverage

## Installation

```bash
npm install @esp-labs/validators
```

or

```bash
yarn add @esp-labs/validators
```

## Quick Start

### String Validation Example

```typescript
import { StringValidator } from '@esp-labs/validators';

// Create a validator for an email field
const emailValidator = new StringValidator({
  fieldName: 'email',
  minLength: 5,
  maxLength: 100,
  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
});

try {
  // Validate an email
  emailValidator.validate('user@example.com'); // Returns true if valid
} catch (error) {
  console.error(error.message); // Handles validation errors
}
```

## API Reference

### StringValidator

The `StringValidator` class provides comprehensive string validation capabilities.

#### Constructor Options

```typescript
interface StringValidationType {
  fieldName: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}
```

| Option | Type | Description |
|--------|------|-------------|
| fieldName | string | Name of the field being validated (used in error messages) |
| minLength | number | (Optional) Minimum length requirement |
| maxLength | number | (Optional) Maximum length requirement |
| pattern | RegExp | (Optional) Regular expression pattern to match |

#### Methods

##### validate(value: unknown): boolean

Validates the provided value against the configured options.

- Returns `true` if validation passes
- Throws `ValidationErrorException` if validation fails

## Error Handling

The library uses custom `ValidationErrorException` for all validation errors. Each error includes a descriptive message indicating the specific validation failure.

```typescript
try {
  validator.validate('test');
} catch (error) {
  if (error instanceof ValidationErrorException) {
    console.error(error.message);
  }
}
```

### Project Structure

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

The project maintains 100% test coverage. To run tests:

```bash
npm test
```

For coverage report:

```bash
npm run test:coverage
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

ESP Labs

## Support

If you have any questions or need help integrating the library, please [open an issue](https://github.com/your-repo/issues).

## Changelog

### 0.1.3
- Initial release
- String validation support
- Comprehensive test coverage
