import * as React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from './styles.module.scss'
import logo from '../../img/logo.png'

function Layout({ children }) {
  return (
    <main className="text-center">
      <a
        className={styles.link}
        href="https://www.developerhandbook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.image} src={logo} alt="DeveloperHandbook.com" />
      </a>
      {children}
    </main>
  )
}

export default withStyles(styles)(Layout)
