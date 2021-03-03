// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWeather = /* GraphQL */ `
  query GetWeather($id: ID!) {
    getWeather(id: $id) {
      id
      city
      lastUpdate
      temperature
      cloudStatus
      rainProbability
    }
  }
`;
export const listWeathers = /* GraphQL */ `
  query ListWeathers(
    $filter: ModelWeatherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeathers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        city
        lastUpdate
        temperature
        cloudStatus
        rainProbability
      }
      nextToken
    }
  }
`;
