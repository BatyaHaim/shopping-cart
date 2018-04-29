// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  var total = 0;
 for (var i in cart) {
   var trash = '<a role="button" class="remove-item" data-id=' + i + '> <i class="fa fa-trash"></i> </a> </span> <br>';
   if (cart[i].amount !== 1)
     $('.cart-list').append('<span class="cart-item"> ' + cart[i].name
       + ' - $' + cart[i].price + ' (' + cart[i].amount + ')' + trash);
   else
     $('.cart-list').append('<span class="cart-item">' + cart[i].name
       + ' - $' + cart[i].price + trash);

   total += cart[i].price;
   
 }
 $('.total').text(total);
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
    
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)

     cart=[];  
     updateCart(); 
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});


$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var $clickedItem = $(this).closest('.card.item');


   var item = {
     name: $clickedItem.data().name,
     price: $clickedItem.data().price,
     amount:$clickedItem.data().amount,
 
   }

   addItem(item);
   updateCart();
   
  
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
