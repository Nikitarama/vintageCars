fetch('/data/data.json')
.then((store) => {
    return store.json();
})

var submitRow = null;
function onFormSubmit(e)
event.preventDefault();
var formData = readFormData();
    if(submitRow === null){
        insertNewRecord(formData);
    }else {

};

{
    function readFormData() 
        var formData = {};
    formData["Car"] = document.getElementById("#Car").value;
    formData["year"] = document.getElementById("#year").value;
    formData["price"] = document.getElementById("#price").value;
    formData["amount"] = document.getElementById("#amount").value;
    return formData;

}

function insertNewData(data){
    var table = document.getElementById("storeList").getElementById("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insert(0);
    cell1.innerHTML = data.Car;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.year;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.amount;
    var cell5 = newRow.insert(4);
    cell5.innerHTML = <button>Edit</button><button>Delete</button>;
}
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