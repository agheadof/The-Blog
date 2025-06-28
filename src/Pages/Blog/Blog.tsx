import { Outlet } from 'react-router-dom'
import NewsLetterSection from '../../Components/NewsLetterSection'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import Card from '../../Components/Card'
import { getRecentPosts } from '../../Redux/Slices/blogPostSlice'
import { useEffect } from 'react'

const Blog = () => {
  const recentPosts = useAppSelector((state) => state.blogPost.recentPosts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRecentPosts(9))
  }, [])
  return (
    <div className="tablet:grid-cols-2 laptop:grid-cols-3 grid grid-cols-1 gap-8 pt-8">
      <div className="tablet:order-1 order-2 col-span-1 flex flex-col gap-8 pb-[72px]">
        <p className="text-2xl font-semibold">Recent blog posts</p>
        {recentPosts.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              author={item.author}
              date={item.date}
              title={item.title}
              cover={item.coverImage}
              brief={item.brief}
              tags={item.tags}
              col={1}
            />
          )
        })}
      </div>
      <div className="laptop:col-span-2 tablet:order-2 order-1 col-span-1">
        <Outlet />
      </div>
      <div className="order-3 col-span-2 col-start-2">
        <NewsLetterSection />
      </div>
    </div>
  )
}

export default Blog
