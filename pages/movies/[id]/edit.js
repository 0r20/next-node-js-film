import React from 'react'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getDataById, updateData } from '../../../actions'
import Router from 'next/router'


class EditMovie extends React.Component {

    static async getInitialProps({ query }) {
        const data = await getDataById(query.id)
        return {
            data
        }
    }

    handleUpdateData = (data) => {
        updateData(data).then((updatedData) => {
            Router.push('/movies/[id]', `/movies/${data.id}`)
        })
    }

    render() {
        const { data } = this.props
        return (
            <div className="container p-3">
                <h1>Edit the Movie</h1>
                <MovieCreateForm
                    submitButton="Update"
                    initialData={data}
                    handleFormSubmit={this.handleUpdateData}
                />
            </div>
        )
    }
}


export default EditMovie