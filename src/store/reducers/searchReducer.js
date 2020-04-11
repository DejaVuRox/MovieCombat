import { MOVIE_SEARCH1, TITLE, FETCH_MOVIE1, FETCH_MOVIE2, MOVIE_SEARCH2, ERROR} from "../actions/actionTypes";

const initialState = {
  searchInput1: "",
  searchInput2: "",
  loading: false,
  display: false,
  title: "",
  openDrop: "",
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_SEARCH1:
      return {
        ...state,
        searchInput1: action.payload,
        error: false
      };
    case MOVIE_SEARCH2:
      return {
        ...state,
        searchInput2: action.payload,
      };
    case FETCH_MOVIE1:
      return {
        ...state,
        openDrop: "dropdown is-active", // bugggggg
      };
    case FETCH_MOVIE2:
      return {
        ...state,
        openDrop: "dropdown is-active" // bugggggg
      };
    case TITLE:
      return {
        ...state,
        openDrop: "dropdown",
        title: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: true,
      }
      default: 
      return state
  }
}
