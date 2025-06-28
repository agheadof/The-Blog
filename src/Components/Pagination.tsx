import { useEffect } from 'react'
import { useAppDispatch, useAppSelector, useTheme } from '../Hooks/hooks'
import {
  getPaginationNumber,
  goToNextGroup,
  goToPreviousGroup,
  setCurrentPage,
} from '../Redux/Slices/PaginationSlice'
import leftArrow from '../assets/img/leftArrow.svg'
import darkLeftArrow from '../assets/img/darkLeftArrow.svg'
import rightArrow from '../assets/img/rightArrow.svg'
import darkRightArrow from '../assets/img/darkRightArrow.svg'
import { getcurrentPagePosts } from '../Redux/Slices/blogPostSlice'

const Pagination = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const pageCount = useAppSelector((state) => state.pagination.pageCount)
  const currentPage = useAppSelector((state) => state.pagination.currentPage)
  const totalPages = useAppSelector((state) => state.pagination.totalPages)

  const hanlePrev = () => {
    let prev = currentPage - 1
    if (prev >= 1) {
      dispatch(setCurrentPage(prev))
      dispatch(getcurrentPagePosts(prev))
    }
  }
  const hanleNext = () => {
    let next = currentPage + 1
    if (next <= totalPages) {
      dispatch(setCurrentPage(next))
      dispatch(getcurrentPagePosts(next))
    }
  }

  useEffect(() => {
    dispatch(getPaginationNumber())
    dispatch(getcurrentPagePosts(currentPage))
  }, [])

  return (
    <div className="tablet:flex-row flex w-full flex-col items-center justify-between gap-5 pb-12 text-sm text-[#667085] dark:text-[#EFEFEF]">
      <div>
        <button className="flex cursor-pointer gap-2" onClick={hanlePrev}>
          <img src={theme === 'dark' ? darkLeftArrow : leftArrow} alt="" />
          Previous
        </button>
      </div>
      <div className="flex">
        {pageCount.map((num, i) =>
          num === '...' ? (
            <button
              className="cursor-pointer rounded-lg px-4 py-2.5"
              key={i}
              onClick={() =>
                i < 3
                  ? dispatch(goToPreviousGroup())
                  : dispatch(goToNextGroup())
              }
            >
              ...
            </button>
          ) : (
            <button
              key={i}
              onClick={() => {
                dispatch(setCurrentPage(+num))
                dispatch(getcurrentPagePosts(+num))
              }}
              className={
                currentPage === +num
                  ? 'dark:text-myprimary cursor-pointer rounded-lg bg-[#c9c6cf63] px-4 py-2.5 font-medium text-[#7F56D9] dark:bg-[#F9F5FF]'
                  : 'cursor-pointer rounded-lg px-4 py-2.5 hover:font-bold hover:underline'
              }
            >
              {num}
            </button>
          ),
        )}
      </div>
      <div>
        <button className="flex cursor-pointer gap-2" onClick={hanleNext}>
          Next
          <img src={theme === 'dark' ? darkRightArrow : rightArrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
