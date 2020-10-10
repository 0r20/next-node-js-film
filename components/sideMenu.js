import Modal from '../components/modal'
import MovieCreateForm from '../components/movieCreateForm'
import { createData } from '../actions'
import { useRouter } from 'next/router'

const SideMenu = (props) => {

    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createData(movie).then((res) => {
            console.log(res)
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        <>
            <Modal ref={el => modal = el} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">Movie DB</h1>
            <div className="list-group">
                <a
                    onClick={() => props.changeCategory('all')}
                    key={'key__all__cat'}
                    href="#"
                    className={`list-group-item ${props.activeCategory === 'all' ? 'active' : ''}`}
                >
                    all
                </a>
                {props.cat.map((c, index) => (
                    <a
                        onClick={() => props.changeCategory(c.name)}
                        key={`key__${index}__cat`}
                        href="#"
                        className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}
                    >
                        {c.name}
                    </a>
                ))}
            </div>
        </>
    )
}
export default SideMenu