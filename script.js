// Función para generar corazones flotantes
function createFloatingHearts() {
    const background = document.getElementById('heartBackground');
    const numberOfHearts = window.innerWidth < 600 ? 20 : 35; // Menos corazones en móvil para mejor rendimiento
    
    // Limpiar corazones existentes
    background.innerHTML = '';

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-float');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.2;
        heart.style.animationDelay = Math.random() * 5 + 's';
        background.appendChild(heart);
    }
}

// Función para abrir el sobre
function openEnvelope() {
    const envelopeContainer = document.getElementById('envelopeContainer');
    const mainContent = document.getElementById('mainContent');
    
    envelopeContainer.style.opacity = '0';
    setTimeout(() => {
        envelopeContainer.style.display = 'none';
        mainContent.classList.add('show');
    }, 1000);
}

// Función para volver al inicio
function closeAndReturn() {
    const mainContent = document.getElementById('mainContent');
    const envelopeContainer = document.getElementById('envelopeContainer');
    
    mainContent.classList.remove('show');
    envelopeContainer.style.display = 'flex';
    setTimeout(() => {
        envelopeContainer.style.opacity = '1';
    }, 100);
}

// Función interactiva para el corazón (cambia de color)
let heartColorIndex = 0;
const colors = ['#ff0000', '#990000', '#ff4444', '#cc0000', '#ff6666'];

function changeHeartColor() {
    const heartPath = document.querySelector('.heart-path');
    const heartMessage = document.getElementById('heartMessage');
    
    heartColorIndex = (heartColorIndex + 1) % colors.length;
    heartPath.style.fill = colors[heartColorIndex];
    
    // Mensajes diferentes cada vez que tocan el corazón
    const messages = [ 
        "Siempre estás en mi corazón ❤️",
        "Eres única 🌹",
        "Mi amor por ti es enorme 💕",
        "¡Te amo, mi linda noviecitaaa! ❤️",
        "Eres mi felicidad ✨",
        "Siempre pienso en ti 💭",
        "Mi persona favorita 💝"
    ];
    
    // Seleccionar mensaje basado en el índice o aleatorio
    const messageIndex = heartColorIndex % messages.length;
    heartMessage.textContent = messages[messageIndex];
    
    // Animación extra
    heartPath.style.transition = 'fill 0.3s ease';
}

// Crear pequeñas estrellas brillantes alrededor
function createSparkles() {
    // Verificar si ya existe el div de sparkles
    let sparklesDiv = document.querySelector('.sparkles');
    if (!sparklesDiv) {
        sparklesDiv = document.createElement('div');
        sparklesDiv.classList.add('sparkles');
        document.body.appendChild(sparklesDiv);
    } else {
        sparklesDiv.innerHTML = ''; // Limpiar existentes
    }

    const numberOfSparkles = window.innerWidth < 600 ? 15 : 25;

    for (let i = 0; i < numberOfSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.fontSize = (Math.random() * 15 + 8) + 'px';
        sparklesDiv.appendChild(sparkle);
    }
}

// Función para manejar el cambio de tamaño de ventana
function handleResize() {
    createFloatingHearts();
    createSparkles();
}

// Inicializar todo cuando la página carga
window.addEventListener('load', function() {
    createFloatingHearts();
    createSparkles();
    
    // Asegurar que el sobre esté visible al inicio
    document.getElementById('envelopeContainer').style.display = 'flex';
    document.getElementById('envelopeContainer').style.opacity = '1';
    document.getElementById('mainContent').classList.remove('show');
});

// Recrear elementos cuando la ventana cambia de tamaño (para responsive)
let resizeTimeout;
window.addEventListener('resize', function() {
    // Debounce para evitar muchas llamadas
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 200);
});

// Prevenir comportamientos no deseados en iOS
document.addEventListener('touchstart', function(e) {
    if (e.target.classList.contains('envelope') || 
        e.target.classList.contains('interactive-heart') ||
        e.target.classList.contains('button-close')) {
        e.preventDefault(); // Prevenir zoom accidental
    }
}, { passive: false });