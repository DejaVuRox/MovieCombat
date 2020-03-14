import { MOVIE_SEARCH, FETCH_MOVIES, OPTION } from "../actions/actionTypes";

const initialState = {
  searchInput: "",
  movies: [],
  loading: false,
  movie: []
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
    case OPTION:
      return {
        ...state,
        searchInput: action.payload
      }  
      default: 
      return state
  }
}
