import mongoose from 'mongoose'
import { type } from 'os'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

})

export default mongoose.models.User || mongoose.model("User",UserSchema) 