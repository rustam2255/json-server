import error from '../assets/error.png'

const Error = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={error} alt="error"  className='object-cover'/>
    </div>
  )
}

export default Error