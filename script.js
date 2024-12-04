// Animación de los proyectos con un efecto de hover
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";  // Aumenta el tamaño al pasar el cursor
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";  // Vuelve al tamaño original
    });
});

// Validación de formulario
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Comprobar si los campos están vacíos
    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").textContent = "Por favor, completa todos los campos.";
        return; // Evitar el envío si hay campos vacíos
    }

    // Si todo está correcto
    document.getElementById("formMessage").textContent = "Mensaje enviado correctamente!";
    document.getElementById("contactForm").reset(); // Limpiar el formulario
});
