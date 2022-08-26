import { GET_MOVIES, GET_MOVIE_BY_ID } from "../constants/MovieConstants";

export const MovieReducer = (state = {movies:[]}, action) =>{
    switch (action.type) {
        case GET_MOVIES:
            return{
                ...state,
                movies: action.payload
            }
        case GET_MOVIE_BY_ID:
            return{
                ...state,
                movies:action.payload
            }
        default:
            return state;
    }

}