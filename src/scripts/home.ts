// Sesuatu yang simpel untuk memberikan efek interaktif
document.addEventListener('DOMContentLoaded', () => {
    console.log("Lakoffie Home Loaded - Luxury Vibe Activated");
    
    // Opsional: Efek parallax ringan pada hero jika ada gambar
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-content') as HTMLElement;
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = `${1 - scrolled / 600}`;
        }
    });
});
