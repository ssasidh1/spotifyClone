import './App.css';
import { useEffect } from 'react';
import Login from './components/login';
import { useStateProvider } from './utils/StateProvider';
import { reducersType } from './utils/constants';
import Spotify from './components/spotify';
function App() {
  console.log("t")
  const [{token},dispatch] = useStateProvider();
  
  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split('&')[0].split('=')[1];
      if(token)
      dispatch({type:reducersType.SET_TOKEN,token:token})
    }
  },[token,dispatch])
  return (
    <div>
      {token ? <Spotify />: <Login />}
    </div>
  );
}

export default App;
