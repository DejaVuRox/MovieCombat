import { MOVIE_SEARCH, FETCH_MOVIES, OPTION1, OPTION2 } from "../actions/actionTypes";

const initialState = {
  searchInput: "",
  movies: [],
  loading: false,
  movie1: [],
  movie2: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_SEARCH:
      return {
        ...state,
        searchInput: action.payload,
        movies: [],
        loading: false,
      }
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }
    case OPTION1:
      return {
        ...state,
        movie1: action.payload
      }  
    case OPTION2:
      return {
        ...state,
        movie2: action.payload
      }  
      default: 
      return state
  }
}
