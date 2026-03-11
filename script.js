fetch("products.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("products");

data.forEach(product => {

container.innerHTML += `
<div class="product">
<h2>${product.name}</h2>
<p>Price: ${product.price}</p>
</div>
`;

});

})
.catch(error => console.log(error));
