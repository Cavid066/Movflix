import { GET_CATEGORIES } from "../constants/CategoryContats";

export const CategoryReducer = (state= {categories: []}, action) =>{
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
    
        default:
            return state;
    }
}