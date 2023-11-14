import './CardProduct.css'
import {useNavigate} from 'react-router-dom'
import Rating from '@mui/material/Rating';

const CardProduct = ({title,descripcion,marca,costo,raking,imagen,id}) => {

    const navigate = useNavigate();

 const verProduct = (idProduct) => {
    //console.log("id="+idProduct)
    navigate(`/item/${idProduct}`)
  }

  return (
    <div className="col card mb-3"  onClick={()=>verProduct(id)} style={{ cursor: 'pointer'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title d-inline">{title}</h5>
                    <h6 className="card-title d-inline float-end">{marca}</h6>
                  <p className="card-text">
                    {descripcion}
                  </p>
                  <div className="card-text">
                    <p className='d-inline me-5'>${costo}</p>
                    <div className='d-inline'><Rating name="half-rating-read" defaultValue={raking} precision={0.5} readOnly /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default CardProduct