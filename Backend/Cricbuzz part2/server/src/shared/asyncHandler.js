// async and controller hota hai 
const asyncHandler = (handler)=>{
    return (req,res,next)=>{
        handler(req,res,next).catch(next)
    }
}