import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.tsx'
import Blog from './Pages/Blog/Blog.tsx'
import NewsLetters from './Pages/NewsLetters/NewsLetters.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import Post from './Components/Post.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          {
            path: 'post/:id',
            element: <Post />,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsLetters />,
      },
      {
        path: 'projects',
        element: '',
      },
      {
        path: 'about',
        element: '',
      },
    ],
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
