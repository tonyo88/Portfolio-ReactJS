const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) =>{
  nodeMailer.createTestAccount((err, account) =>{
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>  
    `;

    let transporter = nodeMailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: 'sunny.kuvalis@ethereal.email', 
        pass: 'GqBP1bk3hU7bwrDUWp' 
      }
    })

    let mailOptions = {
      from: 'tonyo_vanov@yahoo.com',
      to: 'sunny.kuvalis@ethereal.email',
      replyTo: 'tonyo_vanov@yahoo.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) =>{
        if(err){
          return console.log(err)
        }

        console.log("Message sent: %s", info.message)
        console.log("Message URL: %s", nodeMailer.getTestMessageUrl(info))
    })
  });

  res.writeHead(200);
  res.end();
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})