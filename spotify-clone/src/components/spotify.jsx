import React from 'react'
import Footer from './footer'
import Sidebar from './sidebar'
import Body from './body'
import Navbar from './navbar'
import styles from './spotify.module.css'
export default function Spotify() {
  return (
    <div className={styles['container']}>
        <div className={styles['spotify_body']}>
            <Sidebar />
            <div className={styles['body']}>
                <Navbar />
                <div className={styles['body_contents']}>
                    <Body />
                </div>
            </div>
        </div>
        <div className={styles['footer']}>
            <Footer />
        </div>
    </div>
  )
}
