import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Header from './components/Header'



function App() {
  return (
    <>
      <Router>
      <Header /> 

          <Routes>
           
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            
          </Routes>

      </Router>
      
    </>
  )
}

export default App