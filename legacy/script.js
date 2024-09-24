// script.js
const cursor = document.getElementById('cursor');
const image = document.getElementById('image');
const unixTimeElement = document.getElementById('time');
const toggleButton = document.getElementById('toggle-button');

let isDarkMode = true;

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
});

image.addEventListener('mouseover', () => {
    cursor.style.width = '28px';
    cursor.style.height = '28px';
    image.style.filter = 'drop-shadow(2px 2px 20px green) invert(75%)';
});

image.addEventListener('mouseout', () => {
    cursor.style.width = '24px';
    cursor.style.height = '24px';
    image.style.filter = 'none';
});

function updateUnixTime() {
    const now = Math.floor(Date.now() / 1000);
    unixTimeElement.textContent = `live unix time: ${now}`;
}

setInterval(updateUnixTime, 1000);
updateUnixTime();

toggleButton.addEventListener('click', () => {
    document.body.style.backgroundColor = isDarkMode ? '#000000' : '#212121';
    isDarkMode = !isDarkMode;
});

function checkDeviceType() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

checkDeviceType();
window.addEventListener('resize', checkDeviceType);
