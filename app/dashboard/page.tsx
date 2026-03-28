

"use client"

import {useRouter} from "next/navigation" ;
import { useState , useEffect } from "react" ;

type ProfileData = {
  user?: { email?: string };
  message?: string;
};

export default function Dashboard(){  
    const router = useRouter() ;
    const [data , setData] = useState<ProfileData | null>(null) ;

    function handleClick(){
        router.push("/");
    }

    useEffect(()=>{
      const token = localStorage.getItem("token") ;
    

      fetch('/api/profile' , {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => setData(data))
     
    } , []) ;

  return (
    <div>
      <h1>Dashboard Page</h1> 
      <ul>

      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ul>
        <li>{data?.user?.email}</li>
        <li>{data?.message}</li>
      </ul>

      <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}