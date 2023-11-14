import CarruselDetalle from "./CarruselDetalle"
import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"
import Rating from '@mui/material/Rating';
import BusquedaHeader from "./BusquedaHeader";

const DetalleProduct = () => {

    const {id} = useParams();

    const [product, setProduct] = useState({});
    
    const {title, description, price,thumbnail,images, rating,brand,stock,discountPercentage,category} = product;


    const obtenerProducto = useCallback( async () => {
        console.log(id);
        let url = `https://apibazaruniversal.onrender.com/api/product/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setProduct(data);
    },[id]);

    

    useEffect(() => {
        obtenerProducto();
    }, [id,obtenerProducto])

  return (
    <>
      <div className="container">
        <BusquedaHeader/>
        <div className="row">
            <div className="col mt-5">
             <CarruselDetalle imgPrincipal={thumbnail} imagenes={images}/>
            </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <h2>{title}</h2>
            <h5>{brand}</h5>
            <h5 style={{color: "gray"}}>{category}</h5>
            <p>{description}</p>
          </div>
        </div>
        <div className="row text-center mb-3">
          <div className="col-6">
            <h4>${price}</h4>
            <h5 style={{color: "red"}}>-{discountPercentage}%</h5> 
          </div>
          <div className="col-6">
            <h6>Stock: {stock}</h6>
            
           <button className="btn btn-primary"><i className="bi bi-cart4"></i>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleProduct