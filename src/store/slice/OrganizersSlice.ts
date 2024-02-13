import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OrganizersProfile} from '../app.config.interface';

type SliceState = {organizerConfig: OrganizersProfile | null};
const initialState: SliceState = {organizerConfig: null};

const organizerSlice = createSlice({
  name: 'organizerSlice',
  initialState,
  reducers: {
    setOrganizer: (state, action: PayloadAction<OrganizersProfile>) => {
      return {
        ...state,
        organizerConfig: action.payload,
      };
    },
  },
});

export default organizerSlice;
