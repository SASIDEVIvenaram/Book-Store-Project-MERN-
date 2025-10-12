import './App.css'
import {Routes,Route} from 'react-router-dom'


// For Layout
import NavBar from './Layout/Navbar/NavBar.jsx'
// For pages
import Home from './Pages/Home/Home.jsx'
import Create from './Pages/Create/Create.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={[<NavBar/>,<Home />]}/>
      <Route path='/Create' element={[<NavBar/>,<Create />]}/>
    </Routes>
    </>
  )
}

export default App
