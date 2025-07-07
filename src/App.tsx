import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  const theme = localStorage.getItem('theme') ?? 'light'
  document.documentElement.classList.toggle('dark', theme === 'dark')

  return (
    <div className="dark:bg-dark text-myprimary transition-colors duration-500 ease-in-out dark:text-white">
      <ScrollToTop />

      <div className="laptop:mx-28 laptop:py-8 mx-5 flex min-h-screen flex-col py-5">
        <Navbar
          name="Aghyad Fanous"
          items={[
            { link: '/', content: 'Blog' },
            { link: '/projects', content: 'Projects' },
            { link: '/about', content: 'About' },
            { link: '/newsletter', content: 'NewsLetter' },
          ]}
        />
        <Outlet />
        <Footer
          copyrights="© 2023"
          items={[
            { link: 'twitter.com', content: 'Twitter' },
            { link: 'linkedin.com', content: 'LinkedIn' },
            { link: 'mailto:example@example.com', content: 'Email' },
            { link: '#', content: 'RSS feed' },
            { link: '#', content: 'Add to Feedly' },
          ]}
        />
      </div>
    </div>
  )
}

export default App
