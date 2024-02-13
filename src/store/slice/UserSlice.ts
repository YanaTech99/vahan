import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppInitialConfig, ILanguage} from '../app.config.interface';

type SliceState = {appConfig: AppInitialConfig | null | ILanguage};
const initialState: SliceState = {appConfig: null};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state, action: PayloadAction<number>) => state + action.payload,
    setUser: (state, action: PayloadAction<AppInitialConfig>) => {
      return {
        ...state,
        appConfig: action.payload,
      };
    },
  },
});

export default userSlice;
