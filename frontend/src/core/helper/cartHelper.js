
// middleWare
export const addItemToCart = (item, next) => {
  let cart = [];
  if(typeof window !== undefined){
    if(localStorage.getItem("cart")){
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item
    })
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
}


export const loadCart = () => {
  if(!(window === undefined)){
    if(!(localStorage.getItem("cart") === undefined)){
      return JSON.parse(localStorage.getItem("cart"))
    }
  }
}

export const removeFromLoacalStorage = (index) => {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  cartData.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartData));
  window.location.reload()
}