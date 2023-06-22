const { addToCart, removeFromCart, calculateTotal } = require('./shoppingCart');

// Test adding items to the shopping cart
test('Adding items to the shopping cart', () => {
  addToCart({ name: 'Apples', price: 1.99 }, 3);
  addToCart({ name: 'Bananas', price: 0.99 }, 2);

  expect(shoppingCart).toEqual([
    { item: { name: 'Apples', price: 1.99 }, quantity: 3 },
    { item: { name: 'Bananas', price: 0.99 }, quantity: 2 },
  ]);
});

// Test removing items from the shopping cart
test('Removing items from the shopping cart', () => {
  removeFromCart({ name: 'Apples', price: 1.99 }, 1);

  expect(shoppingCart).toEqual([
    { item: { name: 'Apples', price: 1.99 }, quantity: 2 },
    { item: { name: 'Bananas', price: 0.99 }, quantity: 2 },
  ]);

  removeFromCart({ name: 'Apples', price: 1.99 }, 2);

  expect(shoppingCart).toEqual([
    { item: { name: 'Bananas', price: 0.99 }, quantity: 2 },
  ]);

  removeFromCart({ name: 'Oranges', price: 2.49 }, 1);

  expect(shoppingCart).toEqual([
    { item: { name: 'Bananas', price: 0.99 }, quantity: 2 },
  ]);
});


test('Calculating the total cost', () => {
  expect(calculateTotal()).toBeCloseTo(2.97); 
});


