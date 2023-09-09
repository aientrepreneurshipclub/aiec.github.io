const {v2 : cloudinary} = require('cloudinary');
module.exports= destroyImage=(image)=>{
    cloudinary.config({ 
        cloud_name: `${process.env.CLOUDINARY_NAME}`,
        api_key: `${process.env.CLOUDINARY_API}`, 
        api_secret: `${process.env.CLOUDINARY_SECRET}` 
    });
    cloudinary.uploader.destroy(image)
}      
