import { useLoaderData } from "react-router-dom"

function GitHub() {
    const data = useLoaderData();
  return (
    <div className='text-3xl m-4 bg-gray-400 text-white text-center py-5'>GitHub Followers : {data.followers}
     <img src={data.avatar_url} alt="image" width={300} />
    </div>
  )
}

export default GitHub

export const GithubInfoLoader= async()=>{
      const res= await fetch("https://api.github.com/users/hiteshchoudhary")
       return res.json();
}