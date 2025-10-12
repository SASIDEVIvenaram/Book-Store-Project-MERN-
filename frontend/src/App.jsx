import './App.css'
import {Routes,Route} from 'react-router-dom'

// For pages
import Home from './Pages/Home/Home.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
