// Product Data
const products = [
    {
        id: 1,
        name: "Jameson Irish Whiskey",
        category: "whiskey",
        price: 2500,
        image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Smooth triple-distilled Irish whiskey with notes of vanilla and toasted wood.",
        featured: true
    },
    {
        id: 2,
        name: "Jack Daniel's Tennessee Whiskey",
        category: "whiskey",
        price: 2800,
        image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Charcoal mellowed for smoothness with a distinctive caramel and oak character.",
        featured: true
    },
    {
        id: 3,
        name: "Johnnie Walker Black Label",
        category: "whiskey",
        price: 3500,
        image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "A rich blend of single malts with deep, complex flavors of dried fruit and spice.",
        featured: false
    },
    {
        id: 4,
        name: "Absolut Vodka",
        category: "spirits",
        price: 1800,
        image: "https://images.unsplash.com/photo-1566633808646-6b0a2b2b2b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Swedish vodka known for its purity with a rich, full-bodied taste.",
        featured: true
    },
    {
        id: 5,
        name: "Bacardi Superior Rum",
        category: "spirits",
        price: 1600,
        image: "https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Light-bodied rum with a delicate balance of vanilla and almond flavors.",
        featured: false
    },
    {
        id: 6,
        name: "Jose Cuervo Tequila",
        category: "spirits",
        price: 2200,
        image: "https://images.unsplash.com/photo-1566633808646-6b0a2b2b2b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Traditional Mexican tequila with agave sweetness and peppery finish.",
        featured: false
    },
    {
        id: 7,
        name: "Tanqueray London Dry Gin",
        category: "gin",
        price: 2700,
        image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Classic gin with juniper forward flavor and crisp citrus notes.",
        featured: true
    },
    {
        id: 8,
        name: "Bombay Sapphire Gin",
        category: "gin",
        price: 2900,
        image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Vapor-infused gin with a complex blend of 10 botanicals.",
        featured: false
    },
    {
        id: 9,
        name: "Cabernet Sauvignon",
        category: "wine",
        price: 1200,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Full-bodied red wine with blackcurrant and oak flavors.",
        featured: false
    },
    {
        id: 10,
        name: "Chardonnay",
        category: "wine",
        price: 1100,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Crisp white wine with citrus and tropical fruit notes.",
        featured: false
    }
];

// Initialize products on homepage
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on all pages
    updateCartCount();
    
    // Setup mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
});
