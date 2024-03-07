import { useEffect, useState } from "react"


export default function About() {
  const [poke,setPoke] =useState()
  const [like,setLike] =useState([])
  const [prv,setPrv] =useState(1)
  useEffect(()=>{
    const pokeApi=async()=>{
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${prv}`)
        if(res.ok){
          const data = await res.json()
          setPoke(data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    pokeApi()
  },[prv])
  const handleClick =()=>{
    setLike((oldlike)=>[...oldlike,poke])
  }

  console.log(prv);
  return (
    <div>
        {poke && 
          <div className="max-w-6xl mx-auto  sm:flex h-screen justify-center items-center">
            <div className="">
              {poke.name}
              <img src={poke?.sprites?.other?.home.front_default} alt={poke.name} className="" onClick={handleClick}/>
              <button className="bg-pink-500 text-white p-1 w-32 rounded-lg"onClick={()=>(setPrv((prv)=>prv+1))} >Prv</button>
            </div>

            <div className="flex-1 grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div className="-m-6 min-h-[500px] w-[calc(100%+48px)] overflow-scroll flex flex-wrap">
    
              {
              like && 
                like.map((pokelike,idx)=>(
                  <div className="" key={idx}>



                    <div className="flex flex-col">
                        <img src={pokelike.sprites?.other?.home.front_default} alt="" className="w-20 h-20"/>
                        {pokelike.name}
                    </div>

                  
                  </div>
                ))
              }
            </div>
            </div>
          </div>
          
        }
       
    </div>
  )
}
