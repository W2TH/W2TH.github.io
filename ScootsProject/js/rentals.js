fetch("https://w2th.github.io/ScootsProject/data/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById("test").innerHTML=jsObject.scooters.one[0];
    });