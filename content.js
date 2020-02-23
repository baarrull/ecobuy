var images = document.getElementsByTagName('img');
var prices = document.getElementsByClassName('hl-item__displayPrice secondary-text');

var products = document.getElementsByClassName('hl-carousel__item hl-standard-carousel__item');

if (products.length == 0) {
    products = document.getElementsByClassName('s-item__price');
}

var color = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "ten"];

//console.log('images', images[0].src)
for (var i = 0, l = products.length; i < l; i++) {
    var r = Math.floor(Math.random()*100)
    var c = Math.round(r/10)
	//products[i].insertAdjacentHTML("beforeend", '<button id="myecoBtn" onclick="myFunction"><img src="https://thumbs.dreamstime.com/b/eco-friendly-percent-green-sticker-wavy-edge-design-element-packaging-design-promotional-material-eco-friendly-170367361.jpg" alt="eco_friendly" height="100" width="100"></img></button');
	var button = document.createElement("button");
	button.innerHTML = ` <span class=${color[c]}>${r}</span>`;
    button.id ='ecoscore'; 
	var product= products[i];
	product.appendChild(button);

	button.addEventListener("click", function(){
		modal.style.display = "block";
	});

}
	document.getElementById('mainContent').insertAdjacentHTML("beforebegin", '<div id="myModal" class="ecomodal"><div class="ecomodal-content"><span class="close">&times;</span><p>Emitted CO2: 100gr <br>Organic: YES<br> Cruelty-Free: YES<br> </p></div></div>');

// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*
alert("querySomething1");
function querySomething(){
	alert("querySomething");
	console.log("querySomething");
	const Url = "http://127.20.10.10:8000/user_buy/";
	const data = {
		"user_email":"david", 
            "user_country":"USA",
            "product_name":"product",
            "product_rate":0.5,
            "product_price":"10",
            "product_country":"USA",
            "product_dimensions":"3x3x3",
            "product_weight":"48lbs",
            "product_material":"aluminium"
	}

	$.post(Url, data, function(data, status){
		console.log("post", data);
	})


 $.ajax({
        type: "GET",
        url: "127.0.0.1",
        headers: {
            "Content-Type": "application/json",
        },
        
        success: function(data){
            console.log("success");
            console.log(data);
        },
        failure: function(data){
            console.log("failure");
            console.log(data);
        },
    });
    $.ajax({
        type: "POST",
        url: "127.20.10.10:8000/user_buy",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "user_email":"david", 
            "user_country":"USA",
            "product_name":"product",
            "product_rate":0.5,
            "product_price":"10",
            "product_country":"USA",
            "product_dimensions":"3x3x3",
            "product_weight":"48lbs",
            "product_material":"aluminium"
        },
        success: function(data){
            console.log("success");
            console.log(data);
        },
        failure: function(data){
            console.log("failure");
            console.log(data);
        },
    });
    alert('marcusShep function ran.')
}

//products[i].insertAdjacentHTML("beforeend", '<button id="myecoBtn" onclick="myFunction"><img src="https://thumbs.dreamstime.com/b/eco-friendly-percent-green-sticker-wavy-edge-design-element-packaging-design-promotional-material-eco-friendly-170367361.jpg" alt="eco_friendly" height="100" width="100"></img></button');
var button = document.getElementById("isCartBtn_btn");
window.onload=function(){
button.addEventListener("click", function(){
	console.log("Pre");
	querySomething();
	console.log("Post");
});}
*/
