import React, { useState } from 'react'
import Carousel from '../components/carousel'
import SideMenu from '../components/sideMenu'
import MovieList from '../components/movieList'
import { getData, getCat } from '../actions'

const Home = (props) => {

  const { data, images, cat } = props  
  const [filter, setFilter] = useState('all')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterData = (data) => {
    if (filter === 'all') {
      return data
    }
    return data.filter(m => {
      return m.genre && m.genre.includes(filter)
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu 
              changeCategory={changeCategory}
              activeCategory={filter}
              cat={cat}
              
            />
            
          </div>
          <div className="col-lg-9">
            <Carousel images={images}/>
            <h4 className="mb-3 text-center">Displaying {filter} movies</h4>
            <div className="row">
              <MovieList data={filterData(data) || []} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const data = await getData()
  const cat = await getCat()
  const images = data.map(x => ({
    name: `image-${x.id}`,
    url: x.image
  }))

  return {
    data,
    images,
    cat
  }
}

export default Home
