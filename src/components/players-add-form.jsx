import { useDispatch } from "react-redux";
import { playerCreated } from "../action";
import { useHttp } from "../hooks/use-http";
import { v4 as uuidv4 } from 'uuid';
const PlayersAddForm = () => {
  const dispatch = useDispatch;
  const {request} = useHttp()
  const onSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const country = event.target.country.value
    const continent = event.target.continent.value
    const data = {
      id: uuidv4(),
      name,
      country,
      continent,
    }
    console.log(data);
    
   request('http://localhost:8080/players', 'POST', JSON.stringify(data))
    .then(dispatch(playerCreated(data)))
    .catch(e => console.log(e));
    
  }
  
  
  
  return (
    <div className="px-4 py-6  bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-transparent bg-opacity-10">
    <form onSubmit={onSubmit}>

    <div className="flex flex-col space-y-2">
      <div>
        <label htmlFor="name" className="text-2xl">
          New football player
        </label>
        <input
         type="text"
         className="block w-full py-2 px-4 rounded-md mt-1"
         placeholder="Mohammad Salah" 
         name="name"
         required/>
      </div>
      <div>
        <label htmlFor="country" className="text-2xl">
          Country
        </label>
        <input
         type="text"
         className="block w-full py-2 px-4 rounded-md mt-1"
         placeholder="Mohammad Salah" 
         name="country"
         required/>
      </div>
      <div>
        <label htmlFor="country" className="text-2xl">
          Select player continent
        </label>
        <select
         className="block w-full py-2 px-4 rounded-md mt-1" 
         name="continent"
         required>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
         </select>
      </div>
      <button type="submit" className="py-2 px-4 w-fit rounded-md ml-auto bg-gradient-to-r from-blue-500 to-blue-950 text-white hover:scale-105 transition-all font-medium">Add player</button>
    </div>

  </form>
  </div>
  )
}

export default PlayersAddForm