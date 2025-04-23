import { entity } from './../../../dist';

describe('entity', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 14;

      // Act
      const numChildSchemasFound = Object.keys(entity).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
