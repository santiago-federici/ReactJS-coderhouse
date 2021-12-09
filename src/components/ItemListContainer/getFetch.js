export const products = 
[
{
    name: "PC Gamer",
    id: 1,
    price: "$60000",
    img: "../src/assets/pc/img-pc.jpg",
    category: "pc"
},
{
    name: "PC Gamer",
    id: 2,
    price: "$60000",
    img: "../src/assets/pc/img-pc1.webp",
    category: "pc"
},
{
    name: "Mouse Gamer",
    id: 3,
    price: "$10000",
    img: "../src/assets/mouse/img-mouse.jpg",
    category: "mouse"
},
{
    name: "Keyboard Gamer",
    id: 4,
    price: "$25000",
    img: "../src/assets/keyboard/img-keyboard.jpg",
    category: "keyboard"
},
]


export const getFetch = new Promise ((resolve) => {

    setTimeout( () => {
        resolve(products)
    }, 7000)
})