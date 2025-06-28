import NewsLetterSection from '../../Components/NewsLetterSection'
import { useEffect } from 'react'
import { getRecentPosts } from '../../Redux/Slices/blogPostSlice'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import Card from '../../Components/Card'

const NewsLetters = () => {
  const dispatch = useAppDispatch()
  const recent = useAppSelector((state) => state.blogPost.recentPosts)

  useEffect(() => {
    dispatch(getRecentPosts(3))
  }, [])
  return (
    <div className="pb-8">
      <NewsLetterSection />

      <p className="pb-8 text-2xl font-semibold">All blog posts</p>
      <div className="laptop:grid-cols-3 tablet:grid-cols-2 grid grid-cols-1 gap-8">
        {recent.slice(0, 2).map((item) => {
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
        <div className="tablet:col-span-3 laptop:col-span-1 col-span-1">
          <Card
            key={recent[2].id}
            id={recent[2].id}
            author={recent[2].author}
            date={recent[2].date}
            title={recent[2].title}
            cover={recent[2].coverImage}
            brief={recent[2].brief}
            tags={recent[2].tags}
            aspectClass="min-tablet:aspect-[3.377] laptop:aspect-[1.6]"
            col={1}
          />
        </div>
      </div>
    </div>
  )
}

export default NewsLetters
