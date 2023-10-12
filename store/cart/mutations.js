export default {
  LoadCart(state) {
    let cart = localStorage.getItem("myCart");

    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  AddToCart(state, product) {
    // Find if the product already exists in cart
    let itemFound = state.cart.find((item) => item.product.id === product.id);

    if (!itemFound) {
      state.cart.push({ product, quantity: 1 }); // Add new item
    }

    if (itemFound) {
      itemFound.quantity += 1;
    }

    localStorage.setItem("myCart", JSON.stringify(state.cart)); // Update local storage

    // sweetAlert settings
    this.$swal({
      icon: "success",
      text: "Cart Updated.",
      position: "top-end",
      toast: true,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  },

  DecreaseItemCount(state, index) {
    let item = state.cart[index];

    if (!item) return;

    if (item.quantity == 1) {
      state.cart.splice(index, 1); // Remove item from cart
    } else {
      item.quantity -= 1;
    }

    this.$swal({
      toast: true,
      text: "Cart was updated",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },

  RemoveCartItem(state, index) {
    state.cart.splice(index, 1); // Remove item from cart

    this.$swal({
      icon: "success",
      text: "Item was removed.",
      position: "top-end",
      toast: true,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  },

  IncreaseItemCount(state, index) {
    let item = state.cart[index]; // Get item from cart
    item.quantity += 1;

    this.$swal({
      icon: "success",
      text: "Cart was updated",
      position: "top-end",
      toast: true,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  },

  ClearCart(state) {
    state.cart = [];
    localStorage.removeItem("myCart"); // Update local storage
  },
};
