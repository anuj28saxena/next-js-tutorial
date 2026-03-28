
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/jwt" ;

export async function POST(request: Request) {
    const { email, password } = await request.json() ;

    // Demo credentials

    if(email === "admin@test.com" && password === "password123") {

        const token = generateToken({ email }) ;

        return NextResponse.json({ message: "Login successful" , token }, { status: 200 }) ;
   
        // set auth cookies
        // response.cookies.set("auth","true",{
        //     httpOnly: true,
        //     path: "/",
        // })
        // return response ;
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 }) ; 
    
}