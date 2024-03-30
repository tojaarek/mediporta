import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api.stackexchange.com/2.3';

const notify = (message) => toast(message);

export const getTags = createAsyncThunk(
  'TAGS/GET',
  async ({ order, sort, pageSize, page }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/tags?order=${order}&sort=${sort}&pagesize=${pageSize}&page=${page}&site=stackoverflow&filter=!nNPvSNVZJS`,
      );
      return data;
    } catch (error) {
      const errMessage = error.response.data.error_message;
      if (errMessage) {
        notify(errMessage);
      } else {
        notify('Something went wrong...');
      }
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
