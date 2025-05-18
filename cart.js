function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ product: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));

    // GTM Event Tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "add_to_cart",
        product: productName,
        price: price
    });

    alert(productName + " added to cart!");
    // console.log("Current Cart Data:", JSON.parse(localStorage.getItem("cart")));
}
