const express = require('express');
const routerBebidas = express.Router();

const bebidas = [
    {
        categoria: "bebidas",
        nombre: "CocaCola.",
        imagen: null,
        precio: "$170",
    },
    {
        categoria: "bebidas",
        nombre: "Brahama.",
        imagen: null,
        precio: "$500",
    },
    {
        categoria: "bebidas",
        nombre: "Absolut",
        imagen: null,
        precio: "$1500",
    },
];

routerBebidas.get('/', (req, res) => {
// req.params ===> si es por http://:${id}
// req.query ===> si es por ?algo=value
 if ( path) {
    const beb = bebidas.filter( com => com.categoria === path);
    res.json(beb);
 }
})

module.exports = routerBebidas;