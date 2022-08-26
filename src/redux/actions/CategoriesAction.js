import { BASE_URL } from "../../config/api"
import { GET_CATEGORIES } from "../constants/CategoryContats"

export const getCategoriesAction =  () => async (dispatch,getState) =>{
    let categories = await (await fetch(`${BASE_URL}/categories`)).json()

    dispatch({
        type: GET_CATEGORIES,
        payload:categories
    })
}