// tslint:disable
// this is an auto generated file. This will be overwritten

export const createWeather = /* GraphQL */ `
  mutation CreateWeather(
    $input: CreateWeatherInput!
    $condition: ModelWeatherConditionInput
  ) {
    createWeather(input: $input, condition: $condition) {
      id
      city
      lastUpdate
      temperature
      cloudStatus
      rainProbability
    }
  }
`;
export const updateWeather = /* GraphQL */ `
  mutation UpdateWeather(
    $input: UpdateWeatherInput!
    $condition: ModelWeatherConditionInput
  ) {
    updateWeather(input: $input, condition: $condition) {
      id
      city
      lastUpdate
      temperature
      cloudStatus
      rainProbability
    }
  }
`;
export const deleteWeather = /* GraphQL */ `
  mutation DeleteWeather(
    $input: DeleteWeatherInput!
    $condition: ModelWeatherConditionInput
  ) {
    deleteWeather(input: $input, condition: $condition) {
      id
      city
      lastUpdate
      temperature
      cloudStatus
      rainProbability
    }
  }
`;
