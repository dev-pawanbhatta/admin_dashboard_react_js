import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

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
      <div className='main'>
        <Sidebar />
        <div className='content' id='content'>
          <Navbar />
          <div className='element container-fluid' onClick={hideSidebar}>
            <Routes>
              <Route path='/' element={'home'} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
