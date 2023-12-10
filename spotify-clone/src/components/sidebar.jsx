import React from 'react'
import styles from './sidebar.module.css'
export default function Sidebar() {
  return (
    <div className={styles['container']}>
        <div className={styles['sidebar-links']}>
            <div className='links'>
                <img className = {styles['logo']} src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo"/>
            </div>
            <ul className={styles['ulist']}>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>Search</span>
                </li>
                <li>
                    <span>Your Library</span>
                </li>
            </ul>
        </div>
    </div>
    
  )
}
