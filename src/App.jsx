import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';


export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}