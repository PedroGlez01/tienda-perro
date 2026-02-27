// ============================================
// ARCHIVO DE FUNCIONES DE LA TIENDA
// ============================================

// Variables globales para el formulario
let productoActual = '';
let precioActual = '';

// Función para verificar si un producto es nuevo (menos de 3 días)
function esProductoNuevo(producto) {
    // Si no tiene las propiedades, no es nuevo
    if (!producto.nuevo || !producto.fecha_ingreso) return false;
    
    try {
        const fechaIngreso = new Date(producto.fecha_ingreso);
        const hoy = new Date();
        
        // Verificar que la fecha sea válida
        if (isNaN(fechaIngreso.getTime())) return false;
        
        // Calcular diferencia en días
        const diferenciaTiempo = hoy - fechaIngreso;
        const diferenciaDias = diferenciaTiempo / (1000 * 60 * 60 * 24);
        
        return diferenciaDias <= 3; // Menos de 3 días
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
    
    document.getElementById('categoria-' + categoria).classList.add('activo');
    document.getElementById('btn-' + categoria).classList.add('activo');
    localStorage.setItem('categoria-activa', categoria);
}

// Función para abrir el formulario
function abrirFormulario(producto, precio) {
    productoActual = producto;
    precioActual = precio;
    
    document.getElementById('productoSeleccionado').value = producto + ' - ' + precio;
    document.getElementById('nombreInput').value = '';
    document.getElementById('contactoInput').value = '';
    document.getElementById('direccionInput').value = '';
    document.getElementById('cantidadInput').value = '1';
    
    document.getElementById('formOverlay').style.display = 'flex';
}

// Función para cerrar el formulario
function cerrarFormulario() {
    document.getElementById('formOverlay').style.display = 'none';
}

// Función para enviar el pedido
function enviarPedido() {
    const nombre = document.getElementById('nombreInput').value.trim();
    const contacto = document.getElementById('contactoInput').value.trim();
    const direccion = document.getElementById('direccionInput').value.trim();
    const cantidad = document.getElementById('cantidadInput').value;
    
    if (!nombre || !contacto || !direccion) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    let mensaje = `*NUEVO PEDIDO - Guau Store*%0A%0A`;
    mensaje += `*👤 Cliente:* ${nombre}%0A`;
    mensaje += `*📱 Contacto:* ${contacto}%0A`;
    mensaje += `*📍 Dirección:* ${direccion}%0A%0A`;
    mensaje += `*🛒 PRODUCTO SOLICITADO*%0A`;
    mensaje += `▪️ Producto: ${productoActual}%0A`;
    mensaje += `▪️ Precio: ${precioActual}%0A`;
    mensaje += `▪️ Cantidad: ${cantidad}%0A`;
    
    window.open(`https://wa.me/53706086?text=${mensaje}`, '_blank');
    cerrarFormulario();
}

// Función para generar los productos automáticamente
function generarProductos() {
    // Categorías disponibles
    const categorias = ['arreos', 'juguetes', 'aseo'];
    const nombresCategoria = {
        'arreos': 'Arreos y Correas',
        'juguetes': 'Juguetes',
        'aseo': 'Productos de Aseo'
    };
    const iconos = {
        'arreos': '🦮',
        'juguetes': '🧸',
        'aseo': '🧴'
    };
    
    // Limpiar contenedores
    categorias.forEach(cat => {
        const contenedor = document.getElementById(`categoria-${cat}`);
        if (contenedor) {
            contenedor.innerHTML = `
                <h2 class="categoria-titulo">${iconos[cat]} ${nombresCategoria[cat]}</h2>
                <div class="grid-productos" id="grid-${cat}"></div>
            `;
        }
    });
    
    // Generar productos
    productos.forEach(prod => {
        const grid = document.getElementById(`grid-${prod.categoria}`);
        if (grid) {
            const card = document.createElement('div');
            card.className = 'producto-card';
            
            // Verificar si es nuevo
            const esNuevo = esProductoNuevo(prod);
            
            // Construir HTML de la tarjeta
            let html = '';
            
            // Si es nuevo, agregar etiqueta
            if (esNuevo) {
                html += `<div class="etiqueta-nuevo">✨ NUEVO</div>`;
            }
            
            html += `
                <img src="imagenes/${prod.imagen}" alt="${prod.nombre}" class="producto-imagen-real">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <p class="precio">$${prod.precio} CUP</p>
                <button class="btn-whatsapp-producto" onclick="abrirFormulario('${prod.nombre} - ${prod.descripcion}', '$${prod.precio} CUP')">
                    📱 Comprar por WhatsApp
                </button>
            `;
            
            card.innerHTML = html;
            grid.appendChild(card);
        }
    });
    
    // Actualizar contadores
    actualizarContadores();
}

// Función para actualizar contadores
function actualizarContadores() {
    const categorias = ['arreos', 'juguetes', 'aseo'];
    categorias.forEach(cat => {
        const count = productos.filter(p => p.categoria === cat).length;
        const contador = document.getElementById(`cont-${cat}`);
        if (contador) {
            contador.textContent = count;
        }
    });
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    generarProductos();
    
    // Cargar última categoría vista
    const categoriaGuardada = localStorage.getItem('categoria-activa') || 'arreos';
    mostrarCategoria(categoriaGuardada);
    
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

console.log("✅ Tienda inicializada correctamente");