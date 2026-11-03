// Servicios originales de la página Hoolix
const servicios = [
    {
        id: "corporate",
        img: "img/corporate.webp",
        name: "Corporate",
        icon: "building",
        tint: "#2900fd",
        desc: "Presencia institucional sólida para tu empresa.",
        url: "https://hoolix.it/project/corporate/"
    },
    {
        id: "business",
        img: "img/business.webp",
        name: "Business",
        icon: "briefcase",
        tint: "#0b6e99",
        desc: "Webs orientadas a captar clientes y negocio.",
        url: "https://hoolix.it/project/business/"
    },
    {
        id: "ecommerce",
        img: "img/ecommerce.webp",
        name: "E-commerce",
        icon: "bag",
        tint: "#c2410c",
        desc: "Tiendas online rápidas, seguras y que convierten.",
        url: "https://hoolix.it/project/ecommerce/"
    },
    {
        id: "hospitality",
        img: "img/hospitality.webp",
        name: "Hospitality",
        icon: "bell",
        tint: "#7c3aed",
        desc: "Hoteles y alojamientos con reservas directas.",
        url: "https://hoolix.it/project/hospitality/"
    },
    {
        id: "food",
        img: "img/food.webp",
        name: "Food & Beverage",
        icon: "utensils",
        tint: "#b91c1c",
        desc: "Restaurantes y marcas gastronómicas con sabor.",
        url: "https://hoolix.it/project/foodbeverage/"
    },
    {
        id: "institutional",
        img: "img/institutional.webp",
        name: "Institucional",
        icon: "landmark",
        tint: "#1d4ed8",
        desc: "Webs claras y accesibles para entidades públicas.",
        url: "https://hoolix.it/project/istituzionali/"
    },
    {
        id: "medical",
        img: "img/medical.webp",
        name: "Medical",
        icon: "cross",
        tint: "#047857",
        desc: "Salud con confianza: citas e información clara.",
        url: "https://hoolix.it/project/medical/"
    }
];

// Obtener todos los servicios
const obtenerServicios = (req, res) => {
    res.json(servicios);
};

module.exports = {
    obtenerServicios
};