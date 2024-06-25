function minutesToSeconds(minutes) {
    if (typeof minutes !== 'number' || !Number.isInteger(minutes)) {
        throw new Error('Input must be an integer.');
    }
    return minutes * 60;
}

// Example usage:
console.log(minutesToSeconds(5));  // Output: 300
console.log(minutesToSeconds(10)); // Output: 600
function minutesToSeconds(minutes) {
    if (typeof minutes !== 'number' || !Number.isInteger(minutes)) {
        throw new Error('Input must be an integer.');
    }
    return minutes * 60;
}

// Example usage:
console.log(minutesToSeconds(5));  // Output: 300
console.log(minutesToSeconds(10)); // Output: 600
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    updateTotal();

    document.querySelectorAll('.plus').forEach(button => {
        button.addEventListener('click', function () {
            const quantitySpan = this.previousElementSibling;
            let quantity = parseInt(quantitySpan.textContent, 10);
            quantitySpan.textContent = ++quantity;
            updateItemPrice(this);
            updateTotal();
        });
    });

    document.querySelectorAll('.minus').forEach(button => {
        button.addEventListener('click', function () {
            const quantitySpan = this.nextElementSibling;
            let quantity = parseInt(quantitySpan.textContent, 10);
            if (quantity > 1) {
                quantitySpan.textContent = --quantity;
                updateItemPrice(this);
                updateTotal();
            }
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.cart-item').remove();
            updateTotal();
        });
    });

    document.querySelectorAll('.like-item').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    });

    function updateItemPrice(button) {
        const cartItem = button.closest('.cart-item');
        const quantity = parseInt(cartItem.querySelector('.quantity').textContent, 10);
        const price = cartItem.querySelector('.item-price').dataset.price;
        const itemTotalPrice = quantity * price;
        cartItem.querySelector('.item-price').textContent = `${itemTotalPrice} €`;
    }

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent);
            total += price;
        });
        document.getElementById('total').textContent = total.toFixed(2);
    }
});