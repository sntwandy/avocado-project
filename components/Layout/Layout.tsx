import React from 'react'
import Navbar from '@components/Navbar/Navbar'

// import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div /*className={styles.container}*/>
      <Navbar />
      {children}
      <footer>This is the footer</footer>

      <style jsx>
        {`
          div {
            background-color: salmon;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
