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