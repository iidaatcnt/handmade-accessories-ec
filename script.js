// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic add to cart button functionality (for demonstration)
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('カートに追加しました！ (この機能はデモンストレーションです)');
    });
});

// Basic form submission (for demonstration)
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます！');
    this.reset();
});