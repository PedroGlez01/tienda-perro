// ============================================
// ARCHIVO DE FUNCIONES DE LA TIENDA - TODOCLICK
// ============================================

// Variables globales para el formulario
let productoActual = '';
let precioActualTexto = ''; // Para mostrar (ej: "$1250 CUP")
let precioUnitario = 0; // NUEVO: Guardamos el precio como número para cálculos
let productoIdActual = '';
let productosGlobal = []; // Aquí guardaremos los productos

// Función para verificar si un producto es nuevo (menos de 3 días)
function esProductoNuevo(producto) {
    if (!producto.nuevo || !producto.fecha_ingreso) return false;
    try {
        const fechaIngreso = new Date(producto.fecha_ingreso);
        const hoy = new Date();
        if (isNaN(fechaIngreso.getTime())) return false;
        const diferenciaTiempo = hoy - fechaIngreso;
        const diferenciaDias = diferenciaTiempo / (1000 * 60 * 60 * 24);
        return diferenciaDias <= 3;
    } catch (error) {
        console.log("Error verificando fecha:", error);
        return false;
    }
}

// Función para mostrar categoría
function mostrarCategoria(categoria) {
    document.querySelectorAll('.categoria-contenido').forEach(el => {
        el.classList.remove('activo');
    });
    document.querySelectorAll('.categoria-btn').forEach(el => {
        el.classList.remove('activo');
    });
    
    const categoriaDiv = document.getElementById(`categoria-${categoria}`);
    if (categoriaDiv) categoriaDiv.classList.add('activo');
    
    const btn = document.getElementById(`btn-${categoria}`);
    if (btn) btn.classList.add('activo');
    
    localStorage.setItem('categoria-activa', categoria);
}

// NUEVA FUNCIÓN: Actualizar el total cuando cambia la cantidad
function actualizarTotal() {
    const cantidad = parseInt(document.getElementById('cantidadInput').value) || 1;
    const total = precioUnitario * cantidad;
    document.getElementById('totalPagar').value = `$${total} CUP`;
}

// Función para abrir el formulario - MODIFICADA
function abrirFormulario(producto, precioTexto, precioNumero, id) {
    productoActual = producto;
    precioActualTexto = precioTexto;
    precioUnitario = precioNumero;
    productoIdActual = id || '';
    
    // Establecer valores iniciales
    document.getElementById('productoSeleccionado').value = `${producto} - ${precioTexto}`;
    document.getElementById('nombreInput').value = '';
    document.getElementById('contactoInput').value = '';
    document.getElementById('direccionInput').value = '';
    document.getElementById('cantidadInput').value = '1';
    
    // Calcular y mostrar el total inicial
    actualizarTotal();
    
    // Mostrar el formulario
    document.getElementById('formOverlay').style.display = 'flex';
}

// Función para cerrar el formulario
function cerrarFormulario() {
    document.getElementById('formOverlay').style.display = 'none';
}

// Función para enviar el pedido - MODIFICADA para incluir el total
function enviarPedido() {
    const nombre = document.getElementById('nombreInput').value.trim();
    const contacto = document.getElementById('contactoInput').value.trim();
    const direccion = document.getElementById('direccionInput').value.trim();
    const cantidad = parseInt(document.getElementById('cantidadInput').value) || 1;
    const total = precioUnitario * cantidad;
    
    if (!nombre || !contacto || !direccion) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Crear mensaje con TODO incluido
    let mensaje = `*NUEVO PEDIDO - TodoClick*%0A%0A`;
    mensaje += `*👤 Cliente:* ${nombre}%0A`;
    mensaje += `*📱 Contacto:* ${contacto}%0A`;
    mensaje += `*📍 Dirección:* ${direccion}%0A%0A`;
    mensaje += `*🛒 DETALLE DEL PEDIDO*%0A`;
    mensaje += `▪️ Producto: ${productoActual}%0A`;
    mensaje += `▪️ Precio unitario: ${precioActualTexto}%0A`;
    mensaje += `▪️ Cantidad: ${cantidad}%0A`;
    mensaje += `▪️ *TOTAL A PAGAR: $${total} CUP*%0A`; // NUEVO: Total en negrita
    
    // Agregar nota si es necesario
    mensaje += `%0A📌 Nota: Por favor confirmar disponibilidad y horario de entrega.`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/53706086?text=${mensaje}`, '_blank');
    
    // Cerrar formulario
    cerrarFormulario();
}

// Función para obtener las categorías únicas de los productos
function obtenerCategorias(productos) {
    const categorias = {};
    productos.forEach(prod => {
        if (!categorias[prod.categoria]) {
            let icono = '📦';
            if (prod.categoria === 'electronica') icono = '💻';
            else if (prod.categoria === 'hogar') icono = '🏠';
            else if (prod.categoria === 'moda') icono = '👕';
            else if (prod.categoria === 'belleza') icono = '💄';
            else if (prod.categoria === 'deportes') icono = '⚽';
            
            categorias[prod.categoria] = {
                nombre: prod.categoria.charAt(0).toUpperCase() + prod.categoria.slice(1),
                icono: icono
            };
        }
    });
    return categorias;
}

// Función para generar los botones de categorías
function generarBotonesCategorias() {
    const categorias = obtenerCategorias(productos);
    const container = document.getElementById('categoriasContainer');
    if (!container) return;
    
    let html = '';
    for (const [key, value] of Object.entries(categorias)) {
        html += `<button class="categoria-btn" onclick="mostrarCategoria('${key}')" id="btn-${key}">
            ${value.icono} ${value.nombre} <span class="contador-productos" id="cont-${key}">0</span>
        </button>`;
    }
    container.innerHTML = html;
}

// Función para generar los contenedores de categorías
function generarContenedoresCategorias() {
    const categorias = obtenerCategorias(productos);
    const container = document.getElementById('categoria-contenedores');
    if (!container) return;
    
    let html = '';
    for (const key of Object.keys(categorias)) {
        html += `<div id="categoria-${key}" class="categoria-contenido"></div>`;
    }
    container.innerHTML = html;
    
    for (const key of Object.keys(categorias)) {
        const contenedor = document.getElementById(`categoria-${key}`);
        if (contenedor) {
            contenedor.innerHTML = `
                <h2 class="categoria-titulo">${categorias[key].icono} ${categorias[key].nombre}</h2>
                <div class="grid-productos" id="grid-${key}"></div>
            `;
        }
    }
}

// Función para generar las tarjetas de productos - MODIFICADA la llamada a abrirFormulario
function generarTarjetasProductos(productosFiltrados = null) {
    const productosAMostrar = productosFiltrados || productos;
    
    document.querySelectorAll('.grid-productos').forEach(grid => grid.innerHTML = '');
    
    productosAMostrar.forEach(prod => {
        const grid = document.getElementById(`grid-${prod.categoria}`);
        if (grid) {
            const card = document.createElement('div');
            card.className = 'producto-card';
            
            const esNuevo = esProductoNuevo(prod);
            const esOferta = prod.oferta;
            const esMasVendido = prod.mas_vendido;
            
            let etiquetaHTML = '';
            if (esNuevo) {
                etiquetaHTML = `<div class="etiqueta etiqueta-nuevo">✨ NUEVO</div>`;
            } else if (esOferta) {
                etiquetaHTML = `<div class="etiqueta etiqueta-oferta">🔥 OFERTA</div>`;
            } else if (esMasVendido) {
                etiquetaHTML = `<div class="etiqueta etiqueta-mas-vendido">⭐ MÁS VENDIDO</div>`;
            }
            
            // MODIFICADO: Pasar el precio como número
            const precioNumero = prod.precio;
            
            card.innerHTML = `
                ${etiquetaHTML}
                <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" class="producto-imagen-real">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <p class="precio">$${precioNumero} CUP</p>
                <button class="btn-whatsapp-producto" onclick="abrirFormulario('${prod.nombre} - ${prod.descripcion}', '$${precioNumero} CUP', ${precioNumero}, '${prod.id}')">
                    📱 Comprar por WhatsApp
                </button>
            `;
            grid.appendChild(card);
        }
    });
}

// Función para actualizar contadores
function actualizarContadores() {
    const categorias = obtenerCategorias(productos);
    for (const key of Object.keys(categorias)) {
        const count = productos.filter(p => p.categoria === key).length;
        const contador = document.getElementById(`cont-${key}`);
        if (contador) {
            contador.textContent = count;
        }
    }
}

// Función para configurar el buscador
function configurarBuscador() {
    const buscador = document.getElementById('buscador');
    if (!buscador) return;
    
    buscador.addEventListener('input', function(e) {
        const termino = e.target.value.toLowerCase().trim();
        
        if (termino === '') {
            document.querySelectorAll('.grid-productos').forEach(grid => {
                Array.from(grid.children).forEach(card => {
                    card.style.display = 'block';
                });
            });
            const categoriaGuardada = localStorage.getItem('categoria-activa') || Object.keys(obtenerCategorias(productos))[0];
            mostrarCategoria(categoriaGuardada);
            return;
        }
        
        document.querySelectorAll('.categoria-contenido').forEach(el => el.classList.remove('activo'));
        
        let resultadosContainer = document.getElementById('resultados-busqueda');
        if (!resultadosContainer) {
            resultadosContainer = document.createElement('div');
            resultadosContainer.id = 'resultados-busqueda';
            resultadosContainer.className = 'categoria-contenido activo';
            resultadosContainer.innerHTML = '<h2 class="categoria-titulo">🔍 Resultados de búsqueda</h2><div class="grid-productos" id="grid-resultados"></div>';
            document.getElementById('categoria-contenedores').appendChild(resultadosContainer);
        } else {
            resultadosContainer.classList.add('activo');
        }
        
        const gridResultados = document.getElementById('grid-resultados');
        gridResultados.innerHTML = '';
        
        const productosFiltrados = productos.filter(prod => 
            prod.nombre.toLowerCase().includes(termino) || 
            prod.descripcion.toLowerCase().includes(termino)
        );
        
        if (productosFiltrados.length === 0) {
            gridResultados.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 40px;">No encontramos productos con esa búsqueda. 😥</p>';
        } else {
            productosFiltrados.forEach(prod => {
                const card = document.createElement('div');
                card.className = 'producto-card';
                
                const esNuevo = esProductoNuevo(prod);
                const esOferta = prod.oferta;
                const esMasVendido = prod.mas_vendido;
                
                let etiquetaHTML = '';
                if (esNuevo) {
                    etiquetaHTML = `<div class="etiqueta etiqueta-nuevo">✨ NUEVO</div>`;
                } else if (esOferta) {
                    etiquetaHTML = `<div class="etiqueta etiqueta-oferta">🔥 OFERTA</div>`;
                } else if (esMasVendido) {
                    etiquetaHTML = `<div class="etiqueta etiqueta-mas-vendido">⭐ MÁS VENDIDO</div>`;
                }
                
                const precioNumero = prod.precio;
                
                card.innerHTML = `
                    ${etiquetaHTML}
                    <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" class="producto-imagen-real">
                    <h3>${prod.nombre}</h3>
                    <p>${prod.descripcion}</p>
                    <p class="precio">$${precioNumero} CUP</p>
                    <button class="btn-whatsapp-producto" onclick="abrirFormulario('${prod.nombre} - ${prod.descripcion}', '$${precioNumero} CUP', ${precioNumero}, '${prod.id}')">
                        📱 Comprar por WhatsApp
                    </button>
                `;
                gridResultados.appendChild(card);
            });
        }
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    // Guardar productos en variable global
    if (typeof productos !== 'undefined') {
        productosGlobal = productos;
    }
    
    // Generar estructura
    generarBotonesCategorias();
    generarContenedoresCategorias();
    generarTarjetasProductos();
    actualizarContadores();
    
    // Cargar última categoría vista
    const categorias = Object.keys(obtenerCategorias(productos));
    if (categorias.length > 0) {
        const categoriaGuardada = localStorage.getItem('categoria-activa') || categorias[0];
        if (document.getElementById(`categoria-${categoriaGuardada}`)) {
            mostrarCategoria(categoriaGuardada);
        } else {
            mostrarCategoria(categorias[0]);
        }
    }
    
    // Configurar buscador
    configurarBuscador();
    
    // Cerrar formulario al hacer clic fuera
    const overlay = document.getElementById('formOverlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarFormulario();
            }
        });
    }
});

console.log("✅ Tienda TodoClick inicializada correctamente");