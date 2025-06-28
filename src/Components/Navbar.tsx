import { Link, NavLink } from 'react-router-dom'
import lightMoon from '../assets/img/light-moon.svg'
import darkSun from '../assets/img/dark-sun.svg'
import sun from '../assets/img/sun.svg'
import moon from '../assets/img/moon.svg'
import darkMenu from '../assets/img/dark-menu.svg'
import lightMenu from '../assets/img/light-menu.svg'
import darkX from '../assets/img/dark-x.svg'
import lightX from '../assets/img/light-x.svg'
import { useState } from 'react'
import { useTheme } from '../Hooks/hooks'
type Item = {
  link: string
  content: string
}

interface NavItems {
  name: string
  items: Item[]
}
const Navbar = ({ items, name }: NavItems) => {
  const [showNav, setShowNav] = useState<boolean>(false)
  const [closing, setClosing] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="mb-8 flex justify-between py-5">
        <div
          className={`tablet:flex laptop:text-xl text-lg font-semibold ${showNav ? 'hidden' : ''}`}
        >
          <Link
            to={'/'}
            className="my-auto transition-all duration-200 ease-in-out hover:text-2xl"
          >
            {name}
          </Link>
        </div>

        <div className="tablet:flex hidden items-center gap-3.5">
          {items.map((item, index) => {
            return (
              <div key={index} className="p-2">
                <NavLink
                  to={item.link}
                  className={({ isActive }) => {
                    return `laptop:text-xl text-lg transition-all duration-50 ease-in hover:border-b-1 hover:pb-1.5 ${isActive && 'border-b-1 pb-1.5 font-bold'}`
                  }}
                >
                  {item.content}
                </NavLink>
              </div>
            )
          })}
          <div className="bg-dark flex gap-4 rounded-[29px] px-4 py-2 dark:bg-white">
            <button
              className="cursor-pointer"
              onClick={() => toggleTheme('light')}
            >
              <img src={theme === 'dark' ? darkSun : sun} alt="sun icon" />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => toggleTheme('dark')}
            >
              <img src={theme === 'dark' ? moon : lightMoon} alt="moon icon" />
            </button>
          </div>
        </div>
        {!showNav && (
          <div className="tablet:hidden flex">
            <button className="cursor-pointer" onClick={() => setShowNav(true)}>
              <img
                src={theme === 'dark' ? darkMenu : lightMenu}
                alt="menu icon"
              />
            </button>
          </div>
        )}
        {(showNav || closing) && (
          <div
            className={`tablet:hidden fixed inset-0 z-50 flex flex-col items-center justify-center ${showNav ? 'animate-slide-in' : 'animate-slide-out'} dark:bg-dark bg-white transition-colors duration-500 ease-in-out`}
            onAnimationEnd={() => {
              if (!showNav) setClosing(false)
            }}
          >
            <div className="tablet:hidden flex w-full flex-col items-center">
              <div className="laptop:text-xl mb-14 text-lg font-semibold">
                <Link
                  onClick={() => {
                    setShowNav(false)
                    setClosing(true)
                  }}
                  to={'/'}
                  className="my-auto transition-all duration-200 ease-in-out hover:text-2xl"
                >
                  {' '}
                  {name}
                </Link>
              </div>

              {items.map((item, index) => {
                return (
                  <div key={index} className="p-2.5">
                    <NavLink
                      to={item.link}
                      onClick={() => {
                        setShowNav(false)
                        setClosing(true)
                      }}
                      className={({ isActive }) => {
                        return `laptop:text-xl text-lg transition-all duration-50 ease-in hover:border-b-1 hover:pb-1.5 ${isActive && 'border-b-1 pb-1.5 font-bold'}`
                      }}
                    >
                      {item.content}
                    </NavLink>
                  </div>
                )
              })}
              <div className="bg-dark mt-2.5 flex gap-4 rounded-[29px] px-4 py-2 dark:bg-white">
                <button
                  className="cursor-pointer"
                  onClick={() => toggleTheme('light')}
                >
                  <img src={theme == 'dark' ? darkSun : sun} alt="sun icon" />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => toggleTheme('dark')}
                >
                  <img
                    src={theme === 'dark' ? moon : lightMoon}
                    alt="moon icon"
                  />
                </button>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <button
                className="cursor-pointer"
                onClick={() => {
                  setShowNav(false)
                  setClosing(true)
                }}
              >
                <img src={theme === 'dark' ? darkX : lightX} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
