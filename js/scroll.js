document.addEventListener('DOMContentLoaded', () => {
    // Only verify if we are on the home page
    if (!document.body.classList.contains('home-page')) {
        return;
    }

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
});