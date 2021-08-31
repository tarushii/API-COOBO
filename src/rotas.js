const express = require('express');

const { listarDocumentos } = require('./controladores/listar');
const { buscarDocumento } = require('./controladores/buscar');
const { adicionarDocumento } = require('./controladores/adicionar');
const { deletarDocumento } = require('./controladores/deletar');

const rotas = express();

rotas.get('/documents', listarDocumentos);
rotas.get('/documents/:id', buscarDocumento);
rotas.post('/documents', adicionarDocumento);
rotas.patch('/documents/:id', deletarDocumento);

module.exports = rotas;