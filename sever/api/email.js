const PORT = process.env.PORT || 8080;
const fs = require('fs');
const { nanoid } = require('nanoid')

// Data

var userContact = [];
fs.readFile('database/user_contact.json', 'utf8', (err, data) => {
    if (err) return;
    userContact = JSON.parse(data);
});

const getInfoData = () => {
    const date = Date.now()
    return {
        id: nanoid(8),
        createDate: date,
        isNew: true,
        isRead: false,
        description: ''
    }
}

/********** Api ***********/

/** POST /api/email/add-user-contact */
console.log(`##email http://localhost:${PORT}/api/email/add-user-contact`);
exports.toAddUserContact = (req, res) => {
    const mapUserData = {
        name: req.query.name,
        email: req.query.email,
        phone: req.query.phone,
    }
    userContact.push({...getInfoData(), ...mapUserData});
    var json = JSON.stringify(userContact);

    fs.writeFile('database/user_contact.json', json, 'utf8', (err) => {
        if (err) throw err;
        res.status(200).send(`success`);
    });

};


/** GET /api/email/read-user-contact */
console.log(`##email http://localhost:${PORT}/api/email/read-user-contact`);
exports.toReadUserContact = (req, res) => {

    res.status(200).send(userContact);

};


/** POST /api/email/send-template */
console.log(`##email http://localhost:${PORT}/api/email/send-template`);
exports.toSendEmailTemplate = (req, res) => {
    res.status(200).send(``);

    console.log('!!!!!!!send-template', counter.value);
};
