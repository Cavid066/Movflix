import { BASE_URL } from "../../config/api"
import { GET_MOVIES, GET_MOVIE_BY_ID } from "../constants/MovieConstants"

export const getMoviesAction = () => async(dispatch,getState)=>{

    let movies = await (await fetch(`${BASE_URL}/series`)).json()


    dispatch({
        type: GET_MOVIES,
        payload: movies
    })
}

export const getMoviesById = (id) => async (dispatch, getState) => {

    let movie = await (await fetch(`${BASE_URL}/series?id=${id}`)).json()

    dispatch({
        type: GET_MOVIE_BY_ID,
        payload: movie
    })
}