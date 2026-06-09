const checkoutUrl = "https://pay.kiwify.com/NbNlVty";

document.querySelectorAll(".cta-link").forEach((link) => {
  link.href = checkoutUrl;
});
