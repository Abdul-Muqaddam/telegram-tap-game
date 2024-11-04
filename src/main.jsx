import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Hero from './component/hero.jsx'
import Loading from './component/loading.jsx'
import Improve from './component/improve.jsx'
import City from './component/city.jsx'
import Friends from './component/friends.jsx'
import Quests from './component/quest.jsx'
// import { UserProvider } from './component/context/context.jsx'



const router=createBrowserRouter(
  [
    {
        path:"/hero",
        element:<Hero/>   
    },
    {
      path:"/",
      element:<Loading/>
    },
    {
      path:"/improve",
      element:<Improve/>
    },
    {
      path:"/city",
      element:<City/>
    },
    {
      path:"/friends",
      element:<Friends/>
    },
    {
      path:"/quests",
      element:<Quests/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <UserProvider>
    <RouterProvider router={router}/>
  // </UserProvider>
    // {/* <App /> */}
  // </StrictMode>,
)
