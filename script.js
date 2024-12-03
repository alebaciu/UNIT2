document.querySelector('#monitorizare-titlu').addEventListener('dblclick', function () {
    const images = ["cpu.jpg", "memory.jpg", "wifi.jpg"];
    const container = document.querySelector('.imagine-container');
    let index = 0;
    container.innerHTML = "";
    const showImage = () => {
        container.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}" style="width: 200px; margin: 10px; border-radius: 10px;">`;
        index = (index + 1) % images.length;
    };
    showImage();
    const interval = setInterval(showImage, 3000);
    setTimeout(() => clearInterval(interval), images.length * 3000);
});
