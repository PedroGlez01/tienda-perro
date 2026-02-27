// ============================================
// ARCHIVO CENTRAL DE PRODUCTOS
// ============================================
// Para agregar un producto NUEVO, añade:
// nuevo: true,
// fecha_ingreso: '2025-02-27' (fecha de hoy)

const productos = [
    // ===== ARREOS =====
    {
        id: 'correa-reflectiva',
        nombre: 'Correa Reflectiva',
        descripcion: '2 metros - Nylon reflectante',
        precio: 280,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'arreos'
    },
    {
        id: 'collar-ajustable',
        nombre: 'Collar Ajustable',
        descripcion: 'Talla M - Con identificador',
        precio: 150,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'arreos'
    },
    {
        id: 'arnes-seguridad',
        nombre: 'Arnés de Seguridad',
        descripcion: 'Talla M - Para paseos',
        precio: 420,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'arreos'
    },
    {
        id: 'correa-retractil',
        nombre: 'Correa Retráctil',
        descripcion: '5 metros - Con freno',
        precio: 350,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'arreos'
    },
    {
        id: 'collar-cuero',
        nombre: 'Collar de Cuero',
        descripcion: 'Talla L - Cuero genuino',
        precio: 280,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'arreos'
    },
    {
        id: 'pecheras',
        nombre: 'Pecheras',
        descripcion: 'Talla S - Para razas pequeñas',
        precio: 310,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'arreos'
    },

    // ===== JUGUETES =====
    {
        id: 'kong-clasico',
        nombre: 'Kong Clásico',
        descripcion: 'Para perros medianos',
        precio: 350,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes'
    },
    {
        id: 'cuerda-nudos',
        nombre: 'Cuerda con Nudos',
        descripcion: 'Para morder y jugar',
        precio: 120,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes'
    },
    {
        id: 'pelota-goma',
        nombre: 'Pelota de Goma',
        descripcion: 'Con sonido, resistente',
        precio: 90,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes'
    },
    {
        id: 'hueso-nylon',
        nombre: 'Hueso de Nylon',
        descripcion: 'Para limpieza dental',
        precio: 150,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes'
    },
    {
        id: 'frisbee',
        nombre: 'Frisbee',
        descripcion: 'Para lanzar y atrapar',
        precio: 180,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes'
    },
    {
        id: 'mordedor',
        nombre: 'Mordedor',
        descripcion: 'Para cachorros',
        precio: 95,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes'
    },

    // ===== ASEO =====
    {
        id: 'shampoo-antipulgas',
        nombre: 'Shampoo Antipulgas',
        descripcion: '500ml - Para todo tipo de pelo',
        precio: 220,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'aseo'
    },
    {
        id: 'cepillo-cerdas',
        nombre: 'Cepillo de Cerdas',
        descripcion: 'Para pelo corto y largo',
        precio: 130,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'aseo'
    },
    {
        id: 'cortauñas',
        nombre: 'Cortaúñas',
        descripcion: 'Acero inoxidable',
        precio: 160,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'aseo'
    },
    {
        id: 'toalla-microfibra',
        nombre: 'Toalla Microfibra',
        descripcion: 'Secado rápido',
        precio: 210,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'aseo'
    },
    {
        id: 'shampoo-hidratante',
        nombre: 'Shampoo Hidratante',
        descripcion: 'Para piel seca',
        precio: 190,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'aseo'
    },
    {
        id: 'guantes-aseo',
        nombre: 'Guantes de Aseo',
        descripcion: 'Para baño',
        precio: 85,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'aseo'
    },
    
    // ===== PRODUCTO DE EJEMPLO CON ETIQUETA NUEVO =====
    // Este es un producto nuevo que mostrará la etiqueta por 3 días
    // Cópialo y modifícalo para agregar tus productos nuevos
    {
        id: 'juguete-nuevo-ejemplo',
        nombre: 'Hueso Saborizado',
        descripcion: 'Sabor a pollo - Muy resistente',
        precio: 165,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'juguetes',
        nuevo: true,
        fecha_ingreso: '2026-02-27' // Cambia a la fecha de hoy
    }
];