
fetch("data/data.json")
.then ((store) => {
    return (store).json()
})
.then((storeCars) => {
    
}) 

const cars = [
    'Aston Martin',
    'Ferrari',
    'Mercedez Benz',
    'Chevrolet',
    'Rolls Royce',
    'Oldmobile Starfire'
];

console.log(cars);



// const calDisplay = document.getElementById("calDisplay");
// const scrDisplay = document.getElementById("scrDisplay");
// let emptyArr = [];
// let Sum = cart();


// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((a, b) => {
//     return a + b;
// })
// console.log(`Sum: ${a + b}`);
// console.log(display(num)+ display(num));


// function display(num){
//     switch(num){
//         case `.`:
//         if(emptyArr.includes(`.`)){
//             scrDisplay.innerHTML = scrDisplay.innerHTML;

//         }else{
//             scrDisplay.innerHTML += num;
//             emptyArr.push(num)
//             console.log(emptyArr)
//         }
//         break;
//         case `+`:
//         case `-`:
//         case `*`:
//         case `/`:
//             scrDisplay.innerHTML += num;
//             emptyArr = []
//             console.log()
//         break;
//             default:
//                 emptyArr.push(num)
//             console.log(num) 
//             scrDisplay.innerHTML += num;
//             console.log(emptyArr)
//     }
// }

// function allClear(){
//     scrDisplay.innerHTML = '';
//     calDisplay.innerHTML = '';
//     emptyArr = []
//     console.log(emptyArr)
// }

// function del(){
//     scrDisplay.innerText = scrDisplay.innerText.slice(0,-1);
//     emptyArr.pop()
//     console.log(emptyArr)
// }

// function calculate(){
//     calDisplay.innerHTML = eval(scrDisplay.innerText);
// }

let cart = document.querySelectorAll('.addToCart');

for(let i=0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        carNumbers();
    })
}


function carNumbers() {
    let productNumbers = local.Storage.getItem('carNumbers');
    console.log(productNumbers);
    localStorage.setItem('carNumbers', 1);
}
    
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