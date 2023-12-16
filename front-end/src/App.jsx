import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './pages/Home'
import Bookings from './pages/Bookings'
import Rooms from './pages/Rooms'
import Clients from './pages/Clients'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main-flex flex">
          <div className="left w-52">
            <Nav />
          </div>
          <div className="right w-full">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookings" element={<Bookings/>} />
              <Route path="/rooms" element={<Rooms/>} />
              <Route path="/clients" element={<Clients/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
