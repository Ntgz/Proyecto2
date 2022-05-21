import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Registrar from './paginas/registrar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthLayout />}>
                <Route index element={<Registrar/>}/>
                
          </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
