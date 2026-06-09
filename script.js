const checkoutUrl = "";

document.querySelectorAll("[data-checkout]").forEach((link) => {
  if (checkoutUrl) {
    link.href = checkoutUrl;
  }
});
