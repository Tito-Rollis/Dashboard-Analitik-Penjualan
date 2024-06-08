import { DataSales } from '@/types/data/dataTypes';
import axios, { AxiosResponse } from 'axios';

const jsonServer = 'http://localhost:3000';

export const GET_DATA = () => axios.get(`${jsonServer}/sales`).then((e): AxiosResponse<DataSales[]> => e);
