// fetch("../data/data.json")
// .then ((store) => {
//     return store.json()
// })
// .then((storeCars) => {
//    let results = data.results;
//    console.table(results) 
// }) 

fetch('../data/data.json')
.then((store) => {
    return store.json();
})
.then((data) => {
    
    let tbody = document.querySelector('tbody');

    for (const kar of data) {
        // console.log(kar);
        Object.keys(kar).forEach((item) => {
            // console.log(item + ': ' + kar[item]);
        })
    }

    Object.keys(data).forEach((item) => {
        // console.log(item);
        // console.log(item);
        if(data[item] == "vintage") {
            tbody.innerHTML +=
            `
            <tr>
            <td>${data[item]}</td>
           
            </tr>
            `
        }
    })
});

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