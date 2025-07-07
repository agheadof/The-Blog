import { Link } from 'react-router-dom'
import lightArrow from '../assets/img/arrowUpRight.svg'
import darkArrow from '../assets/img/darkArrowUpRight.svg'
import { useTagColorClass, useTheme } from '../Hooks/hooks'

interface Card {
  id: string
  col: 1 | 2
  aspectClass?: string
  author: string
  date: string
  title: string
  brief: string
  cover: string
  tags: string[]
}

const Card = ({
  id,
  col,
  author,
  date,
  title,
  brief,
  cover,
  tags,
  aspectClass,
}: Card) => {
  const { theme } = useTheme()
  const tagColor = (item: string) => {
    return useTagColorClass(item)
  }

  return (
    <Link to={`/blog/post/${id}`}>
      <div className="group relative transition-all duration-300">
        <div
          className={`absolute inset-0 z-10 opacity-0 transition-all duration-300 group-hover:bg-black/5 group-hover:opacity-100 dark:group-hover:bg-white/5`}
        ></div>

        <div
          className={`relative z-20 grid grid-cols-1 transition-all duration-300 group-hover:px-4 group-hover:py-2 hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-black/30 ${
            col == 2 ? 'tablet:grid-cols-2' : 'tablet:grid-cols-1'
          } gap-8`}
        >
          <div
            className={`relative my-auto aspect-[1.6] ${aspectClass} w-full`}
          >
            <img
              src={cover}
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          <div className="flex h-full flex-col gap-y-3">
            <p className="text-sm font-semibold text-[#7F56D9]">
              {`${author} • ${date}`}
            </p>
            <div className="flex w-full">
              <p className="text-2xl font-semibold">{title}</p>
              <img
                src={theme === 'dark' ? lightArrow : darkArrow}
                className="mb-auto ml-auto"
              />
            </div>
            <div className="pb-6">
              <p className="line-clamp-3 font-normal text-[#667085] dark:text-[#C0C5D0]">
                {brief}
              </p>
            </div>
            <div className="mt-auto flex gap-2">
              {tags &&
                tags.map((item, index) => {
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
      </div>
    </Link>
  )
}

export default Card
