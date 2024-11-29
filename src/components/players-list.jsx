
import { useDispatch, useSelector, } from "react-redux";
import { useHttp } from "../hooks/use-http";
import { useCallback, useEffect } from "react";
import { playerDeleted, playerFetched, playerFetching, playersFetchingError } from "../action";
import Spinner from "./spinner";
import Error from "./error";
import Empty from "./empty";
import PlayersListItem from "./players-list-item";

const PlayersList = () => {
  const {players, playersLoadingStatus} = useSelector(state => state)
  const dispatch = useDispatch()
  const {request} = useHttp()

  useEffect(() =>{
    dispatch(playerFetching())
    request('http://localhost:8080/players')
      .then(data => dispatch(playerFetched(data)))
      .catch(() => dispatch(playersFetchingError()) )
  }, [request])
  const onDelete = useCallback(
    id => {
      request(`http://localhost:8080/players/${id}`, 'DELETE')
        .then(dispatch(playerDeleted(id)))
        .catch(e => console.log(e))
    }, [request]
  ) 
  if(playersLoadingStatus === 'loading'){
    return <Spinner classnames={'w-8 h-8 text-white block mx-auto'}/>
  }else if(playersLoadingStatus === 'error'){
    return <Error />
  }

  const playersList = () => {
    if(!players.length){
      return <Empty />
    }

    return players.map(({id, ...props}) => (
        <PlayersListItem
          key={id}
          {...props}
          onDelete = {() => onDelete(id)} />
    )) 
  }
  return (
    <div className="flex flex-col space-y-2">
      {playersList()}
    </div>
   
  )
}

export default PlayersList