/* ============================================================
   VERTEX GROUP — main.js
   Sprint II · Integrante 1: Estructura HTML5
   Este archivo solo resuelve el comportamiento mínimo indispensable
   (menú de navegación en móvil). La lógica de componentes
   interactivos (carrusel, validación de formularios, alertas
   dinámicas, etc.) se añade en la fase de Desarrollo de Interfaz.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-principal");

  if (botonMenu && menu) {
    botonMenu.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  }

  // Marca el enlace de navegación correspondiente a la página actual
  const rutaActual = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-principal a").forEach((enlace) => {
    const destino = enlace.getAttribute("href").split("/").pop();
    if (destino === rutaActual) {
      enlace.setAttribute("aria-current", "page");
    }
  });
});
