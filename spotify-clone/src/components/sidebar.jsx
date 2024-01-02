import React from 'react'
import styles from './sidebar.module.css'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlists from './playlists'

export default function Sidebar() {
  return (
    <div className={styles['container']}>
        <div className={styles['sidebar-links']}>
            <div className='links'>
                <img className = {styles['logo']} src = "./spotify_white.png" alt="logo"/>
            </div>
            <ul className={styles['ulist']}>
                <li>
                    <MdHomeFilled/>
                    <span>Home</span>
                </li>
                <li>
                    <MdSearch/>
                    <span>Search</span>
                </li>
                <li>
                    <IoLibrary/>
                    <span>Your Library</span>
                </li>
            </ul>
            <Playlists/>
        </div>
    </div>
    
  )
}
