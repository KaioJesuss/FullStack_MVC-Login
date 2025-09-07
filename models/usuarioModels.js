const Database = require("../utils/database");

class UsuarioModel{

    #usuarioEmail;
    #usuarioSenha;

    get usuarioEmail(){

        return this.#usuarioEmail;
    }

    set usuarioEmail(value){
        this.#usuarioEmail = value;
    }

    get usuarioSenha(){
        return this.#usuarioSenha
    }

    set usuarioSenha(value){
        this.#usuarioSenha = value;
    }  
    
    constructor(email, senha){
        this.#usuarioEmail = email;
        this.#usuarioSenha = senha;
    }

    async confirmar (){
        const sql = `SELECT * FROM TB_USUARIOLOGIN_ATV2 WHERE USER_EMAIL = ? AND USER_SENHA = ?`
        const banco = new Database();
        const paramentros = [this.#usuarioEmail, this.#usuarioSenha]
        const result = await banco.ExecutaComando(sql, paramentros);
        return result;
        
    }

}


module.exports = UsuarioModel