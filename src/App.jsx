import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
//componentes
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <h1>Mini Blog</h1>
      <BrowserRouter>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
