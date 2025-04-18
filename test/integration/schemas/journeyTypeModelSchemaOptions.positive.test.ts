import { dolomiteSchemas } from '../../../dist';

describe('journeyTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'journeyType',
        timestamps: true,
        validateModifiedOnly: true,
      };

      // Act
      const { journeyTypeModelSchemaOptions } = dolomiteSchemas;
      const propsFound = { ...journeyTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
