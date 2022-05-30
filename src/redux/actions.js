import axios from "axios";

export const ADD_DATA = "ADD_DATA";
export const SORT = "SORT"


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

export const getData = () => async(dispatch) => {

    axios.get(`http://localhost:8080/Cities`).then(data => dispatch(addData(data.data)))
}

export const addCountry = (data) => async(dispatch) => {

    axios.post(`http://localhost:8080/Countries`, data)

}
export const addCity = (data) => async(dispatch) => {

    axios.post(`http://localhost:8080/Cities`, data).then(data => console.log(data))

}