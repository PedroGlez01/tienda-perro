// ============================================
// ARCHIVO CENTRAL DE PRODUCTOS - TODOCLICK
// ============================================
// Instrucciones para agregar productos:

// 1. Etiqueta "NUEVO": nuevo: true, fecha_ingreso: '2025-03-18' (fecha de hoy)
// 2. Etiqueta "OFERTA": oferta: true, precio_original: 999 (opcional para mostrarlo luego)
// 3. Etiqueta "MÁS VENDIDO": mas_vendido: true

const productos = [
    // ===== ELECTRÓNICA =====
    {
        id: 'audifonos-bluetooth',
        nombre: 'Audífonos Bluetooth',
        descripcion: 'Inalámbricos, sonido estéreo, batería de larga duración.',
        precio: 1250,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'electronica',
        oferta: true
    },
    {
        id: 'cargador-portatil',
        nombre: 'Cargador Portátil 10000mAh',
        descripcion: 'Batería externa, dos puertos USB, carga rápida.',
        precio: 1850,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'electronica',
        mas_vendido: true
    },
    {
        id: 'parlante-bluetooth',
        nombre: 'Parlante Bluetooth Portátil',
        descripcion: 'Resistente al agua, con luz LED y micrófono.',
        precio: 2200,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'electronica'
    },

    // ===== HOGAR Y COCINA =====
    {
        id: 'set-cocina',
        nombre: 'Set de Cocina 5 piezas',
        descripcion: 'Utensilios de silicona antiadherente, mangos de madera.',
        precio: 950,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'hogar'
    },
    {
        id: 'organizador-escritorio',
        nombre: 'Organizador de Escritorio',
        descripcion: 'Multiusos, de bambú, con compartimentos.',
        precio: 780,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'hogar'
    },
    {
        id: 'lampara-led',
        nombre: 'Lámpara LED de Mesa',
        descripcion: 'Con brazo flexible, luz cálida y fría, táctil.',
        precio: 1150,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'hogar',
        nuevo: true,
        fecha_ingreso: '2025-03-18'
    },

    // ===== MODA Y ACCESORIOS =====
    {
        id: 'reloj-hombre',
        nombre: 'Reloj Analógico Hombre',
        descripcion: 'Acero inoxidable, correa de cuero, resistente al agua.',
        precio: 2100,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'moda'
    },
    {
        id: 'gafas-sol',
        nombre: 'Gafas de Sol Polarizadas',
        descripcion: 'Protección UV400, diseño clásico.',
        precio: 690,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'moda',
        oferta: true
    },
    {
        id: 'mochila',
        nombre: 'Mochila Impermeable',
        descripcion: 'Capacidad 15L, ideal para laptop, varios compartimientos.',
        precio: 1650,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'moda'
    },

    // ===== BELLEZA Y CUIDADO =====
    {
        id: 'kit-manicura',
        nombre: 'Kit de Manicura y Pedicura',
        descripcion: '14 piezas de acero inoxidable, estuche incluido.',
        precio: 520,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'belleza'
    },
    {
        id: 'cepillo-alisador',
        nombre: 'Cepillo Alisador de Pelo',
        descripcion: 'Calefacción rápida, para todo tipo de cabello.',
        precio: 1450,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'belleza',
        mas_vendido: true
    },
    {
        id: 'set-brochas',
        nombre: 'Set de Brochas para Maquillaje',
        descripcion: '12 brochas profesionales, con estuche.',
        precio: 890,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'belleza',
        nuevo: true,
        fecha_ingreso: '2025-03-17'
    },

    // ===== DEPORTES =====
    {
        id: 'pesas-rusas',
        nombre: 'Pesas Rusas 4kg (Par)',
        descripcion: 'Recubiertas de vinilo, agarre cómodo.',
        precio: 1350,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'deportes'
    },
    {
        id: 'esterilla-yoga',
        nombre: 'Esterilla para Yoga',
        descripcion: 'Antideslizante, con correa de transporte.',
        precio: 620,
        imagen: 'photo_2026-02-27_04-16-36.jpg',
        categoria: 'deportes'
    }
];