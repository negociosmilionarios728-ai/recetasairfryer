const checkoutUrl = "https://zuckpay.com.br/checkout/1000-recetas-para-airfryer";

document.querySelectorAll(".cta-link").forEach((link) => {
  link.href = checkoutUrl;
});
