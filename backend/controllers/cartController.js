import userModel from "../models/userModel.js"


{/**-------add projects to user cart-------- */}

//add produts to user cart
const addToCart=async ( req,res)=>{
    try {
        const {userId,itemId,size}=req.body

        console.log("userId:", userId);
        console.log("itemId:", itemId);
        console.log("size:", size);
        const userData=await userModel.findById(userId);
        let cartData=await userData.cartData;
        if(cartData[itemId])
        {
            if(cartData[itemId][size])
            {
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1;
        }await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:"Added To cart"})
        
    } catch (error) {
         console.log("ADD TO CART ERROR:", error);
        res.json({success:false,message:error.message})
    }

}

//update user cart
const updateCart=async ( req,res)=>{
    try {
        const {userId,itemId,size,quantity}=req.body
         const userData=await userModel.findById(userId);
        let cartData=await userData.cartData;

        cartData[itemId][size]=quantity;

        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:"Cart Updated"})


    } catch (error) {
            res.json({success:false,message:error.message})

    }

}

//get user cart data
const getUserCart=async ( req,res)=>{
    try {
        const {userId}=req.body
        const userData=await userModel.findById(userId);
        let cartData=await userData.cartData;

        res.json({success:true,cartData})

        
    } catch (error) {
        res.json({success:false,message:error.message})

    }

}

export {addToCart,updateCart,getUserCart}