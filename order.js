var myProducts = [];
window.selected = 0;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
		 alert(this.responseText);
         
		 var myProduct =JSON.parse(this.responseText);
         console.log("Items", myProduct.Items.length)
		 myFunction(myProduct.Items);
		 myProducts = myProduct.items;
		 console.log(myProducts);


	 }
};

xhttp.open("GET", "https://zeppjh1ldj.execute-api.eu-north-1.amazonaws.com/PROD/ProductOrder?email=savitasingh18@gmail.com", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();


function myFunction(arr) {
	myProducts = arr;
	console.log(arr);
	//console.log(arr.length);
    var out = "";
    var i;

	const select = document.getElementById('product');


    var cartItems = document.getElementsByClassName('cart-items')[0]

    for(i = 0; i < arr.length; i++) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        console.log("Number", i)
        console.log("model: ", arr[i].model.S);
        console.log("CustomerName", arr[i].customerName.S);
        console.log("Name", arr[i].name.S);
        console.log("Order Status", arr[i].status.S);
        console.log("DevicePic", arr[i].image.S);
        var model = arr[i].model.S;
        var name = arr[i].name.S;
        var status = arr[i].status.S;
        var image = arr[i].image.S;
        var imageSrc = "https://staticfeedback.s3.eu-north-1.amazonaws.com/FileUploadDesign.png";


        var cartRowContents = `
        <div class="cart-item cart-column"  id= "${i}">
            <img class="cart-item-image" src="${image}" width="100" height="100">
            <span class="cart-item-title">${name}</span>
        </div>
        <span class="cart-price cart-column">${status}</span>
 `
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        console.log("Adding", cartRow);
    }

	//document.getElementById("orders").innerHTML = out;
}


