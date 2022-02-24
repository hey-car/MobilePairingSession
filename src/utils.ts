import {RootState} from './store/store';

export interface FetchDogsFromApi {
  apiURL?: string;
  limit?: number;
  page?: number;
  order?: 'Desc' | 'Asc';
}

const URL = 'https://api.thedogapi.com/v1/images/search?';
const REACT_APP_DOG_API_KEY = '';

export const fetchDogsFromApi = async ({
  apiURL = URL,
  limit = 5,
  page = 10,
  order = 'Desc',
}: FetchDogsFromApi) => {
  try {
    const response = await fetch(
      `${apiURL}limit=${limit}&page=${page}&order=${order}}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': REACT_APP_DOG_API_KEY,
        },
      },
    );
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getRootStateMock = (): RootState => ({counter: {value: 0}});
