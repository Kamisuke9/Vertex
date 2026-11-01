document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-principal");

  if (botonMenu && menu) {
    botonMenu.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que el botón haga cosas raras
      const abierto = menu.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  }
});