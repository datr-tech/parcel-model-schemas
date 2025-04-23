import { common } from '@app-pms/schemas';

describe('common', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 27;

      // Act
      const numChildSchemasFound = Object.keys(common).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
