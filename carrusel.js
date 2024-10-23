let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// parametro configurado
let countItem = items.length;
let itemActive = 0;

// luego del click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//antes del click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto slide
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // eliminar item activar el viejo
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // activar nuevo item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // limpiar el auto slide
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// clickear flechas
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})