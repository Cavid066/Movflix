import { GET_MOVIES } from "../constants/MovieConstants"

export const getMoviesAction = () => async(dispatch,getState)=>{

    let movies = [
        {
            name: "Women's Day",
            year: 2020,
            time: "128 min",
            like: 3.5,
            photo: "",
            category:"Tv Show"
        },
        {
            name: "Women's Day",
            year: 2022,
            time: "128 min",
            like: 3.5,
            photo: "",
            category:"Tv Show"
        },
        {
            name: "Women's Day",
            year: 2022,
            time: "128 min",
            like: 3.5,
            photo: "",
            category:"Movies"
        },
        {
            name: "Women's Day",
            year: 2022,
            time: "128 min",
            like: 3.5,
            photo: "",
            category:"Anime"
        }
    ]


    dispatch({
        type: GET_MOVIES,
        payload: movies
    })
}