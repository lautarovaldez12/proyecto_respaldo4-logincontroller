const {getUsers} = require('../data/users');
const {validationResult} = require('express-validator')
let users = getUsers();


module.exports = {
    login: (req, res) => {
        res.render("login",{
            title:"ingreso"
        });
    },
    loginProcess: (req, res) => {
        
        let errors = validationResult(req);

        if(errors){
            res.send('hay errores')
            /*
            return res.render('login',{
                errors : errors.errors
            })*/

        }else{
            res.send('no hay errores')
            /*
            let emailCheck = users.find(user => {
                return user.email == req.body.email
            })
    
            if(emailCheck){
    
                if(emailCheck.password == req.body.pass){
                    res.send('usuario correcto!');
                }else{
                    res.send('contraseña incorrecta');
                }
            }else{
                res.send('email incorrecto')
            }
            */           
        }

        

    }, 
    profile: (req, res) => {
        res.render("profile",{
            title:perfil
        });
    },
    
}