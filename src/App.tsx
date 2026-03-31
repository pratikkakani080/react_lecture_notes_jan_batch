import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Home from './modules/home';
import Blogs from './modules/blogs';
import BlogDetails from './modules/blogs/blogDetails';
import Register from './modules/register';
import { ToastContainer } from 'react-toastify';
import Login from './modules/login';
import GSM from './modules/GSM';
import Users from './modules/users';
import MyContext from './config/myContext';
import { useState } from 'react';
import NewContext from './config/newContext';
import Cal from './modules/pi/cal';
import { ApolloProvider } from '@apollo/client/react';
import client from './config/graphQl';
import GraphQl from './modules/GraphQl';

function App() {
  const [isCheck, setIsCheck] = useState<any>(false)
  const [users, setUsers] = useState<any>([])
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/blog", Component: Blogs },
    { path: "/blog-details/:id/:category", Component: BlogDetails },
    { path: "/register", Component: Register },
    { path: "/login", Component: Login },
    { path: "/gsm", Component: GSM },
    { path: "/users", Component: Users },
    { path: "/pi", Component: Cal },
    { path: "/graphql", Component: GraphQl },
  ]);

  return (
    <>
      <ApolloProvider client={client}>
        <NewContext value={{ users, setUsers }}>
          <MyContext value={{ isCheck, setIsCheck, test: 'test' }}>
            <ToastContainer />
            <RouterProvider router={router} />
          </MyContext>

        </NewContext>
      </ApolloProvider>
    </>
  )
}

export default App
