import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../Redux/store'
import { setTheme } from '../Redux/Slices/themeSlice'

export const useTheme = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.value)

  const toggleTheme = (mode: 'light' | 'dark') => {
    dispatch(setTheme(mode))
  }

  return { theme, toggleTheme }
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useTagColorClass = (item: string) => {
  let color = { bg: 'bg-gray-200', text: 'text-[#1a1a1a]' }

  switch (item) {
    case 'Design':
    case 'Leadership':
      color = { bg: 'bg-[#F9F5FF]', text: 'text-[#6941C6]' }
      break
    case 'Research':
      color = { bg: 'bg-[#EEF4FF]', text: 'text-[#3538CD]' }
      break
    case 'Presentation':
    case 'Interface':
    case 'Tools':
      color = { bg: 'bg-[#FDF2FA]', text: 'text-[#C11574]' }
      break
    case 'Management':
      color = { bg: 'bg-[#F8F9FC]', text: 'text-[#363F72]' }
      break
    case 'Product':
      color = { bg: 'bg-[#F0F9FF]', text: 'text-[#026AA2]' }
      break
    case 'Frameworks':
      color = { bg: 'bg-[#FFF6ED]', text: 'text-[#C4320A]' }
      break
    case 'Software Development':
      color = { bg: 'bg-[#ECFDF3]', text: 'text-[#027A48]' }
      break
    case 'SaaS':
      color = { bg: 'bg-[#FFF1F3]', text: 'text-[#C01048]' }
      break
  }

  return color
}
