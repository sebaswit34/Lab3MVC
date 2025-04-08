const productsSlice = {
    newestProduct: {
        id: 1,
        name: "Najlepszy Produkt",
        price: 199.99,
        description: "To jest nasz flagowy produkt!"
    },
    products: [
        {
            id: 2,
            name: "Produkt A",
            price: 49.99
        },
        {
            id: 3,
            name: "Produkt B",
            price: 89.99
        },
        {
            id: 4,
            name: "Produkt C",
            price: 29.99
        }
    ]
};
module.exports = productsSlice;
