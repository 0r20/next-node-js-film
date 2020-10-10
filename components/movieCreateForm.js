import { useState } from 'react'

const MovieCreateForm = (props) => {

  const [ isInitialDataLoaded, setIsInitialDataLoaded] = useState(false)

  const defaultData = {
    name: 'Some Movie',
    description: 'Some description',
    rating: '',
    price: '',
    image: '',
    genre: ''
  }

  const formData = props.initialData ? {...props.initialData} : defaultData

  const [form, setForm] = useState(formData)

  const handleChange = (event) => {
    setForm({
      ...form, 
      [event.target.name]: event.target.value      
    })
  }

  const handleGenreChange = (event) => {
    const { options } = event.target
    const length = options.length
    let value = []
    for(let i =0; i < length; i++) {
      if(options[i].selected) {
        value.push(options[i].value)
      }
    }
    setForm({
      ...form, 
      genre: value.toString()
    })
  }

  const submitForm = () => {
    props.handleFormSubmit({...form})
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange} 
          value={form.name}
          name="name"
          type="text" 
          className="form-control" 
          id="name" 
          aria-describedby="emailHelp" 
          placeholder="Lord of the Rings" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange} 
          name="description"
          value={form.description} 
          type="text" 
          className="form-control" 
          id="description" 
          placeholder="Somewhere in Middle-earth..." 
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input
          onChange={handleChange}
          name="rating"
          value={form.rating}  
          type="number" 
          max="5" 
          min="0" 
          className="form-control" 
          id="rating" 
        />
        <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          onChange={handleChange}
          name="price"
          value={form.price}  
          type="number" 
          className="form-control" 
          id="price" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          name="image"   
          value={form.image}
          type="text" 
          className="form-control" 
          id="image" 
          placeholder="http://....." 
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select 
          onChange={handleGenreChange}
          multiple 
          className="form-control" 
          id="genre"
        >
          <option>drama</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button 
        onClick={submitForm} 
        type="button" 
        className="btn btn-primary"
      >
        {props.submitButton || 'Create'}
      </button>
    </form>
  )
}

export default MovieCreateForm