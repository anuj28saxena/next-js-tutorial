

import { NextResponse } from "next/server";
import { posts } from "@/lib/postData";

// Get Api route based on ID  

export async function GET(
    request : Request,
    { params } : { params : Promise<{ id : string }> }
){
    const { id } = await params ;   
    const post = posts.find(post => post.id === Number(id)) ;
    if(!post){
        return NextResponse.json({ message : "Post not found" }, { status : 404 }) ;
    }
    return NextResponse.json(post) ;
}

// Patch Api route based on ID

export async function PATCH(
    request : Request,
    { params } : { params : Promise<{ id : string }> }
){
    const { id } = await params ;
    const body = await request.json() ;
    const postIndex = posts.findIndex(post => post.id === Number(id)) ; 

    if(postIndex === -1){
        return NextResponse.json({ message : "Post not found" }, { status : 404 }) ;
    }

    if(body.title !== undefined){
        posts[postIndex].title = body.title ;
    }

    if(body.content !== undefined){
        posts[postIndex].content = body.content ;
    }

    return NextResponse.json(
        { message : "Post updated successfully", data : posts[postIndex] },
        { status : 200 }
    ) ;


}

// PUT API route based on ID

export async function PUT(
    request : Request,
    { params } : { params : Promise<{ id : string }> }
){
    const { id } = await params ;
    const body = await request.json() ;
    const postIndex = posts.findIndex(post => post.id === Number(id)) ;

    if(postIndex === -1){
        return NextResponse.json({ message : "Post not found" }, { status : 404 }) ;
    }

    if(!body.title || !body.content){
        return NextResponse.json({ message : "Title and content are required" }, { status : 400 }) ;
    }

    posts[postIndex].id = Number(id) ;
    posts[postIndex].title = body.title ;
    posts[postIndex].content = body.content ;

    return NextResponse.json(
        { message : "Post updated successfully",
            data : posts[postIndex] },
        { status : 200 }
    ) ;


}

// Delete API route based on ID

export async function DELETE(
    request : Request,
    { params } : { params : Promise<{ id : string }> }
){
    const { id } = await params ;
    const postIndex = posts.findIndex(post => post.id === Number(id)) ; 
    if(postIndex === -1){
        return NextResponse.json({ message : "Post not found" }, { status : 404 }) ;
    }

    const deletedPost = posts.splice(postIndex, 1) ;

    return NextResponse.json({
         message : "Post deleted successfully",
            data : deletedPost[0] ,
        },
        { status : 200 }
    ) ;
}