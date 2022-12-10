localStorage.setItem('cars', JSON.stringify([
    {   "id": 1,
        "name": "Aston Martin DB5",
        "year": "1964", 
        "price": 70000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/KYFwCXcq/Aston-Martin-DB5-1964-old-luxe-digital-2x-jpg.webp",
        "quatity": 0
    },
    {
        "id": 2,
        "name":"Chevrolet El Camino SS 250 GTO",
        "year": "1970", 
        "price": 2000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/wv0yMj1P/Chevrolet-El-Camino-SS-1970-old-luxe-digital-2x.jpg",
        "quatity": 0
    },
    {
        "id": 3,
        "name": "Ferrari 250 GTO",
        "year":"1962", 
        "price": 14000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/JrZWL2fN/Ferrari-250-GTO-1962-old-luxe-digital-2x-jpg.webp",
        "quatity": 0
    },
    {
        "id": 4,
        "name": "Oldsmobile Starfire Convertible",
        "year": "1962", 
        "price": 12000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/SxgcjdHV/Oldsmobile-Starfire-Convertible-1962-old-luxe-digital-2x-jpg.webp",
        "quatity": 0
    },
    {
        "id": 5,
        "name": "Mercedes Benz Gullwing",
        "year": "1970", 
        "price": 17000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/pX4HxMLB/merc-gullwing.jpg",
        "quatity": 0
    },
    {
        "id": 6,
        "name": "Rolls Royce",
        "year": "1960", 
        "price": 20000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/2yL07MNz/greatgasby-car.jpg",
        "quatity": 0
    }
]));

let checkout = [];
localStorage.setItem('myCheckout', JSON.stringify(checkout))
//parse into localStorage
let allCars = JSON.parse(localStorage.getItem('cars'));

Object.keys(allCars).forEach((carKey) => {
//show names of cars in console
    let w = allCars[carKey];
    let myCar = document.querySelector("#myCars");
    console.log(allCars[carKey].type);
    myCar.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${w.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="carName">${w.name}</p>
                                    <p class="carPrice">${w.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                               
                        
                `
})

let addBtn = document.querySelectorAll('.addToCart');

Object.keys(addBtn).forEach((item) => {
        addBtn[item].addEventListener('click', (e) => {
            console.log('clicked', addBtn[item])
            console.log(allCars[item])
            checkout.push(allCars[item]);
            alert('added to cart');
            console.log(checkout)
            localStorage.setItem('myCheckout', JSON.stringify(checkout));
        })
    }
)

let lowest = JSON.parse(localStorage.getItem('cars'));

let display = lowest.filter(car => car.price > 15000000);

console.log(display);

// function lowest()
// Object.keys(allCars).forEach((carKey) => {
//         console.log(allCars[carKey].item);

//         if(data[item] && data[item].price >= 10000000 ) {
//                 myCar.innerHTML +=
//                         `
//                             <div class="col-md-4">
//                                 <div class="card" style="width: 18rem;">
//                                     <img src=${item.image} class="card-img-top" alt="...">
//                                         <div class="card-body">
                                            // <p class="carName">${data[item].name}</p>
                                            // <p class="carPrice">${item.price}</p>
                                            // <button class="addToCart" href="#">Purchase</button>
//                                         </div>
//                                 </div>
//                             </div>
                                       
                                
//                         `
//                     }


// Object.keys(data).forEach((item) => {
//     let data = 
// }


// if(data[item].type == "vintage") {
//     myCar.innerHTML +=
//                 `
//                     <div class="col-md-4">
//                         <div class="card" style="width: 18rem;">
//                             <img src=${data[item].image} class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <p class="carName">${data[item].name}</p>
//                                     <p class="carPrice">${data[item].price}</p>
//                                     <button class="addToCart" href="#">Purchase</button>
//                                 </div>
//                         </div>
//                     </div>
                               
                        
//                 `
// };


    
                


// fetch("../data/data.json")
// .then ((store) => {
//     return store.json()
// })
// .then((storeCars) => {
//    let results = data.results;
//    console.table(results) 
// }) 
// .then((data) => {
//     let myCars = document.querySelectorAll('tbody').innerHTML;

// function display()
//     Object.keys(data).forEach((item) => {
//         console.log(data[item].name);


//         if(data[item] && data[item].amount == "0") {
//             myCars.innerHTML +=
//             `
//                 <div class="col-md-4">
//                     <div class="card" style="width: 18rem;">
//                         <img src=${item.image} class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <p class="carName">${item.name}</p>
//                                 <p class="carPrice">${item.price}</p>
//                                 <button class="addToCart" href="#">Purchase</button>
//                             </div>
//                     </div>
//                 </div>
                           
                    
//             `
//         }
//     })
// });

// display();
// localStorage.setItem('tbody',JSON.stringify(data));



// let store = 
// localStorage.setItem('store',JSON.stringify('list'){
// let store = JSON.parse(localStorage.getItem('list'));
// }
// console.log('name');




// function display ( array = []) {
//     cars.innerHTML = "";

//     for (let i = 0; i < array.length; i++) {
//         let item = array[i];

//     }
// }
// display(item.price);



// const filter = [cars.price];

// price.sort(lowest());
    
//     console.log(filter);

// function lowest(a, b) {
//     return a - b
// }


// fetch('../data/data.json')
// .then((store) => {
//     return store.json();
// })
// .then((data) => {
    
//     let tbody = document.querySelector('tbody');

//     for (const car of data) {
//         // console.log(kar);
//         Object.keys(car).forEach((item) => {
//             console.log(item + ': ' + car[item]);
//         })
//     }

//     Object.keys(data).forEach((item) => {
//         console.log(item);
//         // console.log(item);
//         if(data[item] == "vintage") {
//             tbody.innerHTML +=
//             `
//             `
//         }
//     })
// });

// let cart = document.querySelectorAll('.addToCart');

// for(let i=0; i < cart.length; i++) {
//     cart[i].addEventListener('click', () => {
//         carNumbers();
//     })
// }
// let cart = document.querySelectorAll('addToCart');

// for(let i=0; i < cart.length; i++) {
//     cart[i].addEventListener('click', () => {
//         console.log(carNumber);
//     })
// }

// function carNumber(); 
// // {
//     let productNumbers = local.Storage.getItem('carNumbers');
//     console.log(productNumbers);
//     localStorage.setItem('carNumbers', 1);
// }
    
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers) {
//         localStorage.setItem('carNumbers', productNumbers + 1);
//         }else {
//             localStorage.setItem('carNumbers', 1);
//         }
    

//     console.log(productNumbers);

// //     localStorage.setItem('carNumbers', 1);
// }