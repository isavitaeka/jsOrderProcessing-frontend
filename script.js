var myProducts = [];
window.selected = 0;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
		 //alert(this.responseText);
		 var myProduct =JSON.parse(this.responseText);
		 myFunction(myProduct.Products);
		 //myProducts = myProduct.Products;
		 console.log(myProducts);


	 }
};

xhttp.open("POST", "https://9wrl7re1h4.execute-api.eu-north-1.amazonaws.com/v0/lambda", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();


function myFunction(arr) {
	myProducts = arr;
	console.log(arr);
    var out = "";
    var i;

	const select = document.getElementById('product');

    for(i = 0; i < arr.length; i++) {

        console.log("I am here", arr[i].name);
        console.log ("image", arr[i].image);
        console.log ("price",arr[i].price);
        var productName = arr[i].name;
        var productImage =  "https://staticfeedback.s3.eu-north-1.amazonaws.com/" + arr[i].image;
        var productPrice =  arr[i].price;
        out +=`
        <div class="shop-item">
        
        <span class="shop-item-title">${productName}</span>
        <img class="shop-item-image" src="${productImage}" width="200" height="300">
        <div class="shop-item-details">
            <span class="shop-item-price">${productPrice}</span>
            <button class="btn btn-primary shop-item-button" type="button" onclick="addToCartClicked(event)">ADD TO CART</button>
        </div>
        </div>   
        `;
        

    }
    console.log("I am here", out);
	document.getElementById("products").innerHTML = out;
}


