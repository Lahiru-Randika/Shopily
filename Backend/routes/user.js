const { Customer, Seller, Verifyme } = require('../models/user.js');
const express =require('express');
const cloudinary = require('cloudinary').v2;
require('dotenv/config');
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer')


cloudinary.config({
    cloud_name: process.env.Cloudinary_Config_Cloud_Name,
    api_key: process.env.Cloudinary_Config_api_key,
    api_secret: process.env.Cloudinary_Config_api_secret
})


const router = express.Router();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // True for 465, false for other ports
    auth: {
        user: process.env.AUTH_EMAIL, 
        pass: process.env.AUTH_PASSWORD 
    },
    tls: {
        rejectUnauthorized: false
    }
});

async function sendEmail(to, subject, htmlContent) {
    try {
        let info = await transporter.sendMail({
            from: process.env.AUTH_EMAIL,
            to: to, 
            subject: subject,
            html: htmlContent 
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


//----------------------------------------For customers and sellers----------------------------------------------//

//----------------------------------------User login part-------------------------------------------------------//

router.post('/login', async(req,res)=>{
    console.log(req.body)

    try{
        if ( !req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'Missing required fields', success: false });
        }

        if (req.body.hisrole==="Seller"){
            const existingSeller = await Seller.findOne({ selemail:req.body.email });
            if(!existingSeller){
                throw new Error("Seller is not registered before");
            }else{
                const checkValidity = await bcrypt.compare(req.body.password,existingSeller.selpassword)
                if (!checkValidity){
                    throw new Error("Invalid password. Check again")
                }else{
                    res.send({ message: "Seller logged successfully", success: true });
                }
            }
        }else if (req.body.hisrole==="Customer"){
            const existingCustomer = await Customer.findOne({ cusemail:req.body.email });
            if(!existingCustomer){
                throw new Error("Customer is not registered before");
            }else{
                const checkValidity = await bcrypt.compare(req.body.password,existingCustomer.cuspassword)
                if (!checkValidity){
                    throw new Error("Invalid password. Check again")
                }else{
                    res.send({ message: "User logged successfully", success: true });
                }
            }
        }else{
            throw new Error("Trying to use unsupported role to login");
        }

    }catch (error){
        res.status(500).send({ message: error.message, success: false });
    }
})


//----------------------------------------For customers and sellers----------------------------------------------//

//----------------------------------------Get user name---------------------------------------------------------//

router.get('/getcustomer', async (req, res) => {
    const cusemail = req.query.cusemail; 
    console.log(cusemail);
    try {
        const customer = await Customer.findOne({ cusemail: cusemail });
        if (!customer) {
            return res.status(404).send('Server Error!');
        }
        res.send(customer.cusname);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/getseller', async (req, res) => {
    const selemail = req.query.selemail; 
    console.log(selemail);
    try {
        const seller = await Seller.findOne({ selemail: selemail });
        if (!seller) {
            return res.status(404).send('Server Error!');
        }
        res.send(seller.selname);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//----------------------------------------Get user phone---------------------------------------------------------//

router.get('/getcustomerphone', async (req, res) => {
    const cusemail = req.query.cusemail;
    console.log(`Email received: ${cusemail}`);
    try {
        const customer = await Customer.findOne({ cusemail: cusemail });
        if (!customer) {
            return res.status(404).send('Customer not found!');
        }
        console.log(customer.cusphonenum)
        res.send(customer.cusphonenum);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



//----------------------------------------For customers-----------------------------------------------------------//

//----------------------------------------User registration part-------------------------------------------------//
router.post('/create/user', async(req,res)=>{

    console.log(req.body)
    
    try {
        if (!req.body.cusname || !req.body.cusphonenum || !req.body.cusemail || !req.body.cusaddress || !req.body.cuspassword) {
            return res.status(400).json({ message: 'Missing required fields', success: false });
        }

        if (!/^\d{10}$/.test(req.body.cusphonenum)) {
            return res.status(400).json({ message: 'Invalid phone number format. Must be a 10-digit number.', success: false });
        }

        const existingUser = await Customer.findOne({ cusemail:req.body.cusemail });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists', success: false });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.cuspassword, salt);

        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const saltotp = bcrypt.genSaltSync(10);
        const hashotp = bcrypt.hashSync(otp, saltotp);
        
        const mailOptions = {
            to: req.body.cusemail,
            subject: "Verify your email | Shopily",
            html: `<p>Enter <b>${otp}</b> in the app to verify your email address. This code will expire in <b>10 minutes</b>.<br/> Enjoy Shopily</p>`
        };        

        let verifyme = new Verifyme({
            name: req.body.cusname,
            phonenum: req.body.cusphonenum,
            email: req.body.cusemail,
            address: req.body.cusaddress,
            shoptype: 'notAseller',
            password: hash,
            otp:otp,//----------------------------------------This should be changed  to hashotp-------------------------------------------------//
            createdAt:Date.now(),
            expiresAt:Date.now() + 600000,
        });

        verifyme = await verifyme.save();

        sendEmail(mailOptions.to,mailOptions.subject ,mailOptions.html );

        if (!verifyme) {
            return res.status(500).json({ message: 'Error saving user',success: false });
        }
        res.send({ message: "OTP is sent successfully", success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', success: false });
    }

});


//----------------------------------------OTP verification part-------------------------------------------------//
router.post('/create/otpconform/customer', async(req,res)=>{
    console.log(req.body)
    
    try{
        if (!req.body.otp || !req.body.cusemail){
            throw Error("Empty otp details")
        }else{
            const cusOTPverification = await Verifyme.findOne({email:req.body.cusemail})
            if (!cusOTPverification){
                throw new Error("Internal OTP process error")
            }else{
                // const {expiresAt, otp:hashedotp} = cusOTPverification;
                const {expiresAt, otp:otp} = cusOTPverification;//----------------------------------------This should be removed and unpin the previous-------------------------------------------------//
 
                if (expiresAt < Date.now()){
                    await Verifyme.deleteMany({email:req.body.cusemail})
                    throw new Error("Code has expired. Please try again")
                }else{
                    // const checkValidity = await bcrypt.compare(req.body.otp,hashedotp)

                    // if (!checkValidity){
                    if (!req.body.otp==otp){//----------------------------------------This should be remove and unpin the previous-------------------------------------------------//
                        throw new Error("Invalid OTP. Check your inbox again")
                    }else{

                        let customer = new Customer({
                            cusname: cusOTPverification.name,
                            cusphonenum: cusOTPverification.phonenum,
                            cusemail: cusOTPverification.email,
                            cusaddress: cusOTPverification.address,
                            cuspassword: cusOTPverification.password,
                        });

                        customer = await customer.save();
                        await Verifyme.deleteMany({email:req.body.cusemail})
                        res.send({ message: "User created successfully", success: true });
                    }
                }
            }
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error', success: false });
    }
});


//----------------------------------------OTP resending-------------------------------------------------//
router.post('/create/otpconform/customer/resend', async(req,res)=>{
    try{

    }catch{

    }
})


//----------------------------------------For sellers---------------------------------------------------------//

//----------------------------------------Seller registration part--------------------------------------------//
router.post('/create/seller', async(req,res)=>{
    
    console.log(req.body)
    
    try {
        if (!req.body.selname || !req.body.selphonenum || !req.body.selemail || !req.body.seladdress || !req.body.selpassword ||!req.body.selshoptype) {
            return res.status(400).json({ message: 'Missing required fields', success: false });
        }

        if (!/^\d{10}$/.test(req.body.selphonenum)) {
            return res.status(400).json({ message: 'Invalid phone number format. Must be a 10-digit number.', success: false });
        }

        const existingUser = await Seller.findOne({ selemail:req.body.selemail });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists', success: false });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.selpassword, salt);

        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const saltotp = bcrypt.genSaltSync(10);
        const hashotp = bcrypt.hashSync(otp, saltotp);
        
        const mailOptions = {
            to: req.body.selemail,
            subject: "Verify your email | Shopily",
            html: `<p>Enter <b>${otp}</b> in the app to verify your email address. This code will expire in <b>10 minutes</b>.<br/> Enjoy Shopily</p>`
        };        

        let verifyme = new Verifyme({
            name: req.body.selname,
            phonenum: req.body.selphonenum,
            email: req.body.selemail,
            address: req.body.seladdress,
            shoptype: req.body.selshoptype,
            password: hash,
            otp:hashotp,
            createdAt:Date.now(),
            expiresAt:Date.now() + 600000,
        });

        verifyme = await verifyme.save();

        sendEmail(mailOptions.to,mailOptions.subject ,mailOptions.html );

        if (!verifyme) {
            return res.status(500).json({ message: 'Error saving seller', success: false });
        }
        res.send({ message: "OTP is sent successfully", success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', success: false });
    }


});


//----------------------------------------OTP verification part-------------------------------------------------//
router.post('/create/otpconform/seller', async(req,res)=>{
    console.log(req.body)
    
    try{
        if (!req.body.otp || !req.body.selemail){
            throw Error("Empty otp details")
        }else{
            const selOTPverification = await Verifyme.findOne({email:req.body.selemail})
            if (!selOTPverification){
                throw new Error("Internal OTP process error")
            }else{
                const {expiresAt, otp:hashedotp} = selOTPverification;
 
                if (expiresAt < Date.now()){
                    await Verifyme.deleteMany({email:req.body.cusemail})
                    throw new Error("Code has expired. Please try again")
                }else{
                    const checkValidity = await bcrypt.compare(req.body.otp,hashedotp)

                    if (!checkValidity){
                        throw new Error("Invalid OTP. Check your inbox again")
                    }else{

                        let seller = new Seller({
                            selname: selOTPverification.name,
                            selphonenum: selOTPverification.phonenum,
                            selemail: selOTPverification.email,
                            seladdress: selOTPverification.address,
                            selshoptype: selOTPverification.shoptype,
                            selpassword: selOTPverification.password,
                        });

                        seller = await seller.save();
                        await Verifyme.deleteMany({email:req.body.selemail})
                        res.send({ message: "User created successfully", success: true });
                    }
                }
            }
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error', success: false });
    }
});

//----------------------------------------OTP resending-------------------------------------------------//
router.post('/create/otpconform/seller/resend', async(req,res)=>{
    try{

    }catch{

    }
})



// router.put('/:id', async(res,req)=>{

//     (async () => {
//         const pLimit = await import('p-limit');
//         const limit = pLimit(2);
//       })();

//     const imagesToUpload = req.body.images.map((image)=>{
//         return limit( async()=>{
//             const result = await cloudinary.uploader.upload(image);
//             return result;
//         })
//     })

//     const uploadStatus = await Promise.all(imagesToUpload);

//     const imgurl = uploadStatus.map((item)=>{
//         return item.secure_url
//     })

//     if(!uploadStatus){
//         return res.status(500).json({error:'Image cannot upload!', status: false})
//     }

//     const category = await Category.findByIdAndUpdate(
//         req.params.id,
//         {
//             name:req.body.name,
//             image:imgurl,
//             color:req.body.color
//         },
//         {
//             new:true
//         }
//     )

//     if(!category){
//         res.status(500).json({message:'Category cannot be updated',success: false})
//     }

//     res.send(category)
// });

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