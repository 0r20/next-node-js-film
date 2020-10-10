import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const data = []

const cat = [
    {
        id: '0',
        name: 'drama'
    },
    {
        id: '1',
        name: 'adventure'
    },
    {
        id: '2',
        name: 'historical'
    },
    {
        id: '3',
        name: 'action'
    }
]

export const getData = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`)
        .then(res => res.data)
}

export const getDataById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`)
        .then(res => res.data)
}

export const createData = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}/api/v1/movies`, movie)
        .then(res => res.data)
}

export const deleteData = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`)
        .then(res => res.data)
}

export const updateData = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
        .then(res => res.data)
}

export const getPosts = () => {
    return axios.get(`${BASE_URL}/api/v1/posts`)
        .then(res => res.data)
}

export const getCat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cat)
            // reject('Error!')
        }, 50)
    })
}

