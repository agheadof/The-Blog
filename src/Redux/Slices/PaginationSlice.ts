import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { allPosts } from '../data'

interface PageState {
  pageCount: string[]
  totalPages: number
  currentGroupStart: number
  currentPage: number
}

const initialState: PageState = {
  pageCount: ['1'],
  totalPages: 1,
  currentGroupStart: 1,
  currentPage: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    getPaginationNumber: (state) => {
      const totalPages = Math.ceil(allPosts.length / 6)
      state.totalPages = totalPages
      state.currentGroupStart = 1

      if (totalPages <= 6) {
        state.pageCount = Array.from({ length: totalPages }, (_, i) =>
          (i + 1).toString(),
        )
      } else {
        const first = [1, 2, 3].map(String)
        const last = [totalPages - 2, totalPages - 1, totalPages].map(String)
        state.pageCount = [...first, '...', ...last]
      }
    },
    goToNextGroup: (state) => {
      const nextStart = state.currentGroupStart + 3
      const end = state.totalPages

      if (nextStart + 2 >= end - 2) {
        const lastNumbers = Array.from({ length: 6 }, (_, i) =>
          (end - 5 + i).toString(),
        )
        state.pageCount = ['...', ...lastNumbers]
      } else {
        const middle = [nextStart, nextStart + 1, nextStart + 2].map(String)
        const last = [end - 2, end - 1, end].map(String)
        state.pageCount = ['...', ...middle, '...', ...last]
        state.currentGroupStart = nextStart
      }
    },
    goToPreviousGroup: (state) => {
      const prevStart = Math.max(1, state.currentGroupStart - 3)
      const end = state.totalPages

      if (prevStart === 1) {
        const first = [1, 2, 3].map(String)
        const last = [end - 2, end - 1, end].map(String)
        state.pageCount = [...first, '...', ...last]
        state.currentGroupStart = 1
      } else {
        const middle = [prevStart, prevStart + 1, prevStart + 2].map(String)
        const last = [end - 2, end - 1, end].map(String)
        state.pageCount = ['...', ...middle, '...', ...last]
        state.currentGroupStart = prevStart
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload <= state.totalPages) {
        state.currentPage = action.payload
      }
    },
  },
})
export const {
  getPaginationNumber,
  goToNextGroup,
  goToPreviousGroup,
  setCurrentPage,
} = paginationSlice.actions
export default paginationSlice.reducer
