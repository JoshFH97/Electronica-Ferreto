import React, { useEffect, useState } from "react";
import "../ShoppingCart.css";
import Navbar from "../Components/Navbar";
import usingFetch from '../hooks/usingFetch.js';
import Cookies from 'js-cookie';
import Payments from "../Components/Payments.jsx";

const ShoppingCart = () => {
  const [reload, setReload] = useState(false);
  const [maping, setMaping] = useState([]);
  const [objCarrito, setObjCarrito] = useState(JSON.parse(Cookies.get('cart') || '[]'));
  const [total, setTotal] = useState(0); // Possibly not needed anymore

  useEffect(() => {
    console.log("------------------------------------------------------------");
    console.log("_______________USE EFFECT  1__________________");
    
    console.log('Cookies antes del getCart: ', Cookies.get('cart'));
    getCart();
    
    console.log("------------------------------------------------------------");
  }, [reload]);

  useEffect(() => {
    console.log("------------------------------------------------------------");
    console.log("_______________USE EFFECT  2__________________");
    // Set cookies whenever objCarrito changes
    if (objCarrito.length > 0) {
      Cookies.set('cart', JSON.stringify(objCarrito), { expires: 7 });
      console.log('Cookies updated:', Cookies.get('cart'));
    }
    
    console.log("------------------------------------------------------------");
  }, [objCarrito]);

  useEffect(() => {
    console.log("_______________USE EFFECT  3 - Update Total__________________");
  
    const newTotal = maping.reduce((acc, product) => {
      const carritoItem = objCarrito.find(item => item.id === product.id_producto);
      return acc + (carritoItem ? carritoItem.cantidad * product.precio : 0);
    }, 0);
  
    setTotal(newTotal);
    console.log('Nuevo total: ', newTotal);
  
  }, [objCarrito, maping]);
  

  const getCart = async () => {
    console.log("------------------------------------------------------------");
    console.log("_______________GET CART__________________");
    
    const produCarrito = objCarrito.map(item => item.id);
    const dataProductos = await usingFetch.get(`api/productos`);
    
    const transitoria = dataProductos.filter(item => produCarrito.includes(item.id_producto));
    setMaping(transitoria);
    
    console.log('ProduCarrito IDs: ', produCarrito);
    console.log('Transitoria: ', transitoria);
    console.log('Datos del GET productos: ', dataProductos);
    console.log("------------------------------------------------------------");
  };

  const handleQuantityChange = (prod, delta) => {
    console.log("_______________handleQuantityChange__________________");
  
    const id = prod.id_producto;
  
    setObjCarrito(prevCarrito => prevCarrito.map(product =>
      product.id === id
        ? { ...product, cantidad: Math.max(0, product.cantidad + delta) }
        : product
    ));
    
    console.log("Carrito actualizado con nueva cantidad.");
  };
  

  const handleRemove = (id) => {
    console.log("------------------------------------------------------------");
    console.log("_______________handleRemove__________________");

    const updatedCart = objCarrito.filter(item => item.id !== id);
    
    // Update state and cookies
    setObjCarrito(updatedCart);
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
    
    // Trigger a reload to update the displayed items
    setReload(!reload);
    
    console.log('Carrito después de eliminar:', updatedCart);
    console.log("------------------------------------------------------------");
  };

  const returnQuantity = (id) => {
    console.log("------------------------------------------------------------");
    console.log("_______________returnQuantity__________________");

    const filterObject = objCarrito.find(item => item.id === id);
    
    if (filterObject) {
      console.log('Cantidad del objeto filtrado: ', filterObject.cantidad);
      return filterObject.cantidad;
    }
    
    return 0; // Return 0 if not found
  };

  // Dummy values for now (replace with actual calculations)
  
  const discount = 0;
  const finalTotal = total - discount;

  return (
    <>
      <Navbar bg='light' text='light' />
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{ borderRadius: 15 }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                      {maping.length !== 0 ? (
                        maping.map((product) => (
                          <div className="d-flex align-items-center mb-5" key={product.id_producto}>
                            <div className="flex-shrink-0">
                              <img src={product.imagen} className="img-fluid" style={{ width: 150 }} alt={product.nombre} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <a href="#!" className="float-end" onClick={() => handleRemove(product.id_producto)}>
                                <i className="fas fa-times" />
                              </a>
                              <h5 className="text-primary">{product.nombre}</h5>
                              <h6 style={{ color: "#9e9e9e" }}>Color: {product.color}</h6>
                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">{product.precio}$</p>
                                <div className="def-number-input number-input safari_only">
                                  <button className="minus" onClick={() => handleQuantityChange(product, -1)} />
                                  <input className="quantity fw-bold bg-body-tertiary text-body" min={0} name="quantity" value={returnQuantity(product.id_producto)} type="number" readOnly />
                                  <button className="plus" onClick={() => handleQuantityChange(product, 1)} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No products in your cart.</p>
                      )}
                      <hr className="mb-4" style={{ height: 2, backgroundColor: "#1266f1", opacity: 1 }} />
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">{discount}$</p>
                      </div>
                      <div className="d-flex justify-content-between p-2 mb-2 bg-primary">
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">{finalTotal}$</h5>
                      </div>
                    </div>
                    <Payments/>
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

export default ShoppingCart;
