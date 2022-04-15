export default function (req, res) {
    const { body } = req
    const nodemailer = require('nodemailer')
    // send Invoice
    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'smtp.gmail.com',
      auth: {
          user: 'Diamondgoldid@gmail.com',
          pass: 'Binomo123',
          },
      secure: false,
    });

    const mailData = {
        from: 'Diamondgoldid@gmail.com',
        to: 'Diamondgoldid@gmail.com',
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