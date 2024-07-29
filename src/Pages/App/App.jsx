import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Events from '../Events'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import { AuthProvider } from '../../context/AuthContext'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/Events', element: <Events /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {  
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
