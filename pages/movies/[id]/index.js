import { getDataById, deleteData } from '../../../actions'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Movie = (props) => {
    const { data } = props
    const router = useRouter()
    const { id } = router.query

    const handleDeleteMovie = (id) => {
        deleteData(id).then((res) => {
            router.push('/')
            console.log(res)
        })
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{data.name}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
                <button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg mr-1" href="#" role="button">Delete</button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button
                        className="btn btn-warning btn-lg"
                        role="button">Edit</button>
                </Link>
            </div>
            <div className="description">
                {data.description}
            </div>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => {
    const data = await getDataById(query.id)
    return {
        data
    }
}

export default Movie