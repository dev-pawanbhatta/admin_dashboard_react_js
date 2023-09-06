import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';

function App() {

  document.title = "Admin Dashboard"

  const hideSidebar = () => {
    const width = window.innerWidth;
    if (width <= 800) {
      const sidebar = document.getElementById('sidebar')
      const content = document.getElementById('content')
      sidebar.classList.add('hidden')
      content.classList.toggle('visible')
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element="Login" />
        <Route path='*' element={(
          <div className='main'>
            <Sidebar />
            <div className='content' id='content'>
              <Navbar />
              <div className='element' onClick={hideSidebar}>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                </Routes>
              </div>
              <footer className='p-2 text-center text-dark' >
                <small>Copyright © 2023. Designed and Developed by <Link target='_blank' to={'https://pawanrajbhatta.com.np'}><b>Pawan Bhatta</b></Link></small>
              </footer>
            </div>
          </div>
        )} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
