localStorage.setItem('cars', JSON.stringify([
    {   "id": 1,
        "name": "Aston Martin DB5",
        "year": "1964", 
        "price": 70000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/KYFwCXcq/Aston-Martin-DB5-1964-old-luxe-digital-2x-jpg.webp",
        "amount": 0
    },
    {
        "id": 2,
        "name":"Chevrolet El Camino SS 250 GTO",
        "year": "1970", 
        "price": 2000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/wv0yMj1P/Chevrolet-El-Camino-SS-1970-old-luxe-digital-2x.jpg",
        "amount": 0
    },
    {
        "id": 3,
        "name": "Ferrari 250 GTO",
        "year":"1962", 
        "price": 14000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/JrZWL2fN/Ferrari-250-GTO-1962-old-luxe-digital-2x-jpg.webp",
        "amount": 0
    },
    {
        "id": 4,
        "name": "Oldsmobile Starfire Convertible",
        "year": "1962", 
        "price": 12000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/SxgcjdHV/Oldsmobile-Starfire-Convertible-1962-old-luxe-digital-2x-jpg.webp",
        "amount": 0
    },
    {
        "id": 5,
        "name": "Mercedes Benz Gullwing",
        "year": "1970", 
        "price": 17000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/pX4HxMLB/merc-gullwing.jpg",
        "amount": 0
    },
    {
        "id": 6,
        "name": "Rolls Royce",
        "year": "1960", 
        "price": 20000000,
        "type": "vintage",
        "image": "https://i.postimg.cc/2yL07MNz/greatgasby-car.jpg",
        "amount": 0
    }
]));

let x = JSON.parse(localStorage.getItem('cars'));
console.log(x)

Object.keys(x).forEach(index => {

    console.log(x[index].name);
});

let myCar = document.querySelector('.myCars');

if(data[item] && data[item].amount == "0") {
    myCar.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${item.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="carName">${item.name}</p>
                                    <p class="carPrice">${item.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                               
                        
                `
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



// const filter = [price];

// price.sort(lowest);
    
//     console.log(filter);

// function lowest(a, b); {
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