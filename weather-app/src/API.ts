/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWeatherInput = {
  id?: string | null,
  city: string,
  lastUpdate: string,
  temperature: string,
  cloudStatus: string,
  rainProbability: number,
};

export type ModelWeatherConditionInput = {
  city?: ModelStringInput | null,
  lastUpdate?: ModelStringInput | null,
  temperature?: ModelStringInput | null,
  cloudStatus?: ModelStringInput | null,
  rainProbability?: ModelIntInput | null,
  and?: Array< ModelWeatherConditionInput | null > | null,
  or?: Array< ModelWeatherConditionInput | null > | null,
  not?: ModelWeatherConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateWeatherInput = {
  id: string,
  city?: string | null,
  lastUpdate?: string | null,
  temperature?: string | null,
  cloudStatus?: string | null,
  rainProbability?: number | null,
};

export type DeleteWeatherInput = {
  id?: string | null,
};

export type ModelWeatherFilterInput = {
  id?: ModelIDInput | null,
  city?: ModelStringInput | null,
  lastUpdate?: ModelStringInput | null,
  temperature?: ModelStringInput | null,
  cloudStatus?: ModelStringInput | null,
  rainProbability?: ModelIntInput | null,
  and?: Array< ModelWeatherFilterInput | null > | null,
  or?: Array< ModelWeatherFilterInput | null > | null,
  not?: ModelWeatherFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateWeatherMutationVariables = {
  input: CreateWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type CreateWeatherMutation = {
  createWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};

export type UpdateWeatherMutationVariables = {
  input: UpdateWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type UpdateWeatherMutation = {
  updateWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};

export type DeleteWeatherMutationVariables = {
  input: DeleteWeatherInput,
  condition?: ModelWeatherConditionInput | null,
};

export type DeleteWeatherMutation = {
  deleteWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};

export type GetWeatherQueryVariables = {
  id: string,
};

export type GetWeatherQuery = {
  getWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};

export type ListWeathersQueryVariables = {
  filter?: ModelWeatherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeathersQuery = {
  listWeathers:  {
    __typename: "ModelWeatherConnection",
    items:  Array< {
      __typename: "Weather",
      id: string,
      city: string,
      lastUpdate: string,
      temperature: string,
      cloudStatus: string,
      rainProbability: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWeatherSubscription = {
  onCreateWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};

export type OnUpdateWeatherSubscription = {
  onUpdateWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};

export type OnDeleteWeatherSubscription = {
  onDeleteWeather:  {
    __typename: "Weather",
    id: string,
    city: string,
    lastUpdate: string,
    temperature: string,
    cloudStatus: string,
    rainProbability: number,
  } | null,
};
