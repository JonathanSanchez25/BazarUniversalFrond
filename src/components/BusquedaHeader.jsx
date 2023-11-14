import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgShopping from '../../public/ShoppingBag.png'

const BusquedaHeader = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const handleSearch = () => {
        if(input === ''){
            navigate('/items')
        }
        const search = input;
        navigate(`/items/${search}`)
    }

    const handleInicio = () => {
        navigate('/')
        }

  return (
    <div className="row">
    <div className="col-2">
   <img src={imgShopping} alt="logo" border="0" style={{ width: '4rem' , height: "auto", cursor: "pointer"}} onClick={ handleInicio} />
    </div>
    <div className="col-7">
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Search"
        style={{ borderRadius: "20px" }}
        onChange={(e)=>setInput(e.target.value)}
      />
    </div>
    <div className="col-2">
      <button
        className="btn btn-primary mt-2"
        style={{ borderRadius: "10px" }}
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  </div>
  )
}

export default BusquedaHeader