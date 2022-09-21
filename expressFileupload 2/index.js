const express = require('express')
const upload = require('express-fileupload')
const path = require('path')
const app = express()

app.use(upload())
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/', (req, res)=>{
    if(req.files){
        // console.log(req.files);
        const file = req.files.image
        console.log(file);
        const filename = file.name
        // console.log(filename);
        file.mv('./The files/'+filename, function(err){             //file.mv = [function:mv]
            if(err){
                res.send(err)
            }
            else{
                res.send('file has been uploaded')
            }
        })                                     
    }
})

// file.mv()
app.listen(3000)