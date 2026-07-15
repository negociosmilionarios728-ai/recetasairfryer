const checkoutUrl = "https://zuckpay.com.br/checkout/1000-recetas-para-airfryer";

// Atualiza todos os links do checkout
document.querySelectorAll(".cta-link").forEach((link) => {
  link.href = checkoutUrl;
});

// Dispara o IC antes de ir para o checkout
document.querySelectorAll("[data-checkout], .cta-link").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Meta Pixel
    if (typeof fbq !== "undefined") {
      fbq("track", "InitiateCheckout");
    }

    // UTMify Pixel
    if (
      window.pixel &&
      typeof window.pixel.track === "function"
    ) {
      window.pixel.track("InitiateCheckout");
    }

    // Pequeno atraso para garantir o envio
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 350);
  });
});