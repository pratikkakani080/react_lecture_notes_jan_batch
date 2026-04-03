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
import { Provider } from 'react-redux';
import { store } from './config/store';

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
  const loggedInEmail = localStorage.getItem('loggedInEmail')

  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NewContext value={{ users, setUsers }}>
            <MyContext value={{ isCheck, setIsCheck, test: 'test' }}>
              <div>
                {/* <a href='/blog'>to blog</a> */}
                {loggedInEmail ? (
                  <a onClick={() => localStorage.removeItem('loggedInEmail')}>Logout</a>
                ) : (
                  <>
                    <a href='/login'>to Login</a>{"     "}
                    <a href='/register'>to Register</a>
                  </>
                )}
              </div>
              <ToastContainer />
              <RouterProvider router={router} />
            </MyContext>

          </NewContext>
        </ApolloProvider>
      </Provider>
    </>
  )
}

export default App
