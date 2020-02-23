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


function saveChanges() {
        // Get a value saved in a form.
        var eco_score = 60; //TO DO: Take it from the item

        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': eco_score}, function() {
          // Notify that we saved.
          console.log("nice one!", eco_score);
         });

        chrome.storage.sync.get(["eco_store"], function (obj) { 
        setTimeout(function(){ 
            alert("Hello"); 
            console.log("Passed successfully: eco_store ", obj);
         }, 3000); 
          
        });

}

function querySomething(){
	alert("querySomething");
	console.log("querySomething");
	const Url = "http://127.0.0.1:8000/user_buy/";
  const data = '{"user_email":"siAixoFunciona","user_country":"USA", "product_name":"product","product_rate":0.5,"product_price":"10","product_country":"USA","product_dimensions":"3x3x3","product_weight":"48lbs","product_material":"aluminium"}';
	$.post(Url, data, function(data, status){
		console.log("post", data);
	})
}

var button = document.getElementById("isCartBtn_btn");
button.addEventListener("click", function(){
    console.log("Pre");
    saveChanges();
    querySomething();
    console.log("Post");
});





