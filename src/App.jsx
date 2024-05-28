import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

  return (
    <div className='App'>
      <h1>Mini Blog</h1>
      <BrowserRouter>
        <div className='containor'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
