const { Category } = require('../models/category.js');
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
        const catagoryList = await Category.find();

        if(!catagoryList){
            res.status(500).json({success: false})
        }
        res.send(catagoryList);
    }catch (error){
        res.status(500).send(error.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).send('Category not found');
      }
      res.send(category);
    } catch (error) {
      res.status(500).send(error.message);
    }
});

router.post('/create', async(res,req)=>{
    
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

    let category = new Category({
        name:req.body.name,
        image:imgurl,
        color:req.body.color
    })

    if(!category){
        res.status(500).json({error: err,success: false})
    }

    category = await category.save()
    res.status(201).json(category)
});

router.put('/:id', async(res,req)=>{

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

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name:req.body.name,
            image:imgurl,
            color:req.body.color
        },
        {
            new:true
        }
    )

    if(!category){
        res.status(500).json({message:'Category cannot be updated',success: false})
    }

    res.send(category)
});

router.delete('/:id', async (req, res) => {
    try {
      const deletedUser = await Category.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).send({message:'Category not found!', success:false});
      }
      res.status(200).json({message:'Categoty deleted', success: true})
    } catch (error) {
      res.status(500).send(error.message);
    }
});

module.exports = router;