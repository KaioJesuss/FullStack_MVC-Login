

class HomeController{


    loginView(req, res)
    {
        res.render('login', { msgResposta: null , tipoCss: ""});
    }

    login (req, res)
    {
        const email = req.body.email;
        const senha = req.body.senha;
        let resposta = "";
        let tipo = "";

        if(email === "kaioj@gmail.com" && senha === "123456")
        {
            resposta = 'Login com Sucesso'
            tipo = 'correto'
        }
        else
        {
            resposta = 'Email ou senha invalidos'
            tipo = 'erro'
        }
        res.render("login", { msgResposta: resposta, tipoCss: tipo});
    }
}

module.exports = HomeController;