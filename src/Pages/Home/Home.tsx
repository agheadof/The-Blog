import Card from '../../Components/Card'
import { getRecentPosts } from '../../Redux/Slices/blogPostSlice'
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks'
import { useEffect } from 'react'
import Pagination from '../../Components/Pagination'

const Home = () => {
  const recentPostCards = useAppSelector((state) => state.blogPost.recentPosts)
  const currentPageCards = useAppSelector(
    (state) => state.blogPost.currentPagePosts,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRecentPosts(4))
  }, [])

  return (
    <div>
      <p className="laptop:text-[243.8px] tablet:text-[160px] border-y-2 border-[#00000057] text-center text-7xl font-bold dark:border-white">
        THE BLOG
      </p>
      <div className="pt-8">
        <p className="pb-8 text-2xl font-semibold">Recent blog posts</p>
        {recentPostCards.length > 0 && (
          <div className="laptop:grid-cols-2 grid grid-cols-1 gap-8">
            <div className="laptop:col-span-1 col-span-full">
              <Card
                id={recentPostCards[0].id}
                key={recentPostCards[0].id}
                author={recentPostCards[0].author}
                brief={recentPostCards[0].brief}
                cover={recentPostCards[0].coverImage}
                date={recentPostCards[0].date}
                title={recentPostCards[0].title}
                tags={recentPostCards[0].tags}
                col={1}
                aspectClass={'tablet:aspect-[3.377] laptop:aspect-[2.59]'}
              />
            </div>
            <div className="laptop:col-span-1 col-span-full grid gap-8">
              {recentPostCards.slice(1, 3).map((post) => {
                return (
                  <Card
                    id={post.id}
                    key={post.id}
                    author={post.author}
                    brief={post.brief}
                    cover={post.coverImage}
                    date={post.date}
                    title={post.title}
                    tags={post.tags}
                    col={2}
                  />
                )
              })}
            </div>
            <div className="laptop:col-span-2 laptop:flex hidden">
              <Card
                id={recentPostCards[3].id}
                key={recentPostCards[3].id}
                author={recentPostCards[3].author}
                brief={recentPostCards[3].brief}
                cover={recentPostCards[3].coverImage}
                date={recentPostCards[3].date}
                title={recentPostCards[3].title}
                tags={recentPostCards[3].tags}
                col={2}
                aspectClass={'laptop:aspect-[2.4]'}
              />
            </div>
            <div className="laptop:hidden col-span-full">
              <Card
                id={recentPostCards[3].id}
                key={recentPostCards[3].id}
                author={recentPostCards[3].author}
                brief={recentPostCards[3].brief}
                cover={recentPostCards[3].coverImage}
                date={recentPostCards[3].date}
                title={recentPostCards[3].title}
                tags={recentPostCards[3].tags}
                col={1}
                aspectClass={'tablet:aspect-[3.377]'}
              />
            </div>
          </div>
        )}
        <div className="pt-8">
          <p className="pb-8 text-2xl font-semibold">All blog posts</p>
        </div>

        <div className="tablet:grid-cols-2 laptop:grid-cols-3 tablet:gap-x-4 tablet:gap-y-6 laptop:gap-x-8 laptop:gap-y-12 grid grid-cols-1 gap-4">
          {currentPageCards.map((post) => {
            return (
              <Card
                id={post.id}
                key={post.id}
                author={post.author}
                brief={post.brief}
                cover={post.coverImage}
                date={post.date}
                title={post.title}
                tags={post.tags}
                col={1}
              />
            )
          })}
        </div>

        <div className="pt-8">
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Home
