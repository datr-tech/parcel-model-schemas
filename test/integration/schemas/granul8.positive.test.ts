import { granul8 } from './../../../dist';

describe('granul8', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 8;

      // Act
      const numChildSchemasFound = Object.keys(granul8).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
