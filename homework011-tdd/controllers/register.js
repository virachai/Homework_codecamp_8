const registerService = require('../services/register-service')
const db = require('../models')


module.exports = function() {
    return {
        async registerCompleted(req, res, next) {
            const dataSend = await registerService.userCreate(db, req.body.username, req.body.password, req.body.confirm_password, req.body.email, req.body.confirm_email, req.body.member_no)

            res.render('register_result', dataSend);

            next();
        }
    }
}