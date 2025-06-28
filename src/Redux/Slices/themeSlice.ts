// src/Redux/slices/themeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark'

interface ThemeState {
  value: Theme
}

const initialState: ThemeState = {
  value: (localStorage.getItem('theme') as Theme) ?? 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload
      localStorage.setItem('theme', action.payload)

      if (action.payload === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
