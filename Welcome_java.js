document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos HTML necesarios
    const darkModeToggle = document.getElementById('darkModeToggle'); // El botón completo
    const iconImage = darkModeToggle.querySelector('.icon-mode');     // La imagen (<img>) dentro del botón
    const bodyElement = document.body;                               // El elemento <body> de la página

    // Definir las rutas de las imágenes de los íconos
    // Ajusta estas rutas si tus imágenes están en una carpeta diferente
    const moonIconPath = 'Iniciar_Sesion_y_Registrarse/Moon.png';
    const sunIconPath = 'Iniciar_Sesion_y_Registrarse/Sun.png';

    // 2. Función para aplicar el modo oscuro/claro y actualizar el ícono y localStorage
    function applyTheme(isDarkModeActive) {
        if (isDarkModeActive) {
            bodyElement.classList.add('dark-mode');      // Añade la clase 'dark-mode' al <body>
            iconImage.src = sunIconPath;                 // Cambia el ícono a Sol
            iconImage.alt = 'Modo Claro';
            localStorage.setItem('theme', 'dark');       // Guarda la preferencia 'dark'
        } else {
            bodyElement.classList.remove('dark-mode');   // Quita la clase 'dark-mode' del <body>
            iconImage.src = moonIconPath;                // Cambia el ícono a Luna
            iconImage.alt = 'Modo Oscuro';
            localStorage.setItem('theme', 'light');      // Guarda la preferencia 'light'
        }
    }

    // 3. Al cargar la página: Leer la preferencia de localStorage y aplicarla
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true); // Aplica el modo oscuro si estaba guardado
    } else {
        applyTheme(false); // Aplica el modo claro (por defecto o si era 'light')
    }

    // 4. Añadir el "escuchador de eventos" al botón de modo oscuro
    darkModeToggle.addEventListener('click', function() {
        // Verifica si el modo oscuro está actualmente activo en el <body>
        const isCurrentlyDark = bodyElement.classList.contains('dark-mode');
        // Llama a applyTheme con el estado contrario para alternar
        applyTheme(!isCurrentlyDark);
    });

    // --- Tu JavaScript para la redirección automática ---
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'pagina_principal.html';
    }
});