import React, { useEffect, useState } from "react";
import "../ShoppingCart.css";
import Navbar from "../Components/Navbar";
import usingFetch from '../hooks/usingFetch.js';
import Cookies from 'js-cookie';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Samsung Galaxy M11 64GB", color: "white", price: 799, quantity: 1, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" },
    { id: 2, name: "Headphones Bose 35 II", color: "red", price: 239, quantity: 1, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" },
    { id: 3, name: "iPad 9.7 6-gen WiFi 32GB", color: "rose pink", price: 659, quantity: 2, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp" },
  ]);

  const [maping,setMaping]=useState([]);
  
  useEffect(()=>{
getCart()

console.log(JSON.parse(Cookies.get('cart') ));

  },[])



  const getCart=async()=>{
  

  const ids = JSON.parse(Cookies.get('cart') || '[]').map(Number);
  const dataProductos = await usingFetch.get(`api/productos`);
  const transitoria = dataProductos.filter(item => ids.includes(item.id_producto));
  setMaping(transitoria);
  console.log(transitoria);
  console.log(dataProductos);
  

}




  const handleQuantityChange = (id, delta) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: Math.max(0, product.quantity + delta) }
        : product
    ));
  };

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const discount = 95;
  const finalTotal = total - discount;

  return (
    <>
    {/* Renderiza el componente Navbar con las propiedades bg y text */}
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
                    {maping.map((product) => (
                      <div className="d-flex align-items-center mb-5" key={product.id_producto}>
                        <div className="flex-shrink-0">
                          <img src={product.imagen} className="img-fluid" style={{ width: 150 }} alt={product.nombre} />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end" onClick={() => handleRemove(product.id)}>
                            <i className="fas fa-times" />
                          </a>
                          <h5 className="text-primary">{product.nombre}</h5>
                          <h6 style={{ color: "#9e9e9e" }}>Color: {product.color}</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">{product.price}$</p>
                            <div className="def-number-input number-input safari_only">
                              <button className="minus" onClick={() => handleQuantityChange(product.id, -1)} />
                              <input className="quantity fw-bold bg-body-tertiary text-body" min={0} name="quantity" value={product.quantity} type="number" readOnly />
                              <button className="plus" onClick={() => handleQuantityChange(product.id, 1)} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                    <form className="mb-5">
                      <div className="form-outline mb-5">
                        <input type="text" id="typeText" className="form-control form-control-lg" value=" " readOnly  />
                        <label className="form-label" htmlFor="typeText">Card Number</label>
                      </div>
                      <div className="form-outline mb-5">
                        <input type="text" id="typeName" className="form-control form-control-lg" value=" " readOnly />
                        <label className="form-label" htmlFor="typeName">Name on card</label>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-5">
                          <div className="form-outline">
                            <input type="text" id="typeExp" className="form-control form-control-lg" value=" " readOnly />
                            <label className="form-label" htmlFor="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="form-outline">
                            <input type="password" id="typeCvv" className="form-control form-control-lg" value=" " readOnly />
                            <label className="form-label" htmlFor="typeCvv">Cvv</label>
                          </div>
                        </div>
                      </div>
                      <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit{" "}<a href="#!">obcaecati sapiente</a>.</p>
                      <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>
                      <h5 className="fw-bold mb-5" style={{ position: "absolute", bottom: 0 }}>
                        <a href="#!"><i className="fas fa-angle-left me-2" />Back to shopping</a>
                      </h5>
                    </form>
                  </div>
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
