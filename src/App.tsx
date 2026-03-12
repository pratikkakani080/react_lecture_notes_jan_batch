import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Home from './modules/home';
import Blogs from './modules/blogs';
import BlogDetails from './modules/blogs/blogDetails';
import Register from './modules/register';
import { ToastContainer } from 'react-toastify';
import Login from './modules/login';

function App() {
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/blog", Component: Blogs },
    { path: "/blog-details/:id/:category", Component: BlogDetails },
    { path: "/register", Component: Register },
    { path: "/login", Component: Login },
  ]);
  const loggedInEmail = localStorage.getItem('loggedInEmail')

  return (
    <>
      <div>
        {/* <a href='/blog'>to blog</a> */}
        {loggedInEmail ? (
          <a onClick={() => localStorage.removeItem('loggedInEmail')}>Logout</a>
        ) : (
          <>
            <a href='/Login'>to Login</a>
            <a href='/Register'>to Register</a>
          </>
        )}
      </div>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
