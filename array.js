console.log('Array linked')

const root = document.getElementById('root')

const array = [
    {product: "Nike Air", price: 20, stock: 100, size: 43},
    {product: "Adidas Ultraboost", price: 35, stock: 75, size: 42},
    {product: "Puma RS-X", price: 28, stock: 50, size: 44},
    {product: "New Balance 550", price: 32, stock: 60, size: 41},
    {product: "Converse Chuck Taylor", price: 18, stock: 120, size: 40},
    {product: "Vans Old Skool", price: 22, stock: 80, size: 39},
    {product: "Reebok Classic", price: 25, stock: 90, size: 45},
    {product: "Jordan 1 Retro", price: 45, stock: 30, size: 43},
    {product: "Asics Gel-Lyte", price: 30, stock: 65, size: 42},
    // {product: "Under Armour HOVR", price: 27, stock: 70, size: 44}
];

// const includeArray = [ "banana", "apple", 7, 9 , 28, 'car']
// const item = includeArray.includes("apple") 

array.forEach((item)=>{
    const display = `
        <div style="padding:10px, margin: 10px, border: 1px solid gray;">
            <h2>${item.product}</h2>
            <div>
                <p>${item.price}</p>
                <p>${item.stock}</p>
                <p>${item.size}</p>
            </div>
        </div>
    `

   root.innerHTML += display
})
// array.map((item)=>{
//     console.log(item)
//     const display = `
//         <div style="padding:10px, margin: 10px, border: 1px solid gray;">
//             <h2>${item.product}</h2>
//             <div>
//                 <p>${item.price}</p>
//                 <p>${item.stock}</p>
//                 <p>${item.size}</p>
//             </div>
//         </div>
//     `;

//    root.innerHTML += display
// })


