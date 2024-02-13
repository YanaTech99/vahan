import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import languageSlice from "./slice/LanguageSlice";
import OrganizerProfile from "../screens/SettingPageScreens/OrganizerProfileScreens/OrganizerProfile";
import OrganizerSlice from "./slice/OrganizersSlice";
import eventSlice from "./slice/EventSlice";
import PassCodeSlice from "./slice/PassCodeSlice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    language: languageSlice.reducer,
    organizerSlice: OrganizerSlice.reducer,
    homeStats: eventSlice.reducer,
    passcodeAuth: PassCodeSlice.reducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
