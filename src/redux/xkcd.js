import {getCurrentComic} from '../api/xkcdApi';

// Actions
const LOAD_CURRENT = 'xkcd/reducer/LOAD_CURRENT';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD_CURRENT:
      return {
        ...state,
        num: action.data.num,
        title: action.data.title,
        description: action.data.description,
        img: action.data.img,
      };
    default: return state;
  }
}

// Action Creators
export function loadCurrent() {
  return (dispatch) => {
    return getCurrentComic()
      .then((data) => {
        return dispatch({
          type: LOAD_CURRENT,
          data
        });
      }).catch((err) => {
        console.error(err); // eslint-disable-line no-console
      });
  };
}
