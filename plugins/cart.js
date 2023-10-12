export default function ({ store }, inject) {
  store.commit("cart/LoadCart");

  inject("formatCurrency", (amount) => {
    return new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
    }).format(amount);
  });
}
