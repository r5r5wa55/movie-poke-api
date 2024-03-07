import { useEffect } from "react"


import {useDispatch, useSelector} from 'react-redux'
import { addMovie } from "../store/reducer"
import Card from "./Card"


export default function Home() {
    const {movie} = useSelector(state=>state.movieslice)
 
    const dispath=useDispatch()
    useEffect(()=>{
        const fecthMovie=async()=>{
            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=202a113f&s=%27thor%27&short=full`)
                if(res.ok){
                    const data = await res.json()
                
                    dispath(addMovie(data.Search))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fecthMovie()
    },[dispath])
    // console.log(movie);
  return (
    <div className="flex justify-center">
        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5 px-10 py-5">
            {movie && 
                movie.map((m)=>(
                    <Card key={m.imdbID} movie={m} className='' />
                ))
            }
        </div>
      
    </div>
  )
}
