export const catchAsyncErrors = (thefucn)=>{
    return (req,res,next)=>{
        Promise.resolve(thefucn(req,res,next)).catch(next);
    };
};