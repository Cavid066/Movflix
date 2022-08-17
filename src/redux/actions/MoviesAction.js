import { GET_MOVIES } from "../constants/MovieConstants"

export const getMoviesAction = () => async(dispatch,getState)=>{

    let movies = [
        {
            id: 1,
            name: "Women's Day",
            year: 2020,
            time: "128 min",
            like: 3.5,
            photo: "https://themebeyond.com/html/movflx/img/poster/ucm_poster01.jpg",
            category:"Tv Show"
        },
        {
            id: 2,
            name: "Women's Day",
            year: 2022,
            time: "128 min",
            like: 3.5,
            photo: "https://themebeyond.com/html/movflx/img/poster/ucm_poster02.jpg",
            category:"Tv Show"
        },
        {
            id: 3,
            name: "Women's Day",
            year: 2022,
            time: "128 min",
            like: 3.5,
            photo: "https://themebeyond.com/html/movflx/img/poster/ucm_poster03.jpg",
            category:"Movies"
        },
        {
            id: 4,
            name: "Women's Day",
            year: 2022,
            time: "128 min",
            like: 3.5,
            photo: "https://themebeyond.com/html/movflx/img/poster/ucm_poster04.jpg",
            category:"Anime"
        }
    ]


    dispatch({
        type: GET_MOVIES,
        payload: movies
    })
}