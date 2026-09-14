document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        // Change slide every 25 seconds
        slideInterval = setInterval(nextSlide, 25000);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval(); // Reset timer when user manually clicks
    });

    // Initialize automatic rotation
    resetInterval();

    // Gallery Logic
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const prevGalleryBtn = document.getElementById('prev-gallery-btn');
    const nextGalleryBtn = document.getElementById('next-gallery-btn');
    let currentGallerySlide = 0;

    function showGallerySlide(index) {
        gallerySlides.forEach(slide => slide.classList.remove('active'));
        gallerySlides[index].classList.add('active');
    }

    if (prevGalleryBtn && nextGalleryBtn) {
        prevGalleryBtn.addEventListener('click', () => {
            currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length;
            showGallerySlide(currentGallerySlide);
        });

        nextGalleryBtn.addEventListener('click', () => {
            currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
            showGallerySlide(currentGallerySlide);
        });
    }

    // Video Gallery Logic
    const videoSlides = document.querySelectorAll('.video-slide');
    const prevVideoBtn = document.getElementById('prev-video-btn');
    const nextVideoBtn = document.getElementById('next-video-btn');
    let currentVideoSlide = 0;

    function showVideoSlide(index) {
        videoSlides.forEach(slide => {
            slide.classList.remove('active');
            slide.pause(); // Pause video when switching away
        });
        videoSlides[index].classList.add('active');
    }

    if (prevVideoBtn && nextVideoBtn) {
        prevVideoBtn.addEventListener('click', () => {
            currentVideoSlide = (currentVideoSlide - 1 + videoSlides.length) % videoSlides.length;
            showVideoSlide(currentVideoSlide);
        });

        nextVideoBtn.addEventListener('click', () => {
            currentVideoSlide = (currentVideoSlide + 1) % videoSlides.length;
            showVideoSlide(currentVideoSlide);
        });
    }

    // Tabs Logic
    const tabBtns = document.querySelectorAll('.main-tab-btn');
    const tabContents = document.querySelectorAll('.main-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Pause any playing videos when switching tabs
            videoSlides.forEach(slide => slide.pause());

            // Remove active from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked button and target content
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Sub-Tabs Logic (Portfolio)
    const subTabBtns = document.querySelectorAll('.sub-tab-btn');
    const subTabContents = document.querySelectorAll('.sub-tab-content');

    subTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Pause any playing videos when switching sub-tabs
            videoSlides.forEach(slide => slide.pause());

            // Remove active from all sub-buttons and contents
            subTabBtns.forEach(b => b.classList.remove('active'));
            subTabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked button and target content
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
