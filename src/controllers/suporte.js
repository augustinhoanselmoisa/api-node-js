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


            const { usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome  } = request.body;
const usu_ativo = 1;

// instrução SQL
const sql = `
    INSERT INTO suporte
        (usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome )
    VALUES
        (?, ?, ?, ?, ?, ?, ?);
`;

// definição dos dados a serem inseridos em um array
const values = [ usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome ];

// execução da instrução sql passando os parâmetros
const [result] = await db.query(sql, values);

// identificação do ID do registro inserido
const dados = {
    id: result.insertId,
    usu_id,
    asst_id, 
    sup_mensagem, 
    sup_status,
    sup_data_criacao, 
    sup_email,
    sup_nome

};
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Suporte', 
                dados: dados
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