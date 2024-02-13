import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILanguage } from "../app.config.interface";
import { ConsoleLogger } from "../../services/logger.service";

type SliceState = { passCodeAuthConfig: boolean };

const initialState: SliceState = { passCodeAuthConfig: false };

const passCodeSlice = createSlice({
  name: "passCodAuth",
  initialState,
  reducers: {
    setPassCodeAuthicate: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        passCodeAuthConfig: action.payload,
      };
    },
  },
});

export default passCodeSlice;
