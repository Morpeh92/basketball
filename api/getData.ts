import { Meta, Player } from './types';
import axios from 'axios';

interface Response {
  data: Player[];
  meta: Meta;
}

class GetDataApi {
  async getData(url: string, per_page: number) {
    try {
      const response = await axios.get<Response>(url, {
        params: {
          page: 1,
          per_page: per_page,
        },
        headers: {
          'X-RapidAPI-Key':
            '584d64895fmshf19cae08c935ee2p1fbba1jsnd45ebd1c69ca',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        },
      });
      return response.data.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }
}

export const getDataApi = new GetDataApi();
