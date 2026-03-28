
import { NextResponse } from "next/server";
import { posts } from "@/lib/postData";


// Get Api route
export async function GET(){
  return NextResponse.json(posts) ; 
}

// post Api route

export async function POST  (request: Request){
   const body = await request.json() ;

   const newPost = {
    id : posts.length + 1,
    title : body.title,
    content : body.content
   }  

   posts.push(newPost) ;

   return NextResponse.json(newPost,{
    status : 201
   }) ;
}       