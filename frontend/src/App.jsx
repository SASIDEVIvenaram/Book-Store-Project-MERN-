import './App.css'
import {Routes,Route} from 'react-router-dom'


// For Layout
import NavBar from './Layout/Navbar/NavBar.jsx'
// For pages
import Home from './Pages/Home/Home.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={[<NavBar/>,<Home />]}/>
    </Routes>
    </>
  )
}

export default App
