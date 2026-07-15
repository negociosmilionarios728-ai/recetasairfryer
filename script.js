const checkoutUrl = "https://zuckpay.com.br/checkout/1000-recetas-para-airfryer";

function buildCheckoutUrl(baseUrl) {
    const current = new URLSearchParams(window.location.search);

    const params = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "utm_id",
        "fbclid",
        "fbc",
        "fbp",
        "src",
        "sck",
        "xcod",
        "ttclid"
    ];

    const url = new URL(baseUrl);

    params.forEach(param => {
        const value = current.get(param);
        if (value) {
            url.searchParams.set(param, value);
        }
    });

    return url.toString();
}

document.querySelectorAll(".cta-link").forEach(link => {

    link.href = buildCheckoutUrl(checkoutUrl);

    link.addEventListener("click", function(e){

        e.preventDefault();

        if (typeof fbq !== "undefined") {
            fbq("track", "InitiateCheckout");
        }

        setTimeout(() => {
            window.location.href = buildCheckoutUrl(checkoutUrl);
        },300);

    });

});