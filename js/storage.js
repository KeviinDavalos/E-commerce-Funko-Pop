//Este archivo va a unificar las funciones de persistencia del carrito en el localStorage
const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    //Convertimos a json antes de guardar con stringify
    localStorage.setItem(KEY, JSON.stringify(carrito));
}
export const obtenerCarrito = () => {
    //Convertimos a js para obtener los datos con parse
    return JSON.parse(localStorage.getItem(KEY)) || []
}
export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY)
}