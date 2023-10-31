const text = document.querySelector('#task'),
btn = document.querySelector('#add'),
lista = document.querySelector('.list')

const listado = [];

btn.addEventListener('click', () => {
    console.log(text.value)
    if (text.value.trim() !== "") { // Asegurarse de que el valor no esté vacío
        listado.push(text.value)
        actualizarLista()
        text.value = "" // Limpiar el input
    }
})

// Función para actualizar la lista en el documento
function actualizarLista() {
    lista.innerHTML = ""; // Limpiar la lista actual

    for (let i = 0; i < listado.length; i++) {
        const elemento = document.createElement("li");
        // Crear un elemento de imagen (ícono de borrar)
        const iconoBorrar = document.createElement("img");
        iconoBorrar.src = "img/borrar.png";
        iconoBorrar.alt = "Borrar";
        iconoBorrar.addEventListener("click", function () {
            // Eliminar el elemento al hacer clic en el ícono de borrar
            listado.splice(i, 1);
            actualizarLista();
        });
        // Agregar el texto y el ícono de borrar al elemento de la lista
        elemento.textContent = listado[i];
        elemento.appendChild(iconoBorrar);
        // Agregar el elemento de la lista al documento
        lista.appendChild(elemento);
    }
}

function redirigir() {
    var select = document.getElementById("genero");
    var selectedOption = select.options[select.selectedIndex];
    var selectedValue = selectedOption.value;

    if (selectedValue) {
      window.location.href = selectedValue;
    } else {
      alert("Por favor, selecciona tu género antes de ingresar.");
    }
}

function volverAlInicio() {
    window.location.href = "index.html"; // Redirige al usuario a la página de inicio (index.html)
}