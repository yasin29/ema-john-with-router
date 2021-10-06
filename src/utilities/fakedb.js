//user wants to add a product
//find the place to store the data
const addToDb = id => {
  const stored_item = getStoredDb();
  if (id in stored_item) {
    stored_item[id] += 1;
  }
  else {
    stored_item[id] = 1;
  }
  updateDb(stored_item);
}
const removeFromDb = id => {
  const savedCart = getStoredDb();
  delete savedCart[id];
  updateDb(savedCart)
}

const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart))
}

const clearFromDb = () => localStorage.removeItem('shopping_cart');

const getStoredDb = () => {
  const exists = localStorage.getItem('shopping_cart');
  return exists ? JSON.parse(exists) : {}
}
export { addToDb, getStoredDb, removeFromDb, clearFromDb };