import empty from '../assets/empty.png'

const Empty = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
    <img src={empty} alt="error"  className='object-cover'/>
  </div>
  )
}

export default Empty