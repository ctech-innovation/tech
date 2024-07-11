function hideDrawer(){
    drawer = document.getElementById('drawer');
    drawer.style.right = '-250px';
    menu = document.getElementById('nav-mobile-menu');
    menu.style.display = 'block';
}
function showMenu(){
    drawer = document.getElementById('drawer');
    drawer.style.right = '0';
    drawer.style.display = 'block';
    drawer.style.transition = 'right 0.5 ease';
    menu = document.getElementById('nav-mobile-menu');
    menu.style.display = 'none';
}
function hidePopup(){
    popup = document.getElementById('desktop-popup');
    popup.style.display = 'none';
}
function showPopup(){
    popup = document.getElementById('desktop-popup');
    popup.style.display = 'block';
}
function hidePopupMobile(){
    hideMobilePopup = document.getElementById('mobile-popup');
    hideMobilePopup.style.display = 'none';
}
function showPopupMobile(){
    showMobilePopup = document.getElementById('mobile-popup');
    showMobilePopup.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    const targetNumber = 2000;
    const intervalTime = 100;
    let currentNumber = 0;

    const counterElement = document.getElementById('counter');

    const interval = setInterval (() => {
        currentNumber++;
        counterElement.textContent = currentNumber;

        if(currentNumber >= targetNumber){
            clearInterval(interval);
        }
    }, intervalTime )


});
