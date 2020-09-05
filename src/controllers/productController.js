const Produto = require('../models/produto');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const valor = req.body.valor;

    Produto.create({
        nome: nome,
        valor: valor
    })

    .then(produto => {
        if (produto) {
            res.status(status.OK).send(produto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};

exports.Drop = (req, res, next) => {
    const nome = req.body.nome;
    const valor = req.body.valor;

    Produto.create({
        nome: nome,
        valor: valor
    })

    .then(produto => {
        if (produto) {
            res.status(status.OK).send(produto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};
exports.Select = (req, res, next) => {
    const nome = req.body.nome;
    const valor = req.body.valor;

    Produto.create({
        nome: nome,
        valor: valor
    })

    .then(produto => {
        if (produto) {
            res.status(status.OK).send(produto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};

exports.Alter = (req, res, next) => {
    const nome = req.body.nome;
    const valor = req.body.valor;

    Produto.create({
        nome: nome,
        valor: valor
    })

    .then(produto => {
        if (produto) {
            res.status(status.OK).send(produto);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};


