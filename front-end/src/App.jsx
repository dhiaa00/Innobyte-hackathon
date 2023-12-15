import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Home from './pages/Home'

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
