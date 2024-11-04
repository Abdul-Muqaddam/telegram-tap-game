import './App.css'
import { useEffect } from 'react';
function App() {
  const telegram=window.Telegram.Webapp;
useEffect(()=>{
    telegram.ready();
},[])

  return (
    <>
    </>
  )
}

export default App
