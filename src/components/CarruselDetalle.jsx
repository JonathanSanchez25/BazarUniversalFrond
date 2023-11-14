

const CarruselDetalle = ({imgPrincipal,imagenes}) => {


  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgPrincipal} className="d-block w-100" style={{height: "23rem", width:"auto"}} alt="..."/>
    </div>
    {
        imagenes && imagenes.map((img,index)=>(
            <div className="carousel-item" key={index}>
                <img src={img} className="d-block w-100" style={{height: "23rem", width:"auto"}} alt="..."/>
            </div>
        ))
    }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </> 
  )
}

export default CarruselDetalle