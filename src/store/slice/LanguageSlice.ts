import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILanguage } from "../app.config.interface";
import { ConsoleLogger } from "../../services/logger.service";

type SliceState = { languageConfig: ILanguage | null };
const initialState: SliceState = { languageConfig: null };
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<ILanguage>) => {
      ConsoleLogger.log("Slected Language ----> ", action);
      return {
        ...state,
        languageConfig: action.payload,
      };
    },
  },
});

export default languageSlice;
