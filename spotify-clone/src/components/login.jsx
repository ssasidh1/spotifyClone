import React from 'react'
import styles from './login.module.css'
export default function Login() {
  const handleClick=()=>{
    const clientID = '1216390aa869478d9e0e7b1c745b91ab';
    const redirectURL = 'http://localhost:3000/';
    const apiURL= 'https://accounts.spotify.com/authorize';
    const scope = [
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position"
    ,"user-top-read",
    "user-read-recently-played",]
    window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
  }
  return (
    // 
    <div className={styles['login-main']}>
        <img src='./spotifyLogo.png' alt="Spotify" className={styles['spot-logo']}></img>
        <button className={styles['login-btn']} onClick={handleClick}>Connect</button>
    </div>
  )
}
