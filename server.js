const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();

const port = process.env.PORT || 5000;

app.use('/v1', route);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: '',
        pass: '',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT  ASTROLOG_DEMIDOVA
});

route.post('/text-mail', (req, res) => {
    const { to, subject, email, phone } = req.body;
    const mailData = {
        from: 'astrologdemidova777@gmail.com',
        to: 'astrologdemidova777@gmail.com',
        subject: 'Новая заявка с сайта astrologdemidova.ru',
        text: `
        Появился вопрос у человека:
        email: ${email}
        phone: ${phone}
        `,
        html: `
        Появился вопрос у человека:
        email: ${email}
        phone: ${phone}
        `,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});
