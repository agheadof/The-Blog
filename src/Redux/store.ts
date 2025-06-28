import { configureStore } from '@reduxjs/toolkit'
import blogPostReducer from './Slices/blogPostSlice'
import themeReducer from './Slices/themeSlice'
import paginationReducer from './Slices/PaginationSlice'

export const store = configureStore({
  reducer: {
    blogPost: blogPostReducer,
    pagination: paginationReducer,
    theme: themeReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
