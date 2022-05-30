import axios from "axios";

export const ADD_DATA = "ADD_DATA";
export const SORT = "SORT"
export const DELETE_DATA = "DELETE"
export const EDIT = "EDIT";




export const addData = (data) => {

    return {
        type: ADD_DATA,
        payload: data,
    }
}

export const sort = (by) => {
    return {
        type: SORT,
        payload: by
    }
}

export const deleteData = (id) => {

    return {
        type: DELETE_DATA,
        payload: id
    }
}

export const edit = (id, data) => {

    return {
        type: EDIT,
        payload: id
    }

}

export const getData = () => async(dispatch) => {

    axios.get(`http://localhost:8080/Cities`).then(data => dispatch(addData(data.data)))
}

export const addCountry = (data) => async(dispatch) => {

    axios.post(`http://localhost:8080/Countries`, data)

}
export const addCity = (data) => async(dispatch) => {

    axios.post(`http://localhost:8080/Cities`, data).then(data => console.log(data))

}
export const delete_Data = (id) => async(dispatch) => {

    axios.delete(`http://localhost:8080/Cities/${id}`).then(data => dispatch(deleteData(id)))


}
export const edit_city = ({ country, id }) => async(dispatch) => {

    axios.patch(`http://localhost:8080/Cities/${id}`, country).then(data => dispatch(edit(data.data)))
}