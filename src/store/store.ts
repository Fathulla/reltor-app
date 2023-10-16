import { configureStore } from '@reduxjs/toolkit';
import { autocompleteApi } from './api/autocompleteApi'
import userSlice from './userSlice';
import { mortgageApi } from './api/mortgegeApi';
import { financeRateApi } from './api/finanseRateApi';
import { agentsApi } from './api/agentsApi';
import { propertiesApi } from './api/propertiesApi';



export const store = configureStore({
  reducer: {
    userSlice,
    [autocompleteApi.reducerPath]: autocompleteApi.reducer,
    [mortgageApi.reducerPath]: mortgageApi.reducer,
    [financeRateApi.reducerPath]: financeRateApi.reducer,
    [agentsApi.reducerPath]: agentsApi.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    // Другие редюсеры вашего приложения
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      autocompleteApi.middleware,
      mortgageApi.middleware,
      financeRateApi.middleware,
      agentsApi.middleware,
      propertiesApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState