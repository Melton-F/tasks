const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()

const storageEngine = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './photos')
    },
    filename: (req, file, cb)=>{
        // console.log(file);
        cb(null,file.originalname)
    }
})

const upload = multer({storage : storageEngine})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/singleImage', upload.single('singleFile'),(req, res)=>{
    // console.log(req.file)
    res.send("file uploaded")
} )

app.post('/multipleImage', upload.array('multiFile', 2),(req, res)=>{
    // console.log(req.file)
    res.send("multi file uploaded")
} )
app.listen(3000)