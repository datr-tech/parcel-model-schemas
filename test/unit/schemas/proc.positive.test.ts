import { proc } from '@app-pms/schemas';

describe('proc', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 4;

      // Act
      const numChildSchemasFound = Object.keys(proc).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
