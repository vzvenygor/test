let node = null;
let mainData = './data.js';

window.onload = function () {
    node = fetch(mainData)
    .then(response => response.json())
    .then(result => node = result);
}

console.log(mainData)