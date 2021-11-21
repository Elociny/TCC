import db from '../db';
import express from 'express';
const Router = express.Router;
const app = Router();

app.get('/', async (req, resp) => {
  try {
    const data = await db.infod_ecm_tb_roupas.findAll({
      attributes: getFields()
    });
    resp.send(data);
  } catch (e) {
    resp.send({ mensagem: 'Ocorreu um erro! ha ha ah'})
  }
})


app.get('/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const data = await db.infod_ecm_tb_roupas.findOne({
      where: { 'id_roupa':  id },
      attributes: getFields()
    });

    if (data == null) {
      return resp.send({ mensagem: 'Produto não encontrado'});
    }

    resp.send(data);
  } catch (e) {
    resp.send({ mensagem: 'Ocorreu um erro! ha ha ah'})
  }
})

app.delete('/:id', async (req, resp) => {
  try {
    resp.send('ok');
  } catch (e) {
    resp.send({ mensagem: 'Ocorreu um erro! ha ha ah'})
  }
})

function getFields() {
  return [
    ['id_roupa', 'id'],
    ['id_categoria', 'id'],
    ['ds_roupa', 'descricao'],
    ['ds_produto', 'descricao'],
    ['vl_preco', 'preco'],
    ['tp_roupa', 'tipo'],
    ['ds_tamanho', 'descricao'],
    ['qtd_disponivel', 'quantidade'],
    ['ds_cor', 'descricao']
  ]
}

export default app;