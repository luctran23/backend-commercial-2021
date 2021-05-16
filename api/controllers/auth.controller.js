const Account = require("../../models/Account");
const { registerValidation } = require('../../validations/validate')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const usernameExisted = await Account.findOne({username: req.body.username});
    if(usernameExisted) return res.status(400).send("Username already exists");

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const account = new Account({
        username: req.body.username,
        password: hashPassword,
        position: 0
    });
    try{
        const savedAccount = await account.save();
        res.json(savedAccount);
    }catch(err) {
        res.status(400).send(err);
    }
}
module.exports.login = async (req, res) => {
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const user = await Account.findOne({username: req.body.username});
    if(!user) return res.status(400).send("Username does not exist!");
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send("Invalid password");
    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({username: req.body.username, token: token});
}