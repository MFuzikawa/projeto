import mongoose from 'mongoose'



const userschema = new mongoose.Schema ({
    name: {
        type:String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdat: {
        type: Date,
        default: Date.now()
    }
})
export default mongoose.model('user', userschema)