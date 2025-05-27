// Datos de productos (podés agregar más objetos)
const productosData = [
    {
        nombre: "Aspiradora",
        imagen: "../img/aspiradoragrande.jpg",
        precio: 219000,
        descripcion: "Ideal para limpieza profunda sin dañar superficies delicadas."
    },
    {
        nombre: "Hidro Lavadora",
        imagen: "../img/hidro.webp",
        precio: 319000,
        descripcion: "Elimina la suciedad más difícil con agua a presión."
    },
    {
        nombre: "Suavizante",
        imagen: "../img/suavizante.webp",
        precio: 20000,
        descripcion: "Especial para alfombras y muebles, deja un aroma fresco."
    },
    {
        nombre: "Desmanchador",
        imagen: "../img/desmanchador.webp",
        precio: 20000,
        descripcion: "Disuelve manchas difíciles en alfombras y tapizados."
    },
    {
        nombre: "Varsol",
        imagen: "../img/varsol.webp",
        precio: 10000,
        descripcion: "Neutraliza olores y manchas en alfombras y tapizados."
    },
    {
        nombre: "Shampoo para telas",
        imagen: "../img/shampootelas.png",
        precio: 12000,
        descripcion: "Limpieza efectiva para cortinas y sillones."
    },
    {
        nombre: "Pico de Aspiradora",
        imagen: "../img/picoaspi.jpg",
        precio: 15000,
        descripcion: "Limpieza profunda en rincones difíciles."
    },
    {
        nombre: "Vaporera",
        imagen: "../img/vaporizador.webp",
        precio: 600000,
        descripcion: "Elimina gérmenes y bacterias con vapor caliente."
    },
    {
        nombre: "Gel multiusos",
        imagen: "../img/gelmulti.png",
        precio: 5000,
        descripcion: "Ideal para múltiples superficies, sin dejar residuos."
    },
    {
        nombre: "Biovarsol",
        imagen: "../img/biovarsol.webp",
        precio: 12000,
        descripcion: "Desmanchador ecológico, ideal para alfombras y tapizados."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Animación de entrada
    const contenido = document.querySelector(".fade-contenido");
    if (contenido) contenido.classList.add("fade-contenido-activo");

    // Contenedor donde se agregarán los productos
    const contenedor = document.querySelector(".productos");

    // Generar productos dinámicamente
    productosData.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <div class="imagen-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-producto">
            </div>
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            <button onclick="mostrarPrecio(this)">Ver precio</button>
            <p class="precio">Precio: $${producto.precio}</p>
        `;

        contenedor.appendChild(div);
    });
});

// Mostrar / ocultar precio
function mostrarPrecio(boton) {
    const precio = boton.nextElementSibling;
    const visible = precio.style.display === "block";
    precio.style.display = visible ? "none" : "block";
    boton.textContent = visible ? "Ver precio" : "Ocultar precio";
}
