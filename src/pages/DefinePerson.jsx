
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
const DefiePerson = () =>{
    const params = useParams();
  const [data,setData] = useState();
  useEffect(()=>{
    const getData = async() =>{
        const data = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        const dataJson = await data.json()
        setData(dataJson)
    }
    getData()
  },[params.id])
    return(
        <>
    

    <div >
        <img src={data?.image} alt=""/>
        <h1>{data?.name}</h1>
    </div>

         
        </>
        
    )
}

export default DefiePerson

