function products(products) {
    const db = [...products];
    function printProducts() {
        const productsDOM = document.querySelector('.products__container');
        let htmlProduct = '';
        for (const product of db) {
            htmlProduct += `
            <article class="product">
                <div class="product__image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product__content">
                    <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                        <i class="bx bx-cart-add"></i>
                    </button>
                    <span class="product__price">$${product.price}</span>
                    <span class="product__stock">Disponibles: ${product.quantity}</span>
                    <h3 class="product__title">${product.name}</h3>
                </div>
            </article>
            `;
        }
        productsDOM.innerHTML = htmlProduct;
    }
    printProducts()

    return {
        db,
        printProducts
    };

    // Obtener todos los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.product__btn-add');

// Manejar clic en el botón "Agregar al carrito"
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.parentElement; // Obtener el elemento del producto
        const stockElement = product.querySelector('.stock-value'); // Obtener el elemento del stock
        const stock = parseInt(stockElement.textContent); // Convertir el stock a un número
        const cartItemCountElement = document.querySelector('.cart__count--item'); // Elemento del contador del carrito

        // Validar si hay stock disponible
        if (stock > 0) {
            // Restar 1 al stock
            stockElement.textContent = stock - 1;
            
            // Incrementar el contador del carrito
            const cartItemCount = parseInt(cartItemCountElement.textContent);
            cartItemCountElement.textContent = cartItemCount + 1;
            
            // Aquí puedes agregar el producto al carrito o realizar otras acciones
        } else {
            alert('Lo siento, este producto está agotado.');
        }
    });
});

}
export default products;