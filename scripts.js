let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    // Check if the item is already in the cart
    const itemExists = cart.some(item => item.name === name);
    //if (itemExists) {
       // return alert("Item is already in your cart");
    //}
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function viewCart() {
    window.location.href = 'cart.html';
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });
}

function sendEmail() {
    const emailBody = `Hello, I am interested in these works of art:\n\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}`;
    const mailtoLink = `mailto:your-email@example.com?subject=Art Inquiry&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cartItems')) {
        displayCart();
    }
    updateCartCount();
});
