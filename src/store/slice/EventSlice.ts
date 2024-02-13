import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HomeStats, ILanguage} from '../app.config.interface';

type SliceState = {homeStatsConfig: HomeStats | null};
const initialState: SliceState = {homeStatsConfig: null};
const eventSlice = createSlice({
  name: 'Event',
  initialState,
  reducers: {
    setHomeStats: (state, action: PayloadAction<HomeStats>) => {
      return {
        ...state,
        appConfig: action.payload,
      };
    },
    setEventExit: (state, action: PayloadAction<HomeStats>) => {
      return {
        ...state,
        appConfig: action.payload,
      };
    },
  },
});

export default eventSlice;
