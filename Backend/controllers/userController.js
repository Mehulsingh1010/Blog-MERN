import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js"
import Errorhandler, { errorMiddlewae } from "../middlewares/error.js"
import { User } from "../models/userSchema.js"
import { sendToken } from "../utils/jwtToken.js"
import cloudinary from "cloudinary"
export const register = catchAsyncErrors (async (req,res,next)=>{

    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new Errorhandler("User Avatar Required!", 400));
      }
      const { avatar } = req.files;
      const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
      if (!allowedFormats.includes(avatar.mimetype)) {
        return next(
          new Errorhandler(
            "Invalid file type. Please provide your avatar in png, jpg or webp format.",
            400
          )
        );
      }

    const {name,email,password,phone,role,education} = req.body;
    if(!name || !email || !password || !phone || !role || !education){
        return next(new Errorhandler("Please fill full details"))
    }

    let user=await User.findOne({email});
    if(user){
        return next(new Errorhandler("User already exists", 400));
    }

        const cloudinaryResponse = await cloudinary.uploader.upload(
            avatar.tempFilePath
        );
        if(!cloudinaryResponse || !cloudinaryResponse.error){
            console.error("Cloudinary error : ",cloudinaryResponse.error || "unknown cloudinary error");
        }

    user = await User.create({
        name,
        email,
        password,
        phone,
        role,
        education,
        avatar:{
            public_id:cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
            
        }
    });

    sendToken(user,200,"user registered succesfully",res);
    // res.status(200).json({
    //     success:true,
    //     message:"User registered ! ",
    // })
})

export const login = catchAsyncErrors(async(req,res,next)=>{
    const{email,password,role}=req.body;
    if(!email || !password || !role){
        return next(new Errorhandler("please fill full form",400));

    }
    const user= await User.findOne({email}).select("+password");
    if(!user){
        return next(new Errorhandler("invalid email or password",400))
    }
    const isPasswordMatch= await user.comparePassword(password);
    if(!isPasswordMatch){
        return next(new Errorhandler("Invalid email / password",400))
    };
    if(user.role!==role){
        return next(new Errorhandler("User with provided role (${role}) not found",400 ));
    }
    // res.status(200).json({
    //     success:true,
    //     message:"User logged in ! ",
    // });
    sendToken(user,200,"user logged in succesfully",res);
    
});

export const logout = catchAsyncErrors((req, res, next) => {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "User logged out!",
      });
  });

  export const getmyprofile=catchAsyncErrors((req,res,next)=>{
    const user=req.user;
    res.status(200).json({
        success:true,
        user,
    })
  });

  export const getAllauthors= catchAsyncErrors(async(req,res,next)=>{
    const authors=await User.find({role:"Author"});
    res.status(200).json({
        success:true,
        authors,
    });
  })

