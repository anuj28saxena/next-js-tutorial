
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage(){

    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const router = useRouter() ;

    const login =  async () => {
        const res = await fetch("/api/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json() ;

        if(data.token){
            localStorage.setItem("token", data.token) ;
            router.push('/dashboard') ;
        }else{
            alert("Login Failed") ;
        }

    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h1>Login</h1>
            <input  type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} />
            <input  type="password"
                    placeholder="Password"  
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} />   

            <button onClick={login}>Login</button>
                    
        </div>
    )

}

