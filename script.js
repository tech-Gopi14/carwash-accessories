fetch("products.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("products");

data.forEach(product => {

container.innerHTML += `
<div>
<h2>${product.name}</h2>
<p>${product.price}</p>
</div>
`;

});

});
