import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './components/Inicio'
import Result_Busqueda from './components/Result_Busqueda'
import DetalleProduct from './components/DetalleProduct'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/items/:search' element={<Result_Busqueda/>} />
      <Route path='/items' element={<Result_Busqueda/>} />
      <Route path='/item/:id' element={<DetalleProduct/>} />
     </Routes> 
    </BrowserRouter>
  )
}

export default App
