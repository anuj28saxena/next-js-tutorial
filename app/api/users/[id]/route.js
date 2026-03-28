
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongoose"; 
import User from "../../../../models/User"; 


export async function PUT(req, {params}){
    try {
        await connectDB();
        const {id} = await params;

        const body = await req.json();

        const updatedUser = await User.findByIdAndUpdate(
            id,
            body,
            {new:true}  
        )
      
        return NextResponse.json({
            message: "USer updated successfully",
            data: updatedUser
        })

    } catch (error) {
         return NextResponse.json({
            message: "error updating user",
            error: error.message
        })
    }

}

export async function DELETE(req, {params}){
     try {
        await connectDB();
        const {id} = await params;

        const deletedUser = await User.findByIdAndDelete(id);

        return NextResponse.json({
            message: "USer deleted successfully",
            data: deletedUser
        })


    } catch (error) {
         return NextResponse.json({
            message: "error Deleting user",
            error: error.message
        })
    }
}
