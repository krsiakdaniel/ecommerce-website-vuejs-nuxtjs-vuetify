export default {
  LoadCart(state) {
    let cart = localStorage.getItem("cartContent");

    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  AddToCart(state, product) {
    // Find if the product already exists in cart
    let itemFound = state.cart.find((p) => p.product.id === product.id);

    // Add new item
    if (!itemFound) {
      state.cart.push({
        product, quantity: 1
      });
    }

    if (itemFound) {
      itemFound.quantity += 1;
    }

    // Update local storage
    localStorage.setItem("cartContent", JSON.stringify(state.cart));

    // sweetAlert settings
    this.$swal({
      icon: "success",
      text: "Item was added to you cart",
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
      item.quantity -= 1; // If there is more than 1 item, decrease the quantity
    }

    this.$swal({
      icon: "success",
      text: "Item was removed",
      position: "top-end",
      toast: true,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    // Update local storage
    localStorage.setItem("cartContent", JSON.stringify(state.cart));
  },

  RemoveCartItem(state, index) {
    state.cart.splice(index, 1); // Remove item from cart

    this.$swal({
      icon: "success",
      text: "Item removed from cart",
      position: "top-end",
      toast: true,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    // Update local storage
    localStorage.setItem("cartContent", JSON.stringify(state.cart));
  },

  IncreaseItemCount(state, index) {
    let item = state.cart[index]; // Get item from cart
    item.quantity += 1;

    this.$swal({
      icon: "success",
      text: "Item was added",
      position: "top-end",
      toast: true,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    // Update local storage
    localStorage.setItem("cartContent", JSON.stringify(state.cart));
  },

  ClearCart(state) {
    state.cart = [];

    // Update local storage
    localStorage.removeItem("cartContent");
  },
};
