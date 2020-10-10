export const Carousel = ({ images }) => {

    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((image, index) => (
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === 0 ? 'acitve' : ''}
                        key={`key__${index}`}
                    />
                ))}
            </ol>
            <div className="carousel-inner" role="listbox">
                {images.map((image, index) => (
                    <div 
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={`key__${index}__slide`}
                    >
                        <img 
                            className="d-block img-fluid" 
                            src={image.url} 
                            alt={image.name}
                        />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <style jsx>{`
                .carousel-item {
                    max-height: 300px;
                }
                .carousel-item img {
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default Carousel