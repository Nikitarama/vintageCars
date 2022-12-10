let store = JSON.parse(localStorage.getItem('cars'));
console.log(store);

Object.keys(store).forEach((storeIndex) => {
    let product = store[storeIndex];
    let tbody = document.querySelector('tbody');
    tbody.innerHTML += `
        <tr>
            <td>${parseInt([storeIndex]) + 1}</td>
            <td>${product.name}</td>
            <td>${product.year}</td>
            <td>R${product.price}</td>
            <td><button id="${product.id}" class="btn btn-danger">Delete</button></td>
        </tr>
    `

})

let deleteBtn = [...document.querySelectorAll('.btn-danger')];

Object.keys(deleteBtn).forEach((i) => {
    deleteBtn[i].addEventListener('click', (e) => {
        console.log(store[i]);
        let index = i;

if(deleteBtn[i].id == store[i].id){
    console.log('found');
    store.splice(index,1);
    localStorage.setItem('cars', JSON.stringify(store));
    location.reload()
} else{
    console.log('not found')
}
    })
})

function test() {
    
    try {
        console.log('Running!');
    } catch(error){
        console.log("Not running!")
    }
  };
  
  test();


// let delete = document.querySelectorAll('delBtn') {
//         if (alert('You are about to delete an item.')) {
//             row = td.tbody.tbody;
//             document.getElementById("adminList").deleteRow(row.rowIndex);
//             resetForm();
//         }
//     }

// onDelete();


// var selectedRow = null

// function onFormSubmit() {
//     if(validate()) {
//         var formData = readFormData();
//         if(selectedRow == null)
//         insertNewRecord(formData);
//         else
//         updateRecord(formData);
//         resetForm();
//     }
// }

// fetch('/data/data.json')
// .then((store) => {
//     return store.json();
// })

// let form = document.getElementById("form");
// let input = document.getElementById("input");
// let msg = document.getElementById("msg");
// let posts = document.getElementById("posts");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("button clicked");
  
//     formValidation();
// // });

// let formValidation = () => {

//     if (input.value === "") {
//       input.innerHTML = "Post cannot be blank";
//       console.log("failure");
//     } else {
//       console.log("successs");
//       input.innerHTML = "";
//     }
// };

// let data = {};

// let acceptData = () => {
//     data["text"] = input.value;
//     console.log(data);
// };

// let formValidation = () => {
//     if (input.value === "") {
//       // Other codes are here
// } else {
//       // Other codes are here
//       acceptData();
//     }
// };

// let createPost = () => {

//     posts.innerHTML += `
//     <div>
//       <p>${data.text}</p>
//       <span class="options">
//         <i onClick="editPost(this)" class="fas fa-edit"></i>
//         <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
//       </span>
//     </div>
//     `;
//     input.value = "";
// };


// <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>

// let deletePost = (e) => {
//     e.parentElement.parentElement.remove();
// };

// let editPost = (e) => {
//     input.value = e.parentElement.previousElementSibling.innerHTML;
//     e.parentElement.parentElement.remove();
// };
  


// var submitRow = null;
// function onFormSubmit(e)
// event.preventDefault();
// var formData = readFormData();
//     if(submitRow === null){
//         insertNewRecord(formData);
//     }else {

// };

// {
    // function readFormData() 
    //     var formData = {};
    // formData["Car"] = document.getElementById("Car").value;
    // formData["year"] = document.getElementById("year").value;
    // formData["price"] = document.getElementById("price").value;
    // formData["amount"] = document.getElementById("amount").value;
    // formData["action"] = document.getElementById("action").value;
    // return formData;

// }

// function insertNewData(data){
//     var table = document.getElementById("storeList").getElementById("tbody")[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insert(0);
//     cell1.innerHTML = data.Car;
//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.year;
//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.price;
//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.amount;
//     var cell5 = newRow.insert(4);
//     cell5.innerHTML = data.action;
// }
// .then((data) => {
    
//     let tbody = document.innerHTML('tbody');

//     for (const car of data) {
//         console.log(car);

//         Object.keys(car).forEach((item) => {
//             if(data[item].amount == "0") {
//                 tbody.innerHTML +=
//                 `
//                 <tr>
//                 <th>${data[item].id}</th>
//                 <td>${data[item].car}</td>
//                 <td>${data[item].year}</td>
//                 <td>${data[item].price}</td>
//                 <td>${data[item].amount}</td>
                
               
//                 </tr>
//                 `
        //     }
        // })
// };

    // Object.keys(data).forEach((item) => {
    //     console.log(item);
        
    //     if(data[item].type == "vintage") {
    //         tbody.innerHTML +=
    //         `
    //         <tr>
    //         <th>${data[item].id}</th>
    //         <td>${data[item].car}</td>
    //         <td>${data[item].year}</td>
    //         <td>${data[item].price}</td>
    //         <td>${data[item].amount}</td>
            
           
    //         </tr>
    //         `
    //     }
    // })
// });

// function onFormSubmit() {
//         var formData = readFormData();
//     insertNewRecord(formData);
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//     }else{
//                 updateRecord(formData);
//             resetForm();
//         }
        
//         var selectedRow = null
        
// function onFormSubmit() {
//         var formData = readFormData();
//         insertNewRecord(formData);
//         console.log('hello');
// };

// function readFormData() {
//     var formData = {};
//     formData["car"] = document.getElementById("car").value;
//     formData["year"] = document.getElementById("year").value;
//     formData["price"] = document.getElementById("price").value;
//     formData["amount"] = document.getElementById("amount").value;
//     return formData;
// };
// function insertNewRecord(data) {
//     var table = document.getElementById("adminList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length); //will insert new item on a new row from 0
    
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.car;
    
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.year;
    
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.price;
    
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.amount;
    
//     cell4 = newRow.insertCell(4);
//     cell4.innerHTML = `<button onclick="onEdit(this)" class="btn btn-primary">Edit</button>
//                        <button onclick="onDelete(this)" class="btn btn-danger">Delete</a>`;
// };
// function resetForm() {
//     document.getElementById("car").value = "";
//     document.getElementById("year").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("amount").value = "";
//     selectedRow = null;
// };

// function onEdit(formData) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("car").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("year").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("price").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("amount").value = selectedRow.cells[3].innerHTML;
// };

// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.car;
//     selectedRow.cells[1].innerHTML = formData.year;
//     selectedRow.cells[2].innerHTML = formData.price;
//     selectedRow.cells[3].innerHTML = formData.amount;
// };

// function onDelete(formData) {
//     if (confirm('You are about to delete an item.')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("adminList").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }

// function validate() {
//     isValid = true;
//     if (document.getElementById("car").value == "") {
//         isValid = false;
//         document.getElementById("adminList").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (document.getElementById("adminList").classList.contains("hide"))
//             document.getElementById("adminList").classList.add("hide");
//     }
//     return isValid;
// }