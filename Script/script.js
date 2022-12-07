fetch("../data/data.json")
.then ((store) => {
    return store.json()
})
// .then((storeCars) => {
//    let results = data.results;
//    console.table(results) 
// }) 
.then((data) => {
    let myCars = document.querySelector('#myCars');
    Object.keys(data).forEach((item) => {
        console.log(data[item].image);
        if(data[item] && data[item].type == "vintage") {
            myCars.innerHTML +=
            `
            <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img src=${data[item].image} class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="carName">${data[item].name}</p>
                                <p class="carPrice">${data[item].price}</p>
                                <button class="addToCart">Purchase</button>
                            </div>
                            </div>
                           
                    
            `
        }
    })
})

// const filter = [carPrice];

// points.sort(function(a, b);

// {return b - a});



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


// function carNumbers() {
//     let productNumbers = local.Storage.getItem('carNumbers');
//     // console.log(productNumbers);
//     localStorage.setItem('carNumbers', 1);
// }
    
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers) {
//         localStorage.setItem('carNumbers', productNumbers + 1);
//         }else {
//             localStorage.setItem('carNumbers', 1);
//         }
//     }

//     console.log(productNumbers);

//     localStorage.setItem('carNumbers', 1);
// }