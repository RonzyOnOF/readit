import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { PostPage } from '../src/pages/PostPage';


export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path='post/:id' element={ <PostPage /> } />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}