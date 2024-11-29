const initialState = {
  players: [],
  playersLoadingStatus: 'success',
  filters: [],
  filtersLoadingStatus: 'succes',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS_FETCHING':
      return{
        ...state,
        playersLoadingStatus: 'loading'
      }
    case 'PLAYERS_FETCHED':
      return{
        ...state,
        players: action.payload,
        playersLoadingStatus: 'success'
      }
    case 'PLAYERS_FETCHING_ERROR':
      return{
        ...state,
        playersLoadingStatus: 'error'
      }
    case 'PLAYER_CREATED':
      return{
        ...state,
        players: [...state.players, action.payload],
      }
    case 'PLAYER_DELETED':
      return{
        ...state,
        players: state.players.filter(player => player.id !== action.payload),
      }
      case 'FILTERS_FETCHING':
        return{
          ...state,
          filtersLoadingStatus: 'loading'
        }
      case 'FILTERS_FETCHED':
        return{
          ...state,
          filters: action.payload,
          filtersLoadingStatus: 'success'
        }
      case 'FILTERS_FETCHING_ERROR':
        return{
          ...state,
          filtersLoadingStatus: 'error'
        }
    default:
      return state;
  }
};
export default reducer  