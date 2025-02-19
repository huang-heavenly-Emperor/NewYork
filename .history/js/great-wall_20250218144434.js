document.addEventListener('DOMContentLoaded', function() {
    // 滚动到顶部按钮
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // 观察所有需要动画的元素
    document.querySelectorAll('.fact, .timeline-item, .section-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // 为观察到的元素添加动画类
    document.addEventListener('scroll', () => {
        document.querySelectorAll('.animate').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });

    // 为时间线项目添加交错动画
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });

    // 为快速事实添加交错动画
    document.querySelectorAll('.fact').forEach((fact, index) => {
        fact.style.transitionDelay = `${index * 0.1}s`;
    });

    // 为信息卡片添加交错动画
    document.querySelectorAll('.info-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}); 