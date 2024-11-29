import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../hooks/use-http"
import { useEffect } from "react"
import { filtersFetched, filtersFetching, filtersFetchingError } from "../action"
import Spinner from "./spinner"
import Empty from "./empty"


const PlayersFilter = () => {
  const {filters, filtersLoadingStatus} = useSelector(state => state)
  const dispatch = useDispatch()
  const {request} = useHttp()
  useEffect(() => {
    dispatch(filtersFetching())
    request('http://localhost:8080/filters')
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError()))
  }, [])

  if(filtersLoadingStatus === 'loading'){
    return <Spinner classnames={'w-8 h-8 text-white block mx-auto'}/>
  }else if(filtersLoadingStatus === 'error'){
    return <span className="text-red-800">Something went wrong</span>
  }

  const filtersList = () => {
    if(!filters.length){
      <Empty />
    }
    return filters.map(({id,label,classes}) => (
      <button key={id} className={`py-2 px-4 text-white  hover:opacity-90 transition-all bg-gradient-to-r  ${classes}`}>{label}
      </button>     
    ))
  }
  return (
    <div className="px-4 py-6 mt-5  bg-white rounded-md shadow-lg bg-gradient-to-b from-cyan-500 to-transparent bg-opacity-10">
      <div>
        <h1 className="text-xl font-bold">Filter players by continent</h1>
        <div className="flex mt-2">
          {filtersList()}
        </div>
      </div>
    </div>
  )
}

export default PlayersFilter