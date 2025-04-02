import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewConfession from './NewConfession.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './About.jsx'
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/New",
    element: <NewConfession/>
  }, 
  {
    path: "/About",
    element: <About/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
