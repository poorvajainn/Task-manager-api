const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'poorvajain1810@gmail.com',
        subject:'Welcome to the app',
        text:'hi '+name+'i dont have alot of time i need to tell you something please respond'
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'poorvajain1810@gmail.com',
        subject:'Sorry to see you leave!',
        text:'i dont have alot of time i need to tell you something please respond'
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}
