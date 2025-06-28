import { useEffect } from 'react'
import {
  useAppDispatch,
  useAppSelector,
  useTagColorClass,
} from '../Hooks/hooks'
import { getPostById } from '../Redux/Slices/blogPostSlice'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const post = useAppSelector((state) => state.blogPost.postById)
  const { author, date, title, coverImage, sections, tags } = post
  const tagColor = (item: string) => {
    return useTagColorClass(item)
  }
  useEffect(() => {
    id && dispatch(getPostById(id))
  }, [id])
  return (
    <div>
      <div className="flex h-full flex-col gap-y-8 pb-8">
        <p className="text-sm font-semibold text-[#7F56D9]">
          {`${author} • ${date}`}
        </p>
        <div className="flex w-full">
          <p className="text-4xl font-bold">{title}</p>
        </div>
        <img src={coverImage} className="aspect-[1.9] size-full object-cover" />
      </div>

      <div className="flex h-full flex-col gap-y-3">
        <div className="flex flex-col gap-4 pb-6">
          {sections.map((item, idx) => {
            if (item.type === 'p')
              return (
                <p
                  key={idx}
                  className="font-normal text-[#667085] dark:text-[#C0C5D0]"
                >
                  {item.content}
                </p>
              )
            else if (item.type === 'h1')
              return (
                <p
                  key={idx}
                  className="text-lg font-bold text-[#667085] dark:text-[#C0C5D0]"
                >
                  {item.content}
                </p>
              )
            else
              return (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.imageUrl}
                    className="aspect-[1.9] size-full object-fill"
                  />
                  <p className="w-1/2 text-center font-normal text-[#667085] dark:text-[#C0C5D0]">
                    {item.content}
                  </p>
                </div>
              )
          })}
        </div>
        <div className="mt-auto flex gap-2">
          {tags.map((item, index) => {
            const tag = tagColor(item)
            return (
              <div
                key={index}
                className={`rounded-2xl px-2.5 py-0.5 text-sm ${tag.bg} ${tag.text}`}
              >
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Post
