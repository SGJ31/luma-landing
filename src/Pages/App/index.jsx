import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import ExploreEvents from '../ExploreEvents'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/explore-events', element: <ExploreEvents /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {  
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
