import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header'
import "core-js/stable"
import "regenerator-runtime/runtime"
import './App.css'

const App = () => {
  
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path= "/upload" element={<Upload />}/>
      <Route path= "/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)