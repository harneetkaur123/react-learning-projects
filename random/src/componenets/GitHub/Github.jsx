import React from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='bg-gray-600 text-white text-center p-4 '>Github users : {data.followers}
      <img src={data.avatar_url} alt="photu" width={300} />
    </div>
  )
}

export default Github;

export const  githubinfo = async()=>{
      
      const res= await fetch("https://api.github.com/users/hiteshchoudhary")
      return res.json()
}