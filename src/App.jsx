import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path="/TemplateWeb" element={<Home />}></Route>
      </Routes>    
    </>
  )
}

export default App
