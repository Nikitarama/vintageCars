// fetch("../data/data.json")
// .then ((store) => {
//     return store.json()
// })
// .then((storeCars) => {
//    let results = data.results;
//    console.table(results) 
// }) 

fetch('/data/data.json')

.then((store) => {
    return store.json();
})
.then((data) => {
    
let tbody = document.querySelector('tbody');

    for (const car of data) {
        console.log(item);
        Object.keys(data).forEach((item) => {
          return document.querySelector('tbody');
            tbody.innerHTML(item + ': ' + car[item]);
        })
};

Object.keys(data).forEach((item) => {
        // console.log(item);
  console.log(item);
        if(data[item].type == "vintage") {
            tbody.innerHTML +=
            `
            <tr>
            <th>${[item]}</th>
            <td>${data[item].image}</td>
            <td>${data[item].name}</td>
            <td>${data[item].year}</td>
            <td>${data[item].price}</td>
            <td>${data[item].amount}</td>
           
            </tr>
            `
        }
    })
});

// let cart = document.querySelectorAll('addToCart');

// for(let i=0; i < cart.length; i++) {
//     cart[i].addEventListener('click', () => {
//         console.log(amount[i]);
//     })
// }

// function amount(); 

// let productNumbers = local.Storage.getItem('amount');
//     console.log(productNumbers);
//     localStorage.setItem('amount', 1);
// }
    
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers) {
//         localStorage.setItem('amount', productNumbers + 1);
//         }else {
//             localStorage.setItem('amount', 1);
//         }

// let carts = document.querySelectorAll('addToCart');

// for(let i=0; i < cart.length; i++) {
//     cart[i].addEventListener('click', () => {
//         console.log(cart);
//     })
// }


/* <tbody>
              <tr>
                <th scope="row">1</th>
                <td><img src="../-Ferrari-250-GTO-1962-old-luxe-digital@2x.jpg.webp" style="width:140px; height:90px; border-radius: 20px;"></td>
                <td>Ferrari 250 GTO</td>
                <td>1962</td>
                <td>R14 000 000</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td><img src="../-Aston-Martin-DB5-1964-old-luxe-digital@2x.jpg.webp" style="width:140px; height:90px; border-radius: 20px;"></td>
                <td>Aston-Martin-DB5</td>
                <td>1964</td>
                <td>R7 000 000</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td><img src="../-Oldsmobile-Starfire-Convertible-1962-old-luxe-digital@2x.jpg.webp" style="padding:0; width:140px; height:90px; border-radius: 20px;"></td>
                <td>Oldsmobile-Starfire-Convertible</td>
                <td>1962</td>
                <td>R14 000 000</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td><img src="../merc gullwing.jpg" style="width:140px; height:90px; border-radius: 20px;"></td>
                <td>Mercedes Benz Gullwing</td>
                <td>1970</td>
                <td>R17 000 000</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td><img src="../-Chevrolet-El-Camino-SS-1970-old-luxe-digital@2x.jpg" style="padding:0; width: 140px; height:90px; border-radius: 20px;"></td>
                <td>Chevrolet-El-Camino-SS</td>
                <td>1972</td>
                <td>R2 000 000</td>
                <td>0</td>
                <tr>
                    <th scope="row">6</th>
                    <td><img src="../greatgasby car.jpg" style="width:140px; height:80px; border-radius: 20px;"></td>
                    <td>Rolls Royce</td>
                    <td>1970</td>
                    <td>R20 000 000</td>
                    <td>0</td>
                </tr>
              </tr>
            </tbody> */