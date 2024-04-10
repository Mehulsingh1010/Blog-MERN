class Errorhandler extends  Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorMiddlewae=(err,req,res,next)=>{
    err.message=err.message || "Internal server error";
    err.statusCode=err.statusCode || 500;


    if(err.name ==="CasterError"){
        const message = "Invalid Resource not found : $(err.path)";
        err= new Errorhandler(message,404);
    }
    return res.status(err.statusCode).json({
        // success : false,
        message: err.message,
    })
};

export default Errorhandler