
import PropTypes from 'prop-types';
export default function Card({movie}) {
    console.log(movie);
  return (
    <div className="p-5 bg-gray-100 hover:drop-shadow-2xl shadow-2xl cursor-pointer rounded-xl m-2 ">
        <span className="">
            <h2 className='text-xl font-semibold'>{movie.Year}</h2>
            <img src={movie.Poster} alt="" />
            <h1 className="">{movie.Title}</h1>
        </span>
    </div>
  )
}


Card.propTypes = {
    movie: PropTypes.any
  };