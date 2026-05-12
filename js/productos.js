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
        id: 'audifonos-1',
        nombre: 'Audífonos Bluetooth',
        descripcion: '',
        precio: 5500,
        imagen: '1778555030818.jpg',
        categoria: 'electronica'
    },
    {
        id: 'audifonos-2',
        nombre: 'Audífonos Bluetooth',
        descripcion: '',
        precio: 5500,
        imagen: '1778555030771.jpg',
        categoria: 'electronica'
    },
    {
        id: 'audifonos-3',
        nombre: 'Audífonos Bluetooth',
        descripcion: '',
        precio: 5500,
        imagen: '1778555030862.jpg',
        categoria: 'electronica'
    },

    // ===== MODA Y ACCESORIOS =====
    {
        id: 'camisa',
        nombre: 'Camisa',
        descripcion: 'Talla L',
        precio: 5500,
        imagen: '1778555027554.jpg',
        categoria: 'moda'
    },
    {
        id: 'chaqueta',
        nombre: 'Chaqueta',
        descripcion: 'Talla XS..(viene siendo L).. 20 usd o al cambio',
        
        imagen: '1778555027624.jpg',
        categoria: 'moda'
    },
    {
        id: 'chaqueta',
        nombre: 'Chaqueta',
        descripcion: 'Talla M..(sirve a L).. 20 usd o al cambio',
        
        imagen: '1778555027678.jpg',
        categoria: 'moda'
    },
    {
        id: 'abrigo',
        nombre: 'Abrigo',
        descripcion: 'Talla L',
        precio: 8000,
        imagen: '1778555027728.jpg',
        categoria: 'moda'
    },
    {
        id: 'abrigo',
        nombre: 'Abrigo',
        descripcion: 'Talla L',
        precio: 10000,
        imagen: '1778555027776.jpg',
        categoria: 'moda'
    },
    {
        id: 'pantalon',
        nombre: 'Pantalon 4 Puertas',
        descripcion: 'Talla: L, Color: Negro',
        precio: 6500,
        imagen: '1778555027825.jpg',
        categoria: 'moda'
    },
    {
        id: 'pantalon',
        nombre: '',
        descripcion: 'Talla: M y S, Color: Negro',
        precio: 6500,
        imagen: '1778555027921.jpg',
        categoria: 'moda'
    },
    {
        id: 'pantalon',
        nombre: 'Pantalon',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555027969.jpg',
        categoria: 'moda'
    },
    {
        id: 'pantalon',
        nombre: 'Mono Gris',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555028019.jpg',
        categoria: 'moda'
    },
    {
        id: 'pantalon',
        nombre: 'Pantalon',
        descripcion: 'Talla: L',
        precio: 6500,
        imagen: '1778555028068.jpg',
        categoria: 'moda'
    },
    {
        id: 'camiseta',
        nombre: 'Camiseta',
        descripcion: 'Talla: L 16 usd o al cambio',
        
        imagen: '1778555028170.jpg',
        categoria: 'moda'
    },
    {
        id: 'camiseta',
        nombre: 'Camiseta',
        descripcion: 'Talla: L 16 usd o al cambio El jugador es Tatum',
        
        imagen: '1778555028119.jpg',
        categoria: 'moda'
    },
    {
        id: 'short',
        nombre: 'Shorts',
        descripcion: 'Talla: S, 22 usd o al cambio, Es Corto',
        
        imagen: '1778555028220.jpg',
        categoria: 'moda'
    },
    {
        id: 'short',
        nombre: 'Shorts',
        descripcion: 'Talla: 30, 24 usd o al cambio',
        
        imagen: '1778555028270.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullovers',
        descripcion: 'Talla: XL',
        precio: 5000,
        imagen: '1778555028467.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullovers',
        descripcion: 'Talla: XL',
        precio: 5000,
        imagen: '1778555028514.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullovers',
        descripcion: 'Talla: XL',
        precio: 5000,
        imagen: '1778555028566.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullovers',
        descripcion: 'Talla: XL',
        precio: 5000,
        imagen: '1778555028614.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullovers',
        descripcion: 'Talla: XL',
        precio: 5000,
        imagen: '1778555028665.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullovers',
        descripcion: 'Talla: XL',
        precio: 5000,
        imagen: '1778555028713.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6000,
        imagen: '1778555028763.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6000,
        imagen: '1778555028810.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6000,
        imagen: '1778555028860.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6000,
        imagen: '1778555028909.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555029005.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555028957.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555029101.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555029149.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555029196.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: Unica',
        precio: 6000,
        imagen: '1778555029243.jpg',
        categoria: 'moda'
    },
    {
        id: 'vestido',
        nombre: 'Vestido',
        descripcion: 'Talla: S',
        precio: 6500,
        imagen: '1778555029289.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullover',
        descripcion: 'Talla: S',
        precio: 3700,
        imagen: '1778555029337.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullover',
        descripcion: 'Talla: S',
        precio: 3700,
        imagen: '1778555029384.jpg',
        categoria: 'moda'
    },
    {
        id: 'pullover',
        nombre: 'Pullover',
        descripcion: 'Talla: S',
        precio: 3700,
        imagen: '1778555029430.jpg',
        categoria: 'moda'
    },
    {
        id: 'blusa',
        nombre: 'Blusa',
        descripcion: 'Talla: M',
        precio: 3300,
        imagen: '1778555029477.jpg',
        categoria: 'moda'
    },
    {
        id: 'blusa',
        nombre: 'Blusa',
        descripcion: 'Unitalla',
        precio: 2800,
        imagen: '1778555029523.jpg',
        categoria: 'moda'
    },
    {
        id: 'blusa',
        nombre: 'Blusa',
        descripcion: 'Unitalla',
        precio: 2800,
        imagen: '1778555029614.jpg',
        categoria: 'moda'
    },
    {
        id: 'blusa',
        nombre: 'Blusa',
        descripcion: 'Talla: S',
        precio: 2800,
        imagen: '1778555029660.jpg',
        categoria: 'moda'
    },
    {
        id: 'blusa y short',
        nombre: 'Blusa y Short',
        descripcion: 'Talla: S',
        precio: 3700,
        imagen: '1778555029706.jpg',
        categoria: 'moda'
    },
    {
        id: 'blusa y short',
        nombre: 'Blusa y Short',
        descripcion: 'Talla: S',
        precio: 3700,
        imagen: '1778555029749.jpg',
        categoria: 'moda'
    },
    // ===== ACCESORIOS  =====
    {
        id: 'gorra',
        nombre: 'Gorra Brooklyn',
        descripcion: 'Color: Negra',
        precio: 4000,
        imagen: '1778555029794.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'gorra',
        nombre: 'Gorra NY',
        descripcion: 'Color: Gris',
        precio: 4000,
        imagen: '1778555029840.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'canguro-riñonera',
        nombre: 'Canguro-Riñonera',
        descripcion: 'Color: Negro',
        precio: 3500,
        imagen: '1778555029887.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'canguro-riñonera',
        nombre: 'Canguro-Riñonera',
        descripcion: 'Color: Negro',
        precio: 3500,
        imagen: '1778555029933.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'canguro-riñonera',
        nombre: 'Canguro-Riñonera',
        descripcion: 'Color: Negro',
        precio: 3500,
        imagen: '1778555029980.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030259.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030307.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030259.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030353.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030400.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030072.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'bolso',
        nombre: 'Bolso',
        descripcion: '',
        precio: 4500,
        imagen: '1778555030118.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'billetera',
        nombre: 'Billetera',
        descripcion: '',
        precio: 2300,
        imagen: '1778555030026.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cinto',
        nombre: 'Cinto',
        descripcion: 'Color: Negro / Tamaño: 43.3 pulgadas',
        precio: 4500,
        imagen: '1778555030167.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cinto',
        nombre: 'Cinto',
        descripcion: 'Color: Negro-B / Tamaño: 51.18 pulgadas',
        precio: 3300,
        imagen: '1778555030213.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cinto',
        nombre: 'Cinto',
        descripcion: 'Color: 3 Piezas Negro / Tamaño: 51.18 pulgadas',
        precio: 3000,
        imagen: '1778555030677.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'relojes',
        nombre: 'Reloj',
        descripcion: 'Boxes Not Included',
        precio: 3500,
        imagen: '1778555030445.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cadenas',
        nombre: 'Cadenas',
        descripcion: '',
        precio: 3500,
        imagen: '1778555030491.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cadenas',
        nombre: 'Cadenas',
        descripcion: '',
        precio: 2700,
        imagen: '1778555030583.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cadenas',
        nombre: 'Cadenas',
        descripcion: '',
        precio: 3500,
        imagen: '1778555030537.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cadenas',
        nombre: 'Cadenas',
        descripcion: '8 usd o al cambio',
        
        imagen: '1778555030629.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cadenas',
        nombre: 'Cadenas',
        descripcion: 'Color: Negro',
        precio: 4000,
        imagen: '1778555030946.jpg',
        categoria: 'accesorios',
        
    },
    {
        id: 'cadenas',
        nombre: 'Cadenas',
        descripcion: 'Color: Negro',
        precio: 3000,
        imagen: '1778555030723.jpg',
        categoria: 'accesorios',
        
    },
    // ===== CALZADO (NUEVA CATEGORÍA) =====
    {
        id: 'converse',
        nombre: 'Converse',
        descripcion: '#36, 39, 40',
        precio: 15000,
        imagen: '1778555027483.jpg',
        categoria: 'calzado',
        
    },
    {
        id: 'nike-air',
        nombre: 'Nike Air',
        descripcion: '#45, Son G5',
        precio: 17000,
        imagen: '1778555027411.jpg',
        categoria: 'calzado',
        
    },
    {
        id: 'nike-air',
        nombre: 'Nike Air',
        descripcion: '#36, 37.5',
        precio: 15500,
        imagen: '1778555027340.jpg',
        categoria: 'calzado',
        
    },
   
];