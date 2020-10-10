import Link from 'next/link'

const MovieList = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <Link href='/movies/[id]' as={`/movies/${item.id}`}>
                            <a><img className="card-img-top" src={item.image} alt="" /></a>
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link href='/movies/[id]' as={`/movies/${item.id}`}>
                                    <a href="#">{item.name}</a>
                                </Link>
                            </h4>
                            <h5>{item.price}$</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{item.rating} stars</small>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList