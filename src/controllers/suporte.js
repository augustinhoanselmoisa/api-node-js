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


const sql = `
    INSERT INTO suporte
        (usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome )
    VALUES
        (?, ?, ?, ?, ?, ?, ?);
`;


const values = [ usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome ];


const [result] = await db.query(sql, values);


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
           
const { usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome} = request.body;

const { id } = request.params;

const sql = `
    UPDATE suporte SET
        usu_id = ?, asst_id = ?, sup_mensagem = ?, sup_status = ?, sup_data_criacao = ?, sup_email = ? , sup_nome = ?
    WHERE
        usu_id = ?`;
        
        ;


const values = [ usu_id, asst_id, sup_mensagem, sup_status, sup_data_criacao, sup_email, sup_nome];

const [result] = await db.query(sql, values);

if (result.affectedRows == 0) {
    return response.status(404).json({
        sucesso: false,
        mensagem: `Usuário ${id} não encontrado!`,
        dados: null
    });

};
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
                mensagem: 'Alteração no Suporte', 
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
    async apagarSuporte(request, response) {
        try {
            const { id } = request.params;
            const sql = `
            DELETE FROM suporte
            WHERE usu_id = ?;
            `;
            const values = [ id ];
            const [result] = await db.query(sql, values);
            if (result.affectedRows == 0) {
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Usuário ${id} não encontrado!`,
                    dados: null
                });
            };


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