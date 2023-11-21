import styles from './Header404.module.css'

import React from 'react'

import Link from 'next/link'

function Header404() {
  return (
    <section className={styles.container}>
      <div className={`section-contain margintop-lg ${styles.content}`}>
        <h1 className={styles.h1}>404</h1>
        <h2 className={styles.h2}>Lost in space?</h2>
        <Link href='/'>
          <a>
            <button className=''>Go back home</button>
          </a>
        </Link>
        <br />
      </div>
      <div className={`hover ${styles.floating}`}></div>
    </section>
  )
}

export default Header404
