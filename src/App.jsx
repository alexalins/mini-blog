import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useAuthentication from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
//context
import { AuthProvider } from './context/AuthContext'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
//componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className='App'>
      <AuthProvider value={user}>
        <BrowserRouter>
        <Navbar/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/about' element={<About/>}></Route>
            </Routes>
          </div>
        <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
