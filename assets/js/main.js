import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
import darkModeToggle from "./components/darkmode.js";
import openModal from "./components/openModal.js";





/* Ui Elements */

/* ocultar loader */
loader ()

/* Mostrar menu */
showMenu ()

/* Mostrar carrito */
showCart()

/* end UI Elements */
/* Products */
const { db, printProducts } = products(await getProducts())

/* carrito */
cart(db, printProducts)

openModal()


window.darkModeToggle = darkModeToggle
