const nodeMailer = require('nodemailer');

module.exports = (formulario) =>{
    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com", 
        SecureConnection: false, 
        port: 587, 
        requiresAuth: true, 
        domínios: [ "gmail.com", "googlemail.com"], 
        auth: {
            user: 'reisdanieleoliveira@gmail.com',
            pass: 'd4n13l3r09092003'
        }
    });
    const mailOptions = {
        from: `"${formulario.nome}" <${formulario.email}>`,
        to: 'reisdanieleoliveira@gmail.com',
        subject: 'ideias app',
        html:`
        <strong>Nome:</strong> ${formulario.nome} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Categoria:</strong> ${formulario.categoria} <br/>
        <strong>Descrição:</strong> ${formulario.descricao}
        `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log(err)
        else
        console.log(info);
        });
    transporter.close();
}