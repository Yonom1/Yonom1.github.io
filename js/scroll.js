document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (navBtn && navLinks) {
        navBtn.addEventListener('click', () => {
            navBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Only verify if we are on the home page for parallax
    if (document.body.classList.contains('home-page')) {
        const updateScroll = () => {
            // 计算滚动进度：0 到 1 (在滚动 500px 时达到最大效果)
            const scrolled = window.scrollY;
            const maxScroll = 500; 
            let ratio = Math.min(scrolled / maxScroll, 1);
            
            // 设置 CSS 变量，供样式表使用
            document.body.style.setProperty('--scroll-ratio', ratio);
        };

        window.addEventListener('scroll', updateScroll, { passive: true });
        updateScroll(); // 初始化
    }
});