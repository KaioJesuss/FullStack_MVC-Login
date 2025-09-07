
const usuarioModel = require("../models/usuarioModels");

class HomeController{


    loginView(req, res)
    {
        res.render('login', { msgResposta: null , tipoCss: ""});
    }

    async login (req, res)
    {
        const {email, senha} = req.body;
        let user = new usuarioModel(email, senha);
        const result = await user.confirmar();

        if(result.length > 0)
        {

            res.render('login', {msgResposta: 'Login com Sucesso', tipoCss: "correto"})
        }
        else
        {
             res.render('login', {msgResposta: 'Email ou senha invalidos', tipoCss: "erro"})

        }
        
    }
}

module.exports = HomeController;