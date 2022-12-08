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

fetch('/data/data.json')
.then((store) => {
    return store.json();
})

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
//     function readFormData() 
//         var formData = {};
//     formData["Car"] = document.getElementById("Car").value;
//     formData["year"] = document.getElementById("year").value;
//     formData["price"] = document.getElementById("price").value;
//     formData["amount"] = document.getElementById("amount").value;
//     formData["action"] = document.getElementById("action").value;
//     return formData;

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
    
//     let tbody = document.querySelector('tbody');

//     for (const car of data) {
//         console.log(car);
//         Object.keys(car).forEach((item) => {
//             console.log(item + ': ' + car[item]);
//         })
//     }

//     Object.keys(data).forEach((item) => {
//         console.log(item);
        
//         if(data[item] == "vintage") {
//             tbody.innerHTML +=
//             `
//             <tr>
//             <th>${data[item]}</th>
//             <td>${data[item]}</td>
//             <td>${data[item]}</td>
//             <td>${data[item]}</td>
//             <td>${data[item]}</td>
//             <td>${data[item]}</td>
           
//             </tr>
//             `
//         }
//     })
// });

var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
    }else{
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["Car"] = document.getElementById("Car").value;
    formData["year"] = document.getElementById("year").value;
    formData["price"] = document.getElementById("price").value;
    formData["amount"] = document.getElementById("amount").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Car;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.year;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.amount;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("Car").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Car").value = selectedRow.cells[0].innerHTML;
    document.getElementById("year").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Car;
    selectedRow.cells[1].innerHTML = formData.year;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.amount;
}
function onDelete(td) {
    if (confirm('if you delete there is NO undo.')) {
        row = td.parentElement.parentElement;
        document.getElementById("myCars").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Car").value == "") {
        isValid = false;
        document.getElementById("list").classList.remove("hide");
    } else {
        isValid = true;
        if (document.getElementById("list").classList.contains("hide"))
            document.getElementById("list").classList.add("hide");
    }
    return isValid;
}