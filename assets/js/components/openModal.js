// Obtener el modal y el botón para cerrar
const productModal = document.getElementById('productModal');
const closeModalButton = document.getElementById('closeModal');

// Función para abrir el modal
function openModal() {
    productModal.style.display = 'none';
}

// Función para cerrar el modal
function closeModal() {
    productModal.style.display = 'none';
}

// Agregar un evento clic al botón "Cerrar" para cerrar el modal
closeModalButton.addEventListener('click', closeModal);

// Agregar un evento clic al botón "Agregar al carrito" para abrir el modal con la información del producto
const addToCartButtons = document.querySelectorAll('.product__btn-add');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        
        const productInfo = getProductInfo(); // Implementa esta función para obtener la información del producto
        const productDetails = document.getElementById('productDetails');
        productDetails.innerHTML = productInfo;
        openModal();
    });
});

export default openModal