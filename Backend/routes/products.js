const { Category } = require('../models/category.js');
const { Product } = require('../models/products.js');
const express =require('express');
const cloudinary = require('cloudinary').v2;
require('dotenv/config');

cloudinary.config({
    cloud_name: process.env.Cloudinary_Config_Cloud_Name,
    api_key: process.env.Cloudinary_Config_api_key,
    api_secret: process.env.Cloudinary_Config_api_secret
})

const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const productList = await Category.find().populate('category');

        if(!productList){
            res.status(500).json({success: false})
        }
        res.send(productList);
    }catch (error){
        res.status(500).send(error.message);
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const product = await Product.find().populate('category');

        if(!product){
            res.status(500).json({message:"the product was not found", success: false})
        }
        res.status(200).send(product);
    }catch (error){
        res.status(500).send(error.message);
    }
})

router.post('/create', async(res,req)=>{
    try{
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(404).send('Invalid category');
        }

        (async () => {
            const pLimit = await import('p-limit');
            const limit = pLimit(2);
          })();
    
        const imagesToUpload = req.body.images.map((image)=>{
            return limit( async()=>{
                const result = await cloudinary.uploader.upload(image);
                return result;
            })
        })
    
        const uploadStatus = await Promise.all(imagesToUpload);
    
        const imgurl = uploadStatus.map((item)=>{
            return item.secure_url
        })
    
        if(!uploadStatus){
            return res.status(500).json({error:'Image cannot upload!', status: false})
        }


        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            images:imgurl,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews:req.body.numReviews,
            isfeatured: req.body.isfeatured,
        });

        product = await product.save();
        if(!product){
            return res.status(500).json({error:err, status: false})
        }

        res.status(201).json(product);

    }catch (error){
        res.status(500).send(error.message);
    }
});


router.put('/:id', async(res,req)=>{
    try{

        (async () => {
            const pLimit = await import('p-limit');
            const limit = pLimit(2);
          })();
    
        const imagesToUpload = req.body.images.map((image)=>{
            return limit( async()=>{
                const result = await cloudinary.uploader.upload(image);
                return result;
            })
        })
    
        const uploadStatus = await Promise.all(imagesToUpload);
    
        const imgurl = uploadStatus.map((item)=>{
            return item.secure_url
        })
    
        if(!uploadStatus){
            return res.status(500).json({error:'Image cannot upload!', status: false})
        }

        const product= await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                images:imgurl,
                brand: req.body.brand,
                price: req.body.price,
                category: req.body.category,
                countInStock: req.body.countInStock,
                rating: req.body.rating,
                numReviews:req.body.numReviews,
                isfeatured: req.body.isfeatured
            },
            {new: true}
        )

        if (!product){
            res.status(404).json({message:'The product can not be upgraded', status: false})
        }
        res.status(200).json({message:"The product is updated", status: true})

    }catch (error){
        res.status(500).send(error.message);
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const deleteProduct = await Product.findBYIdAndDelete(req.params.id);

        if(!deleteProduct){
            res.status(404).json({message:'Product not found', status: false})
        }
        res.status(200).send({message:'The product is deleted', status: true});
    }catch (error){
        res.status(500).send(error.message);
    }
})

module.exports = router;