import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/appSlice'
import searchSlice from './slice/searchSlice'
import chatSlice from './slice/chatSlice'
import videoListSlice from './slice/videoListSlice'

import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    videosList: videoListSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})