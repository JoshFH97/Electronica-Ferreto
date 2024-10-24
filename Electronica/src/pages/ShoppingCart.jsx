import React, { useEffect, useState } from "react";
import "../ShoppingCart.css";
import Navbar from "../Components/Navbar";
import usingFetch from '../hooks/usingFetch.js';
import Cookies from 'js-cookie';
import Payments from "../Components/Payments.jsx";
import WrappedPayments from "../Components/Payments.jsx";

const ShoppingCart = () => {
  // Estados para manejar la recarga, mapeo de productos, objeto del carrito y el total
  const [reload, setReload] = useState(false); // Estado booleano para forzar la recarga de datos
  const [maping, setMaping] = useState([]); // Estado para almacenar los detalles de los productos en el carrito
  const [objCarrito, setObjCarrito] = useState(JSON.parse(Cookies.get(Cookies.get('userID')) || '[]')); // Estado que representa el carrito, inicializado desde una cookie
  const [total, setTotal] = useState(0); // Estado para almacenar el total de la compra (posiblemente ya no necesario)
  

  // Primer useEffect: se ejecuta al montar el componente y cada vez que cambia 'reload'
  useEffect(() => {
    getCart(); // Llama a la función para obtener los productos del carrito
  }, [reload]); // Dependencia en 'reload' para reejecutar cuando este cambie

  // Segundo useEffect: se ejecuta cada vez que 'objCarrito' cambia
  useEffect(() => {
    // Actualiza las cookies cada vez que 'objCarrito' cambia
    if (objCarrito.length > 0) {
      Cookies.set(Cookies.get('userID'), JSON.stringify(objCarrito), { expires: 7 }); // Establece la cookie 'cart' con el contenido actual del carrito y una expiración de 7 días
    }
  }, [objCarrito]); // Dependencia en 'objCarrito' para reejecutar cuando este cambie

  // Tercer useEffect: actualiza el total cada vez que 'objCarrito' o 'maping' cambian
  useEffect(() => {
    // Calcula el nuevo total sumando el precio por la cantidad de cada producto
    const newTotal = maping.reduce((acc, product) => {
      const carritoItem = objCarrito.find(item => item.id === product.id_producto); // Encuentra el producto en el carrito
      return acc + (carritoItem ? carritoItem.cantidad * product.precio : 0); // Suma el precio multiplicado por la cantidad si el producto está en el carrito
    }, 0);

    setTotal(newTotal); // Actualiza el estado del total con el nuevo valor calculado
  }, [objCarrito, maping]); // Dependencias en 'objCarrito' y 'maping' para reejecutar cuando cualquiera de ellos cambie

  // Función asíncrona para obtener los productos del carrito desde la API
  const getCart = async () => {
    const produCarrito = objCarrito.map(item => item.id); // Obtiene los IDs de los productos en el carrito
    const dataProductos = await usingFetch.get(`api/productos`); // Realiza una solicitud GET a la API para obtener todos los productos

    // Filtra los productos que están en el carrito basándose en los IDs
    const transitoria = dataProductos.filter(item => produCarrito.includes(item.id_producto));
    setMaping(transitoria); // Actualiza el estado 'maping' con los productos filtrados que están en el carrito
  };

  // Función para manejar el cambio de cantidad de un producto en el carrito
  const handleQuantityChange = (prod, delta) => {
    const id = prod.id_producto; // Obtiene el ID del producto que se está modificando

    // Actualiza la cantidad del producto en el carrito
    setObjCarrito(prevCarrito => prevCarrito.map(product =>
      product.id === id
        ? { ...product, cantidad: Math.max(0, product.cantidad + delta) } // Incrementa o decrementa la cantidad, asegurando que no sea negativa
        : product // Deja el producto sin cambios si no coincide el ID
    ));
  };

  // Función para manejar la eliminación de un producto del carrito
  const handleRemove = (id) => {
    const updatedCart = objCarrito.filter(item => item.id !== id); // Filtra el carrito para eliminar el producto con el ID especificado

    // Actualiza el estado y las cookies con el carrito actualizado
    setObjCarrito(updatedCart);
    Cookies.set(Cookies.get('userID'), JSON.stringify(updatedCart), { expires: 7 });

    // Alterna el estado 'reload' para forzar la recarga de useEffect y actualizar la visualización de productos
    setReload(!reload);
  };

  // Función para devolver la cantidad de un producto específico en el carrito
  const returnQuantity = (id) => {
    const filterObject = objCarrito.find(item => item.id === id); // Encuentra el objeto del carrito que coincide con el ID

    if (filterObject) {
      return filterObject.cantidad; // Retorna la cantidad si se encuentra el producto en el carrito
    }

    return 0; // Retorna 0 si el producto no está en el carrito
  };

  // Valores dummy por ahora (reemplazar con cálculos reales si es necesario)
  const discount = 0; // Descuento aplicado (actualmente 0)
  const finalTotal = total - discount; // Calcula el total final restando el descuento

  return (
    <>
      {/* Componente de navegación */}
      <Navbar bg='light' text='light' />
      
      {/* Sección principal del carrito de compras */}
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{ borderRadius: 15 }}>
                <div className="card-body">
                  <div className="row">
                    {/* Columna para los productos del carrito */}
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                      
                      {/* Verifica si hay productos en 'maping' */}
                      {maping.length !== 0 ? (
                        // Mapea cada producto para mostrarlo en el carrito
                        maping.map((product) => (
                          <div className="d-flex align-items-center mb-5" key={product.id_producto}>
                            <div className="flex-shrink-0">
                              {/* Imagen del producto */}
                              <img src={product.imagen} className="img-fluid" style={{ width: 150 }} alt={product.nombre} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              {/* Botón para eliminar el producto del carrito */}
                              <a href="#!" className="float-end" onClick={() => handleRemove(product.id_producto)}>
                                <i className="fas fa-times" />
                              </a>
                              {/* Nombre y detalles del producto */}
                              <h5 className="text-primary">{product.nombre}</h5>
                              <h6 style={{ color: "#9e9e9e" }}>Color: {product.color}</h6>
                              <div className="d-flex align-items-center">
                                {/* Precio del producto */}
                                <p className="fw-bold mb-0 me-5 pe-3">{product.precio}$</p>
                                {/* Control de cantidad */}
                                <div className="def-number-input number-input safari_only">
                                  {/* Botón para disminuir la cantidad */}
                                  <button className="minus" onClick={() => handleQuantityChange(product, -1)} />
                                  {/* Campo de cantidad, de solo lectura */}
                                  <input className="quantity fw-bold bg-body-tertiary text-body" min={0} name="quantity" value={returnQuantity(product.id_producto)} type="number" readOnly />
                                  {/* Botón para aumentar la cantidad */}
                                  <button className="plus" onClick={() => handleQuantityChange(product, 1)} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        // Mensaje si el carrito está vacío
                        <p>No products in your cart.</p>
                      )}
                      
                      {/* Línea divisoria */}
                      <hr className="mb-4" style={{ height: 2, backgroundColor: "#1266f1", opacity: 1 }} />
                      
                      {/* Descuento aplicado */}
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">{discount}$</p>
                      </div>
                      
                      {/* Total a pagar */}
                      <div className="d-flex justify-content-between p-2 mb-2 bg-primary">
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">{finalTotal}$</h5>
                      </div>
                    </div>
                    <WrappedPayments/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
  
};

export default ShoppingCart; // Exporta el componente para su uso en otras partes de la aplicación
