// Cart Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        loadCartPage();
        setupFormSubmission();
    }
});

// Load cart page content
function loadCartPage() {
    const cart = getCart();
    const cartContainer = document.getElementById('cart-items-container');
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    
    if (!cartContainer) return;
    
    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
            }
        });
    }
    
    // If cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products from our store to get started</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        
        if (subtotalElement) subtotalElement.textContent = formatCurrency(0);
        if (totalElement) totalElement.textContent = formatCurrency(200); // Just delivery fee
        
        // Disable form if cart is empty
        const submitBtn = document.getElementById('submit-order');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Cart is Empty';
        }
        
        return;
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 200;
    const total = subtotal + deliveryFee;
    
    // Update totals display
    if (subtotalElement) subtotalElement.textContent = formatCurrency(subtotal);
    if (totalElement) totalElement.textContent = formatCurrency(total);
    
    // Display cart items
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-price">${formatCurrency(item.price)}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn minus" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                    <button class="quantity-btn plus" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Setup form submission
function setupFormSubmission() {
    const deliveryForm = document.getElementById('delivery-form');
    if (!deliveryForm) return;
    
    deliveryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get cart data
        const cart = getCart();
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before submitting.');
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('customer-name').value,
            phone: document.getElementById('customer-phone').value,
            email: document.getElementById('customer-email').value || 'Not provided',
            address: document.getElementById('delivery-address').value,
            deliveryTime: document.getElementById('delivery-time').value,
            instructions: document.getElementById('special-instructions').value || 'None',
            cart: cart,
            subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            deliveryFee: 200,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 200,
            orderDate: new Date().toLocaleString('en-KE'),
            orderId: 'MTN-' + Date.now().toString().slice(-8)
        };
        
        // Validate form
        if (!formData.name || !formData.phone || !formData.address) {
            alert('Please fill in all required fields (Name, Phone, Address).');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[0-9\-\+\s\(\)]{10,}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            alert('Please enter a valid phone number.');
            return;
        }
        
        // Show confirmation
        if (confirm('Are you ready to submit your order? Please ensure you have paid to till number 973528.')) {
            // Save order to localStorage
            saveOrder(formData);
            
            // Clear cart
            clearCart();
            
            // Redirect to confirmation page
            window.location.href = 'order-confirmation.html?order=' + encodeURIComponent(JSON.stringify(formData));
        }
    });
}

// Save order to localStorage (for demo purposes)
function saveOrder(orderData) {
    // In a real app, this would be sent to a backend server
    const orders = JSON.parse(localStorage.getItem('mtaaniOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('mtaaniOrders', JSON.stringify(orders));
    
    // Also store the latest order for confirmation page
    localStorage.setItem('latestOrder', JSON.stringify(orderData));
}
