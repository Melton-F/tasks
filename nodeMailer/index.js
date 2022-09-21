const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"meltonmeni619@gmail.com",
        pass:"tiag dogn mmgt yvmi"   //pass:"tiag dogn mmgt yvmi"
    }
})

const infos = {
    from:"meltonmeni619@gmail.com",
    to:"chelladuraipreetha@gmail.com",
    subject:"tester in nodemailer",
    text:"from nodemailer"
}

transporter.sendMail(infos, (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mail sent successssssfullyyyyyyyy");
    }
})