const checkoutUrl = "https://pay.kiwify.com/I2kqY2M";

document.querySelectorAll(".cta-link").forEach((link) => {
  link.href = checkoutUrl;
});
