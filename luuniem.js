if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {

    autoPlay();

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)

}

function purchaseClicked(){
    alert('Cảm ơn bạn đã mua hàng!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var titles = shopItem.getElementsByClassName('phaidepname')[0].innerText
    var title = titles.split(' ').slice(0,2).join(' ')
    var price = shopItem.getElementsByClassName('goiyprice')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
} 

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("Bạn đã thêm sản phẩm này rồi!")
            return
        }

    }
    var cartRowContents = `
        <div class="cart-item">
			<img src="${imageSrc}" alt="" class="cart-item-image">
			<div class="cart-item-title">
				${title}
			</div>
		</div>
		<span class="cart-price">
			${price}
		</span>
		<div class="cart-quantity">
			<input type="number" class="cart-quantity-input" value="1">
			<button class="btn-danger">XOÁ</button>
		</div>`
        cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('đ',''))
        var quantity = quantityElement.value
        total = total + (price * quantity * 1000)
        
    }
    
    document.getElementsByClassName('cart-total-price')[0].innerText = total +'đ'
}

var i = 1;
var N = 4;
function next(){
    
	if(i<N)
		i += 1;
	else
		i = 1;
	document.getElementById("slide").setAttribute("src",i+".jpeg");
}
function back(){
	if(i>1)
		i -= 1;
	else
		i = N;
	document.getElementById("slide").setAttribute("src",i+".jpeg");
}
function autoPlay(){
	setInterval(next, 5000);
}

$(".phaidepsp").hover(function(){ //HIỆN NÚT THÊM GIỎ HÀNG KHI HOVER
    $(this).children().last().fadeToggle();
});
$(".goiysp").hover(function(){
    $(this).children().last().fadeToggle();
});


$("#phaidepheader").click(function(){ //MẶT HÀNG NỔI BẬT
    $(this).next().slideToggle();
});

// var count=0;
// $(".phaidepsp i, .goiysp i").click(function(){
//     count += 1;
//     $("#cart_text").text("Giỏ hàng ("+count+")");
// });

$("#header_cart").click(function(){
    $("#cart").slideToggle();
});

$(".mau-nut").click(function () { //ĐỔI MÀU BUTTON VÀ ẢNH ÁO

    $(".mau-nut").removeClass("cam");
    $(this).addClass("cam");

    var tenanh = $(this).attr("value");
    $("#chitiet-anh > img").attr("src", tenanh);
  
});

$("#chitiet-anh li img").click(function () { //ĐỔI MÀU 3 ẢNH ÁO
    var imageUrl = $(this).attr("src");
    $("#chitiet-anh > img").attr("src", imageUrl);
});

$("#giohang-them").click(function () { //THÊM ÁO VÀO GIỎ HÀNG
    addToCartClicked1();
});
function addToCartClicked1(event) {
    var titles = document.getElementsByClassName('phaidepname1')[0].innerText
    var title = titles.split(' ').slice(0,2).join(' ')
    var price = document.getElementsByClassName('goiyprice1')[0].innerText
    var imageSrc = document.getElementsByClassName('shop-item-image1')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
} 

function sub(x)
{
    a = parseInt (document.getElementById(x).value);
    if (a > 1)
    a -= 1;
    document.getElementById(x).value = a;
}
function plus(x)
{
    a = parseInt (document.getElementById(x).value);
    a += 1;
    document.getElementById(x).value = a;
}


