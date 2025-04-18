import { dolomiteSchemas } from '@app/schemas';

describe('hopModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'hop',
        timestamps: true,
        validateModifiedOnly: true,
      };

      // Act
      const { hopModelSchemaOptions } = dolomiteSchemas;
      const propsFound = { ...hopModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
