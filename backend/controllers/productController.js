import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
    try {

       

        const {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller
        } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(
            (item) => item !== undefined
        );

        const imageUrl = await Promise.all(
            images.map(async (item) => {

                console.log("Uploading File =>", item.path);

                try {

                    const result = await cloudinary.uploader.upload(
                        item.path,
                        {
                            resource_type: "image"
                        }
                    );

                    console.log(
                        "UPLOAD SUCCESS =>",
                        result.secure_url
                    );

                    return result.secure_url;

                } catch (err) {

                    console.log("UPLOAD ERROR =>", err);
                    console.log("MESSAGE =>", err.message);
                    console.log("HTTP CODE =>", err.http_code);

                    throw err;
                }
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true",
            sizes: JSON.parse(sizes),
            image: imageUrl,
            date: Date.now()
        };

        console.log("PRODUCT DATA =>", productData);

        const product = new productModel(productData);

        await product.save();

        res.json({
            success: true,
            message: "Product Added"
        });

    } catch (error) {

        console.log("FULL ERROR =>", error);
        console.log("MESSAGE =>", error.message);
        console.log("HTTP CODE =>", error.http_code);

        res.json({
            success: false,
            message: error.message
        });
    }
};

// function for list products
const listProducts = async (req, res) => {
    try {
         
            const products=await productModel.find({});
            res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message});
    }

};

// function for remove product
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"product Removed"})
        
    } catch (error) {
         console.log(error);
        res.json({sucess:false,message:error.message});
    }

};

// function for single product info
const singleProducts = async (req, res) => {
    try {
        
        const {productId}=req.body
        const product=await productModel.findById(productId);
        res.json({success:true,product})
    } catch (error) {
        
         console.log(error);
        res.json({sucess:false,message:error.message});
    }

};

export {
    addProduct,
    listProducts,
    removeProduct,
    singleProducts
};