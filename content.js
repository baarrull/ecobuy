var images = document.getElementsByTagName('img');
var prices = document.getElementsByClassName('hl-item__displayPrice secondary-text');
var products = document.getElementsByClassName('hl-carousel__item hl-standard-carousel__item');

if (products.length == 0) {
    products = document.getElementsByClassName('s-item__price');
    if (products.length == 0) {
        products = document.getElementsByClassName('notranslate'); 
    }
}

var color = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "ten"];

var userData
function getUserData(){
	const Url = "http://127.0.0.1:8000/userData/";
  const Sdata = '{"user_email":"david"}';
	$.post(Url, Sdata, function(data){
    userData = data
  })
};

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

var button = document.getElementById("isCartBtn_btn");
if(button != null){
button.addEventListener("click", function(){
    postUserBuy();
});
}

window.onclick = function(event) {
    if ($(event.target.closest('a')).attr('class') == 'hl-item__link') {
        $(event.target.closest('a')).attr('href')
    }
}




