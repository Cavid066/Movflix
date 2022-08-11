import { GET_CATEGORIES } from "../constants/CategoryContats"

export const getCategoriesAction = () => (dispatch,getState) =>{
    let categories = [
        {
            name: "Tv Show"
        },
        {
            name: "Anime"
        },
        {
            name: "Movies"
        }
    ]

    dispatch({
        type: GET_CATEGORIES,
        payload:categories
    })
}