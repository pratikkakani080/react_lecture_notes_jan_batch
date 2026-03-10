import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Home from './modules/home';
import Blogs from './modules/blogs';
import BlogDetails from './modules/blogs/blogDetails';
import ContactUs from './modules/contactus';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/blog", Component: Blogs },
    { path: "/blog-details/:id/:category", Component: BlogDetails },
    { path: "/contactus", Component: ContactUs },
  ]);

  return (
    <>
    <div>
      <a href='/blog'>to blog</a>
    </div>
     <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
