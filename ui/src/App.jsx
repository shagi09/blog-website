import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Authors from './pages/Authors'
import CategoryPosts from './pages/CategoryPosts'
import CreatePost from './pages/CreatePost'
import DashBoard from './pages/DashBoard'
import DeletePost from './pages/DeletePost'
import EditPost from './pages/EditPost'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Logout from './pages/Logout'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import AuthorPosts from './pages/AuthorPosts'
import Layout from './components/Layout'
import RegisterLayout from './components/RegisterLayout'
import LogInLayout from './components/LogInLayout'


function App() {


  return (
    <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
  <Route path="posts/:id" element={<Layout><PostDetail /></Layout>} />
  <Route path="register" element={<RegisterLayout><Register /></RegisterLayout>} />
  <Route path="login" element={<LogInLayout><Login /></LogInLayout>} />
  <Route path="logout" element={<Layout><Logout /></Layout>} />
  <Route path="profile/:id" element={<Layout><UserProfile /></Layout>} />
  <Route path="authors" element={<Layout><Authors /></Layout>} />
  <Route path="create" element={<Layout><CreatePost /></Layout>} />
  <Route path="posts/categories/:category" element={<Layout><CategoryPosts /></Layout>} />
  <Route path="posts/users/:id" element={<Layout><AuthorPosts /></Layout>} />
  <Route path="myposts/:id" element={<Layout><DashBoard /></Layout>} />
  <Route path="posts/:id/edit" element={<Layout><EditPost /></Layout>} />
  <Route path="posts/:id/delete" element={<Layout><DeletePost /></Layout>} />
  <Route path="logout" element={<Layout><Logout /></Layout>} />
  <Route path="*" element={<Layout><ErrorPage /></Layout>} />




    


    </Routes>

  )
}

export default App
