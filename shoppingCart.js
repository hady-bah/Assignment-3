const shoppingCart = [];

//add
function addToCart(item, quantity) {
  
  const existingItem = shoppingCart.find(cartItem => cartItem.item === item);

  if (existingItem) {
    
    existingItem.quantity += quantity;
  } else {
    
    shoppingCart.push({ item, quantity });
  }

  console.log(`Added ${quantity} ${item}(s) to the shopping cart.`);
}

//remove
function removeFromCart(item, quantity) {
  
  const existingItem = shoppingCart.find(cartItem => cartItem.item === item);

  if (existingItem) {
    if (existingItem.quantity > quantity) {
      
      existingItem.quantity -= quantity;
      console.log(`Removed ${quantity} ${item}(s) from the shopping cart.`);
    } else {
      
      const itemIndex = shoppingCart.findIndex(cartItem => cartItem.item === item);
      shoppingCart.splice(itemIndex, 1);
      console.log(`Removed all ${item}(s) from the shopping cart.`);
    }
  } else {
    console.log(`${item} is not in the shopping cart.`);
  }
}

//calculate
function calculateTotal() {
  let total = 0;

  for (const cartItem of shoppingCart) {
    
    const itemTotal = cartItem.item.price * cartItem.quantity;
    total += itemTotal;
  }

  return total;
}


addToCart({ name: 'Apples', price: 1.99 }, 3);
addToCart({ name: 'Bananas', price: 0.99 }, 2);
addToCart({ name: 'Oranges', price: 2.49 }, 4);


