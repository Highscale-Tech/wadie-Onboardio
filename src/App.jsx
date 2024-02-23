import Login from './components/Login'



import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Login/>} />
      
      <Route path="/home" element={<Home/>} />
      </Routes>
    
  )
}

export default App
