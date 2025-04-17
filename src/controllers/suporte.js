const db = require('../dataBase/connection'); 

module.exports = {
    async listarSuporte(request, response) {
        try {

            const sql =`
            SELECT 
            sup_id, usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome 
            FROM SUPORTE;
            `;
             
            const [rows]= await db.query(sql)

            const nRegistros =rows.length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Suporte', 
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarSuporte(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Suporte', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarSuporte(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no Suporte', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarSuporte(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Suporte', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  