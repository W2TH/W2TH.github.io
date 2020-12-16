fetch("https://w2th.github.io/ScootsProject/data/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {
        for (let i = 0; i < 3; i++) {
            var row = jsObject.data[i];
            var tr = document.createElement("tr");
            var tr_text = document.getElementById("scooters");
            for (let word in row) {
                let td = document.createElement("td");
                td.textContent = row[word];
                tr.appendChild(td);
            }
            tr_text.appendChild(tr);
        }
    });

fetch("https://w2th.github.io/ScootsProject/data/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {
        for (let i = 3; i < 6; i++) {
            var row = jsObject.data[i];
            var tr = document.createElement("tr");
            var tr_text = document.getElementById("ATV");
            for (let word in row) {
                let td = document.createElement("td");
                td.textContent = row[word];
                tr.appendChild(td);
            }
            tr_text.appendChild(tr);
        }
    });

fetch("https://w2th.github.io/ScootsProject/data/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {
        for (let i = 6; i < 9; i++) {
            var row = jsObject.data[i];
            var tr = document.createElement("tr");
            var tr_text = document.getElementById("jeep");
            for (let word in row) {
                let td = document.createElement("td");
                td.textContent = row[word];
                tr.appendChild(td);
            }
            tr_text.appendChild(tr);
        }
    });