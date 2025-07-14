document.addEventListener('DOMContentLoaded', function() {
    // 1. **Referencias a elementos HTML para el modo oscuro**
    const darkModeToggle = document.getElementById('darkModeToggle'); // El botón completo
    const iconImage = darkModeToggle.querySelector('.icon-mode');     // La imagen (<img>) dentro del botón
    const bodyElement = document.body;                               // El elemento <body> de la página

    // Definir las rutas de las imágenes de los íconos para el modo oscuro
    // Basado en tu HTML donde Countr_Spin.gif funciona con src="Countr_Spin.gif",
    // asumimos que Moon.png y Sun.png también están en la misma carpeta que pagina_principal.html.
    // Si Moon.png y Sun.png están en una subcarpeta como 'Iniciar_Sesion_y_Registrarse',
    // entonces las rutas serían 'Iniciar_Sesion_y_Registrarse/Moon.png' y 'Iniciar_Sesion_y_Registrarse/Sun.png'
    const moonIconPath = 'Moon.png'; // <--- VERIFICA ESTA RUTA
    const sunIconPath = 'Sun.png';   // <--- VERIFICA ESTA RUTA

    /**
     * Aplica el tema (modo oscuro o claro) a la página,
     * actualiza el ícono del botón y guarda la preferencia en localStorage.
     * @param {boolean} isDarkModeActive - True para modo oscuro, False para modo claro.
     */
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

    // ---
    // 2. **Al cargar la página: Leer la preferencia de localStorage y aplicarla**
    // ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true); // Aplica el modo oscuro si estaba guardado
    } else {
        applyTheme(false); // Aplica el modo claro (por defecto o si era 'light')
    }

    // ---
    // 3. **Añadir el evento click al botón de modo oscuro**
    // ---
    darkModeToggle.addEventListener('click', function() {
        // Verifica si el modo oscuro está actualmente activo en el <body>
        const isCurrentlyDark = bodyElement.classList.contains('dark-mode');
        // Llama a applyTheme con el estado contrario para alternar
        applyTheme(!isCurrentlyDark);
    });

    // ---
    // 4. **Lógica para el botón de Cerrar Sesión**
    // ---
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) { // Solo si el botón existe en el HTML
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace de navegación se comporte como tal

            // Elimina la preferencia de inicio de sesión de localStorage
            localStorage.removeItem('isLoggedIn');
            // Opcional: Si tienes más datos del usuario guardados, bórralos aquí
            // localStorage.removeItem('userName');

            // Redirige al usuario de vuelta a la página de bienvenida
            // IMPORTANTE: Se corrige la ruta para que suba un nivel de directorio
            // para encontrar Welcome.html, ya que pagina_principal.html está en una subcarpeta
            window.location.href = '../Welcome.html'; // <--- ¡RUTA CORREGIDA AQUÍ!
        });
    }
});