document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth - 0.5) * 4;
    const y = (clientY / window.innerHeight - 0.5) * 4;
    const container = document.querySelector('.container');
    container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});