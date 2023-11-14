import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import imgShopping from '../../public/ShoppingBag.png'
const Inicio = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const handleSearch = () => {
        if(input === ''){
            navigate('/items')
        }
        const search = input;
        navigate(`/items/${search}`)
    }

  return (
    <>
  <div className='container d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
    <div className='col text-center'>
      {/*<i className="bi bi-handbag-fill" style={{ fontSize: '3em' }}></i>*/}
      <img src={imgShopping} alt="logo" border="0" style={{ width: '4em' , height: "auto"}}/>
       <br/>
       <h3>Bazar Universal</h3> 
         <br/>
         <input type="text" className="form-control mb-2" placeholder="Producto"  style={{borderRadius: "20px"}} onChange={(e)=>setInput(e.target.value)}/>
         <button className="btn btn-primary btn-block" style={{borderRadius: "10px"}} onClick={handleSearch} >Buscar</button>
    </div>
</div>
    </>
  )
}

export default Inicio