import { addData, ADD_DATA, DELETE_DATA, EDIT, SORT } from "./actions"

let init = { data: null }

export const reducer = (Store = init, { type, payload }) => {
    console.log(Store)
    switch (type) {

        case ADD_DATA:
            return {...Store, data: Store.data = payload }

        case SORT:
            return {...Store, data: [...Store.data].sort((a, b) => { return a[payload] > b[payload] ? 1 : b[payload] > a[payload] ? -1 : 0 }) }

        case DELETE_DATA:
            return {...Store, data: Store.data.filter((e) => e.id != payload) }

        case EDIT:
            return {...Store, data: [...Store.data, payload] }
        default:
            return Store
    }
}