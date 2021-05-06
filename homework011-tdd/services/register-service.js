const db = require('../models')

module.exports = function() {
    return {
        async userCreate(db, username, password, confirm_password, email, confirm_email, member_no) {
            if (username == '') {
                return {
                    errorMessage: 'Username should not be empty !',
                }
            }

            //Be at least 8 characters in length
            if (username.length < 6 ) {
              return {
                  errorMessage: 'Username should be at least 6 characters in length !',
              }
            }

            if (username.search(' ') > -1 ){
              return {
                  errorMessage: 'Spaces not allowed in Username !'
              }
          }

            if (password == '') {
                return {
                    errorMessage: 'Password should not be empty !',
                }
            }

            if (password.length < 8 ) {
              return {
                  errorMessage: 'Password should be at least 8 characters in length !',
              }
            }

            if (confirm_password == '') {
                return {
                    errorMessage: 'Confirm_password should not be empty !',
                }
            }

            if (email == '') {
                return {
                    errorMessage: 'Email should not be empty !',
                }
            }

            if (confirm_email == '') {
                return {
                    errorMessage: 'Confirm_email should not be empty !',
                }
            }

            if (member_no == '') {
                return {
                    errorMessage: 'Member_no should not be empty !',
                }
            }

            if (password !== confirm_password) {
                return {
                    errorMessage: 'Password is not match !'
                }
            }

            if (email != confirm_email) {
                return {
                    errorMessage: 'Email is not match !'
                }
            }
            
            if (email.search('@') == -1 ){
                return {
                    errorMessage: 'Wrong email format !'
                }
            }

            if (member_no.substr(0,1).match(/[A-Z]/) == null ){
                return {
                    errorMessage: 'Wrong member_no format !'
                }
            }

            const user = db.user.create({
                username: username,
                password: password,
                email: email,
                member_no: member_no
            })

            return {
                errorMessage: '',
                username: username,
                userId: user.id
            }
        }
    }
}