fetch("products.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("products");

data.forEach(product => {

container.innerHTML += `
<div class="product">
<h2>${product.product_name}</h2>
<p>Quantity: ${product.quantity}</p>
<p>Price: ₹${product.price_in_inr}</p>
<p>Category: ${product.category}</p>
</div>
`;

});

})
.catch(error => console.log(error));
