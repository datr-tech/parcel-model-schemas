import { freight } from '@app-pms/schemas';

describe('freight', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 12;

      // Act
      const numChildSchemasFound = Object.keys(freight).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
