import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages
import Delete from './Pages/Delete/Delete.jsx';
import NavBar from './Layout/Navbar/NavBar.jsx';
import Home from './Pages/Home/Home.jsx';
import Create from './Pages/Create/Create.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <NavBar />
          <Home />
        </>
      } />
      <Route path='/Create' element={
        <>
          <NavBar />
          <Create />
        </>
      } />
      <Route path='/Delete/:id' element={
        <>
          <NavBar />
          <Delete />
        </>
      } />
    </Routes>
  );
}

export default App;
