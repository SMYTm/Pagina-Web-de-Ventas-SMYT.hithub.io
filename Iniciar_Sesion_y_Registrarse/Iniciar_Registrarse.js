// --- JavaScript para la funcionalidad del modo oscuro ---

// Obtenemos referencias a los elementos HTML
const darkModeToggle = document.getElementById('darkModeToggle');
const iconImage = darkModeToggle.querySelector('.icon-mode'); // Seleccionamos la imagen dentro del botón
const bodyElement = document.body; // Cambié 'body' a 'bodyElement' para evitar conflictos con la variable global 'body'

// Función para aplicar o quitar la clase 'dark-mode' y actualizar el Local Storage y el icono
function toggleDarkMode() {
    // Alterna la clase 'dark-mode' en el body
    bodyElement.classList.toggle('dark-mode');

    // Comprueba si el modo oscuro está activo después de alternar
    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); // Guarda la preferencia 'dark'
        iconImage.src = 'Sun.png'; // Cambia el ícono a sol
        iconImage.alt = 'Modo Claro';
    } else {
        localStorage.setItem('theme', 'light'); // Guarda la preferencia 'light'
        iconImage.src = 'Moon.png'; // Cambia el ícono a luna
        iconImage.alt = 'Modo Oscuro';
    }
}

// Cargar la preferencia del usuario y configurar el estado inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Comprueba la preferencia de tema guardada en localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-mode'); // Aplica la clase 'dark-mode'
        iconImage.src = 'Sun.png'; // Asegura que el ícono sea el sol
        iconImage.alt = 'Modo Claro';
    } else {
        // Asegura que esté en modo claro por defecto si no hay preferencia o es 'light'
        bodyElement.classList.remove('dark-mode');
        iconImage.src = 'Moon.png'; // Asegura que el ícono sea la luna
        iconImage.alt = 'Modo Oscuro';
    }

    // Añade el evento click al botón del modo oscuro
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // --- El JavaScript para la redirección automática (sin cambios aquí) ---
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'pagina_principal.html'; 
    }
});