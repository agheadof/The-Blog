import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { allPosts } from '../data'
import type { Post, PostCard } from '../../interfaces/postsInterface'

interface BlogState {
  posts: Post[]
  postById: Post
  recentPosts: PostCard[]
  currentPagePosts: PostCard[]
}

const initialState: BlogState = {
  posts: allPosts,
  postById: allPosts?.[0],
  recentPosts: [],
  currentPagePosts: [],
}

const blogPostSlice = createSlice({
  name: 'blogPost',
  initialState,
  reducers: {
    getRecentPosts: (state, action: PayloadAction<number>) => {
      const cut = [...state.posts]
        .slice(-action.payload)
        .map(({ id, author, coverImage, date, tags, title, sections }) => ({
          id,
          author,
          coverImage,
          date,
          tags,
          title,
          brief: sections?.[0].content,
        }))
      state.recentPosts = cut
    },
    getcurrentPagePosts: (state, action: PayloadAction<number>) => {
      const start = (action.payload - 1) * 6
      const end = start + 6
      const currentPage = [...state.posts]
        .slice(start, end)
        .map(({ id, author, coverImage, date, tags, title, sections }) => ({
          id,
          author,
          coverImage,
          date,
          tags,
          title,
          brief: sections?.[0].content,
        }))
      state.currentPagePosts = currentPage
    },
    getPostById: (state, action: PayloadAction<string>) => {
      const post = state.posts.filter((post) => {
        return post.id === action.payload
      })
      state.postById = post[0]
    },
  },
})
export const { getRecentPosts, getcurrentPagePosts, getPostById } =
  blogPostSlice.actions
export default blogPostSlice.reducer
