// const { Router } = require('express');
// const serverRouter = Router();
// // server.use(express.json());

// const comidas = [
//     {
//         categoria: "Hamburguesas",
//         nombre: "Hamburguesa Simple.",
//         imagen: "https://ibb.co/3MCg6tW",
//         precio: "$400",
//         descripcion: "contiene un pati, queso.",
//         id: 1,
//     },
//     {
//         categoria: "Hamburguesas",
//         nombre: "Hamburguesa Doble.",
//         imagen: null,
//         precio: "$600",
//         descripcion: "contiene dos patis, queso, lechuga y tomate.",
//     },
//     {
//         categoria: "Hamburguesas",
//         nombre: "Hamburguesa cheddar y barbacoa",
//         imagen: null,
//         precio: "$700",
//         descripcion: "Hamburguesa",
//     },
// ];

// routerComidas.get('/:id', (req, res) => {
// // req.params ===> si es por http://:${id}
// // req.query ===> si es por ?algo=value
//    const {id} = req.params;
//    if ( id ) {
//     const cat = comidas.filter( com => com.id === Number(id));
//     res.json(cat);
//    }
// })

// module.exports = routerComidas;