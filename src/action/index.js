export const playerFetching = () => {
  return{
    type: 'PLAYERS_FETCHING',
  }
}
export const playerFetched = (players) => {
  return{
    type: 'PLAYERS_FETCHED',
    payload: players,
  }
}
export const playersFetchingError = () => {
  return{
    type: 'PLAYERS_FETCHING_ERROR',
  }
}
export const playerCreated = (player) => {
  return {
    type: 'PLAYER_CREATED',
    payload: player,
  }
}
export const playerDeleted = (id) => {
  return{
    type: 'PLAYER_DELETED',
    payload: id,
  }
}
export const filtersFetching = () => {
  return{
    type: 'FILTERS_FETCHING',
  }
}
export const filtersFetched = (players) => {
  return{
    type: 'FILTERS_FETCHED',
    payload: players,
  }
}
export const filtersFetchingError = () => {
  return{
    type: 'FILTERS_FETCHING_ERROR',
  }
}