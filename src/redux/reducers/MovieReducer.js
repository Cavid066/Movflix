import { GET_MOVIES } from "../constants/MovieConstants";

export const MovieReducer = (state = {movies:[]}, action) =>{
    switch (action.type) {
        case GET_MOVIES:
            return{
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }

}