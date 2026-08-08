const navbar = document.getElementById("mainNavbar");
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.classList.add("navbar-scrolled");

    }else{

        navbar.classList.remove("navbar-scrolled");

    }

    if(window.scrollY > 500){

        scrollTop.classList.add("show");

    }else{

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
            IMAGE LIGHTBOX MODAL FUNCTIONALITY
==================================================*/

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageLightboxModal');
    const modalImg = document.getElementById('lightboxTargetImg');
    const captionText = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');

    if (!modal) return;

    // Attach click handler to images in accommodation gallery and zoomable images
    document.querySelectorAll('.accom-img-box img, .zoomable-image, .accommodation-image').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function (e) {
            e.stopPropagation();
            modal.classList.add('active');
            modalImg.src = this.src;
            
            const tag = this.parentElement.querySelector('.img-caption-tag');
            captionText.textContent = tag ? tag.textContent : (this.alt || '');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.classList.remove('active');
        });
    }

    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.classList.contains('lightbox-content-wrapper')) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});