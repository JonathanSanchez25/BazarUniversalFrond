import React, { useEffect,useState,useCallback } from 'react'
import CardProduct from './CardProduct';
import { useParams } from 'react-router-dom';
import BusquedaHeader from './BusquedaHeader';

const Result_Busqueda = () => {
    const {search} = useParams();
    const [products, setProducts] = useState([]);




    const obtenerProductosSearch = useCallback( async () => {
        console.log(search);
        let url = `https://apibazaruniversal.onrender.com/api/product`;
        if(search !== '' && search !== undefined){
         url = `https://apibazaruniversal.onrender.com/api/product/find?title=${search}`;
        }
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setProducts(data);
    },[search]);

    

    useEffect(() => {
        obtenerProductosSearch();
    }, [search,obtenerProductosSearch])

    

  return (
    <>
      <div className="container">
       <BusquedaHeader/>
        <div className="row">
          <div className="col text-center mt-2">
            <h4>Resultados de busqueda: {products.length}</h4>
          </div>
        </div>
        <div className="row">
            {
                products.map((product,index)=>(
                    <div  key={index}>
                        <CardProduct title={product.title} descripcion={product.description} marca={product.brand} raking={product.rating} costo={product.price} imagen={product.thumbnail} id={product._id}/>
                    </div>
                ))
            
            }
          {/*<CardProduct title={"t"} descripcion={"des"} marca={"marca"} raking={5} costo={154}/>*/}
        </div>
      </div>
    </>
  );
}

export default Result_Busqueda