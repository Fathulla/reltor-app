import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { agentsApi } from "./api/agentsApi";
import { propertiesApi } from "./api/propertiesApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [agentsApi.reducerPath]: agentsApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    // Другие редюсеры вашего приложения
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      agentsApi.middleware,
      propertiesApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
