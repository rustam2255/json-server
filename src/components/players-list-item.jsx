import { IoFootballOutline } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import player from '../assets/player.png'

const PlayersListItem = ({name, continent, country, onDelete}) => {
  let bgClasses

	switch (continent) {
		case 'Europe':
			bgClasses = 'bg-gradient-to-r from-blue-500 to-red-500'
			break
		case 'Asia':
			bgClasses = 'bg-gradient-to-r from-green-500 to-red-500'
			break
		case 'Africa':
			bgClasses = 'bg-gradient-to-r from-yellow-500 to-red-500'
			break
		case 'America':
			bgClasses = 'bg-gradient-to-r from-cyan-500 to-red-500'
			break
		default:
			break
	}
  return (
    <div className={`rounded-md p-4 grid grid-cols-2 items-center relative ${bgClasses}`}>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1 ">
          <IoFootballOutline className="w-6 h-6" />
          <p className="font-bold text-lg">{name}</p>
        </div>
        <div className="flex items-center gap-1 ">
          <FaFontAwesomeFlag  className="w-6 h-6" />
          <p className="font-bold text-lg">{country}</p>
        </div>
      </div>
      <img src={player} alt="player" className="h-24 ml-auto" />
      <span className="absolute -right-2 -top-4 bg-slate-300 rounded-full p-1 hover:cursor-pointer hover:bg-slate-600 transition-all " onClick={onDelete}>
        <IoMdClose  className="h-5 w-5" />  
      </span>
    </div>

  )
}

export default PlayersListItem