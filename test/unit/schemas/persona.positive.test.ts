import { persona } from '@app-pms/schemas';

describe('persona', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 16;

      // Act
      const numChildSchemasFound = Object.keys(persona).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
