export default function (req, res) {
    const { body } = req
    const nodemailer = require('nodemailer')
    // send Invoice
    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'smtp.gmail.com',
      auth: {
          user: 'diamondgoldid@gmail.com',
          pass: 'Vanhauten25@',
          },
      secure: false,
    });

    const mailData = {
        from: 'diamondgoldid@gmail.com',
        to: 'diamondgoldid@gmail.com',
        subject: 'Email Konfirmasi',
        text: body
        
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err){
          console.log(err)
        }
        else{
          console.log(info)
          res.status(200).json({
            responCode:1,
            respon: 'Email Terkirim'
          })
        }
    })
    
}