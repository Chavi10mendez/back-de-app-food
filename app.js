const express = require('express');
const server = express();
server.use(express.json());

const comidas = [
    {
        categoria: "Hamburguesas",
        nombre: "Hamburguesa Simple.",
        imagen: "https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/1676/fancy/r_1676_1455638770.jpg",
        precio: "$400.",
        descripcion: "contiene un pati, queso, lechuga y tomate.",
        id: 1,
    },
    {
        categoria: "Hamburguesas",
        nombre: "Hamburguesa Doble.",
        imagen: "https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:1-4-product-tile-desktop",
        precio: "$490.",
        descripcion: "contiene dos patis, queso, chebolla, lechuga y tomate.",
        id:2
    },
    {
        categoria: "Hamburguesas",
        nombre: "Hamburguesa cheddar y BBQ.",
        imagen: "https://w7.pngwing.com/pngs/687/572/png-transparent-hamburger-cheeseburger-chicken-sandwich-french-fries-sriracha-sauce-others-food-recipe-cheese.png",
        precio: "$700.",
        descripcion: "tiene dos patis, queso cheddar, lechuga, morron, tomate, BBQ, y cebolla de verdeo",
        id:3
    },
    {
        categoria: "Pizzas",
        nombre: "Pizza de tomate y albaca.",
        imagen: "https://static-sevilla.abc.es/media/gurmesevilla/2013/04/pizza-margarita.jpg",
        precio: "$400.",
        descripcion: "contiene queso cremoso, ajo, pimienta negra, tomate y albaca.",
        id: 4,
    },
    {
        categoria: "Pizzas",
        nombre: "Pizza de tomate y salame.",
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/13003/640x426/5707.jpg.webp",
        precio: "$400.",
        descripcion: "contiene muzarella, tomate, pimienta negra, salame y rallado de albaca.",
        id: 5,
    },
    {
        categoria: "Pizzas",
        nombre: "Pizza de tomate y salame.",
        imagen: " https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-master768-v2.jpg?w=1280&q=75",
        precio: "$400.",
        descripcion: "contiene muzarella, tomate, pimienta negra, salame y rallado de albaca.",
        id: 6,
    },
    {
        categoria: "Empanadas",
        nombre: "Empanada de carne frita.",
        imagen: "https://ibb.co/b5y16vs",
        precio: "$90 c/u.",
        descripcion: "contiene carne, cebolla, aceituna, zanaoria, morron y viene con limon.",
        id: 7,
    },
    {
        categoria: "Empanadas",
        nombre: "Empanada pollo frita.",
        imagen: "https://cocinachic.net/wp-content/uploads/2017/07/EmpanadaPollo.jpg",
        precio: "$80 c/u.",
        descripcion: "contiene pollo.",
        id: 8,
    },
    {
        categoria: "Milanesas",
        nombre: "Sandwich de milanga.",
        imagen: "https://i.pinimg.com/originals/27/fd/2b/27fd2bbafe1afd4a22ee439e7b3fc0c3.jpg",
        precio: "$440.",
        descripcion: "contiene milanesa de carne, lechuga, tomate, huevo revuelto, jamon y queso.",
        id: 9,
    },
    {
        categoria: "Pastas",
        nombre: "Fideos con tuco.",
        imagen: "https://img.freepik.com/fotos-premium/espaguetis-plato-sobre-fondo-blanco_45583-1179.jpg",
        precio: "$300.",
        descripcion: "contiene fideos caseros con salsa de tomate especial y queso parmesano.",
        id: 10,
    },
    {
        categoria: "Ensaladas",
        nombre: "Ensalada mix.",
        imagen: "https://ibb.co/3MCg6tW",
        precio: "$80 c/u.",
        descripcion: "contiene lechuga, aceituna, pepino, queso fresco, tomate y cebolla morada.",
        id: 11,
    },
];

server.get('/home', (req, res) => {
// req.params ===> si es por http://:${id}
// // req.query ===> si es por ?algo=value
//    const {id} = req.params;
//    if ( id ) {
//     const cat = comidas.filter( com => com.id === Number(id));
//     res.json(cat);
//    }
  res.json(comidas)
})



// const routerBebidas = require('./Back/src/routes/ruta1');
// server.use('/', routerBebidas);

server.listen(3001);
