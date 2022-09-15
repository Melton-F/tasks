const express = require('express');
const multer = require('multer');

const app = express();
 
const storedFile = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./images');    
    },
    filename: (req,file,cb) => {
        cb(null , Date.now() + file.originalname);   
    }
});

//middleware
const uploadFile = multer({storage: storedFile});

//Route
//single image
app.post('/api/single-image',uploadFile.single('phto'),(req,res)=>{
    // console.log(req.file);
    res.send('file uploaded')
})
//multiple images
app.post('/api/multiple-image',uploadFile.array('phtos', 5),(req,res)=>{
    // console.log(req.files);
    res.send('files uploaded')
})


//server
app.listen(3000);
