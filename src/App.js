import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Route path='/' element={(
          <div className='main'>
            <Sidebar />
            <div className='content' id='content'>
              <Navbar />
              <div className='element container-fluid pt-3' onClick={hideSidebar}>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          </div>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
