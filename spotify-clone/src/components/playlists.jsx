import React ,{useEffect}from 'react'
import styles from './playlist.module.css'
import { useStateProvider } from '../utils/StateProvider'
export default function Playlists() {
    const [{token,dispatch}] =useStateProvider()
    useEffect(()=>{
//         http GET https://api.spotify.com/v1/me
//   Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'
        const getPlaylist = async ()=>{
            try{
            const res = await fetch(`https://api.spotify.com/v1/me`,
            {
                headers:{
                    'Authorization':"Bearer "+token,
                    "Content-Type":"application/json",
                },
                
            });
        // const resp = await res.json();
        // console.log("res",resp);
        }
        catch(e){
            console.log("er",e)
        }

        }
        getPlaylist()
    },[token,dispatch])
  return (
    <div className={styles['title']}>Playlists</div>
  )
}
