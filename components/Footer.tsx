import * as React from 'react'
import { FaBookmark, FaHome, FaUserAstronaut } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <Tippy content='Home'>
        <a
          className={styles.linkedin}
          href={`https://www.mariaruocco.com`}
          title={`Borja Soler | Website`}
        >
          <FaHome />
        </a>
      </Tippy>
      <Tippy content='About me'>
        <a
          className={styles.linkedin}
          href={`https://www.mariaruocco.com/about`}
          title={`About me`}
        >
          <FaUserAstronaut />
        </a>
      </Tippy>
      <Tippy content='Bookmarks'>
        <a
          className={styles.linkedin}
          href={`https://www.mariaruocco.com/bookmarks`}
          title={`Bookmarks`}
        >
          <FaBookmark />
        </a>
      </Tippy>
      <hr className='vertical-bar' />

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}
    </footer>
  )
}
