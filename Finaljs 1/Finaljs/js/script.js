/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
const sr = ScrollReveal();
// Hiệu ứng cuộn cho mục "WHEY PROTEIN"
sr.reveal('#loadwhey .services-container > *', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
  });
  
  // Hiệu ứng cuộn cho mục "TĂNG SỨC MẠNH"
sr.reveal('#loadTangSm .services-container > *', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
  });
  
  // Hiệu ứng cuộn cho mục "VITAMIN - D3&K2 - DẦU CÁ"
sr.reveal('#loadVitamin .services-container > *', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
  });

  const leftBtn = document.querySelector('.scroll-left');
  const rightBtn = document.querySelector('.scroll-right');
  const servicesContainer = document.querySelector('.services-container');

leftBtn.addEventListener('click', () => {
  servicesContainer.scrollBy({
    left: -servicesContainer.offsetWidth,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  servicesContainer.scrollBy({
    left: servicesContainer.offsetWidth,
    behavior: 'smooth'
  });
});


fetch('http://localhost:3000/whey')
.then(response => response.json())
.then(data=>{
    const whey=data
    showwhey(data)
})
function showwhey(data){
    let loadwhey = document.getElementById('loadwhey');
    let kq="";
    data.forEach(item => {
        kq+=`<div class="services-box">
                <div class="product">       
                    <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-discount-price">Giá khuyến mãi: $19.99</p>
                    <p class="product-price">Giá: ${item.price}</p>
                    <p class="product-discount-percentage">Giảm giá: 33%</p>
                </div> 
                <a href="#" class="btn">Xem Ngay</a>
            </div>
             `
    });
    loadwhey.innerHTML=kq
    
}

fetch('http://localhost:3000/tangsm')
.then(response => response.json())
.then(data=>{
    const tangsm=data
    showTangsm(data)
})
function showTangsm(data){
    let loadtangsm = document.getElementById('loadTangSm');
    let kq="";
    data.forEach(item => {
        kq+=`<div class="services-box">
        <div class="product">       
            <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
            <h2 class="product-name">${item.name}</h2>
            <p class="product-discount-price">Giá khuyến mãi: $19.99</p>
            <p class="product-price">Giá: ${item.price}</p>
            <p class="product-discount-percentage">Giảm giá: 33%</p>
        </div> 
        <a href="#" class="btn">Xem Ngay</a>
    </div>
     `
    });
    loadtangsm.innerHTML=kq

    
}



fetch('http://localhost:3000/vitamin')
.then(response => response.json())
.then(data=>{
    const vitamin=data
    showVitamin(data)
})
function showVitamin(data){
    let loadvitamin = document.getElementById('loadVitamin');
    let kq="";
    data.forEach(item => {
        kq+=`<div class="services-box">
                <div class="product">       
                    <p>  <img src="${item.img}" style="width: 270px; height: 200px;"></p>      
                    <h2 class="product-name">${item.name}</h2>
                    <p class="product-discount-price">Giá khuyến mãi: $19.99</p>
                    <p class="product-price">Giá: ${item.price}</p>
                    <p class="product-discount-percentage">Giảm giá: 33%</p>
                </div> 
                <a href="#" class="btn">Xem Ngay</a>
            </div>
             `
    });
    loadvitamin.innerHTML=kq
}





ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });