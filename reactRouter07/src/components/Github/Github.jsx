import React, { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()

    // const [data , setData] = useState([]);

    // useEffect(() => {
    //   fetch(`https://api.github.com/users/saklanisaksham `)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <div className='flex justify-center m-4'>
        <img src={data.avatar_url} alt='Gitn picture'
          className='rounded-full' />
      </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/saklanisaksham `)

    return response.json( )
}