let position = 0;

const mostrarImagen = (index) => {
    const images = document.querySelectorAll('.gallery-item');
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
};

const nextImage = () => {
    const images = document.querySelectorAll('.gallery-item');
    position = (position + 1) % images.length;
    mostrarImagen(position);
};

const previousImage = () => {
    const images = document.querySelectorAll('.gallery-item');
    position = (position - 1 + images.length) % images.length;
    mostrarImagen(position);
};

// Inicializamos la primera imagen
mostrarImagen(position);

// Agregamos eventos usando addEventListener
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', previousImage);