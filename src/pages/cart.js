import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/global/Navbar'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from '../../components/utils/cn'
import { CartContext } from '../../components/global/CartContext';
import CartIcon from '../../components/icons/CartIcon';
import axios from 'axios';
import Table from '../../components/global/Table.js'
import styled from "styled-components";

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [ products, setProducts ] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
 
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  let total = 0;
  products.forEach((product) => {
    const quantity = cartProducts.filter((id) => id === product._id).length;
    total += quantity * product.price;
  });

  function goToWhatsapp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const departamento = document.getElementById('departamento').value;

    let message = `Hola, me gustaría realizar un pedido con los siguientes detalles:\n\n`;
    products.forEach(product => {
      const quantity = cartProducts.filter(id => id === product._id).length;
      message += `- ${product.title} (x${quantity}): ${(
        quantity * product.price
      ).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}\n`;
    });
    message += `\nTotal: ${total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}\n\n`;
    message += `Datos de contacto:\n`;
    message += `Nombre: ${name}\n`;
    message += `Email: ${email}\n`;
    message += `Dirección: ${streetAddress}\n`;
    message += `Ciudad: ${city}\n`;
    message += `Código Postal: ${postalCode}\n`;
    message += `Departamento: ${departamento}\n`;

    const whatsappURL = `https://wa.me/573023639624?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
  return (
    <>
      <main className="flex bg-[#0a0a0a] items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0">
          <div className='text-white mb-10 grid grid-rows-2   md:grid-cols-2 mt-4 md:mt-8 gap-[40px] md:gap-10 mx-2.5 md:mx-6'>
            
            {/* Box Products */}

            <div className='bg-neutral-900 rounded-[8.6px] p-5'>
              <h2 className="font-bold text-xl flex text-neutral-200">
                Carrito de compras
                <CartIcon 
                  className="
                    mt-[6.6px] ml-2 h-[18px] sm:h-[18px] md:h-4 lg:h-5
                  "
                />
              </h2>

              <p className="text-sm max-w-sm mt-2 text-neutral-300">
              ¡Mejora tu rendimiento! 💪 Completa tu compra con nuestros suplementos deportivos de alta calidad. ¡No te quedes sin ellos!
              </p>
              <br />
              <br />
              {!cartProducts?.length && (
                <div>Tu carrito de compras esta vacio 😮</div>
              )}
              {products?.length > 0 && ( 
                <Table>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr>
                        <td className='py-[8px]'>
                          
                            <ProductImageBox>
                                <img src={product.images[0]} alt={product.title} />
                            </ProductImageBox>
                            {product.title}
                          
                        </td>
                        <td>
                          <button 
                            onClick={() => lessOfThisProduct(product._id)}
                            className='
                              border-0 px-[8.5px] py-1.5 rounded cursor-pointer inline-flex items-center
                              no-underline font-poppins font-medium text-sm bg-[#303030] text-white
                              border-black mx-[2px]
                            '
                          >
                            -
                          </button>
                          <QuantityLabel>
                            {
                              cartProducts.filter
                              ( 
                                id => id === product._id 
                              ).length
                            }
                          </QuantityLabel>
                          <button
                            onClick={() => moreOfThisProduct(product._id)} 
                            className='
                              border-0 px-[8.5px] py-1.5 rounded cursor-pointer inline-flex items-center
                              no-underline font-poppins font-medium text-sm bg-[#303030] text-white
                              border-black mx-[2px]
                            '
                          >
                            +
                          </button>
                        </td>
                        <td>
                          {(
                            cartProducts.filter(id => id === product._id).length * product.price
                          ).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td  className='py-6 text-left uppercase text-gray-300 font-semibold text-xs'>
                        Total
                      </td>
                      <td>
                        
                      </td>
                      <td>
                        {total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
              <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            </div>

            {/* Box of Order Information */}

            {!!cartProducts?.length && (
              <div className='bg-neutral-900 rounded-[8.6px] p-5'>

                <h2 className="font-bold text-xl text-neutral-200">
                  Bienvenido a Beast Supply
                </h2>

                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                  Déjenos tus datos de contacto para realizar la entrega de tu pedido o de la perona 
                  que recibirá tu pedido.
                </p>

                <form className="my-8" >

                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                    <LabelInputContainer>
                      <Label htmlFor="name">Nombre y Apellido</Label>
                      <Input id="name" placeholder="Tyler Durden (Ejemplo)" type="text" />
                    </LabelInputContainer>

                  </div>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Dirección Email</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com (Ejemplo)" type="email" />
                  </LabelInputContainer>

                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

                    <LabelInputContainer>
                      <Label htmlFor="streetAddress">Dirección</Label>
                      <Input id="streetAddress" placeholder="Cll 9 # 70-90 (Ejemplo)" type="text" />
                    </LabelInputContainer>

                    <LabelInputContainer>
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" placeholder="Santiago de Cali (Ejemplo)" type="text" />
                    </LabelInputContainer>

                  </div>

                  <LabelInputContainer  className='mb-4'>
                      <Label htmlFor="postalCode">Codigo Postal</Label>
                      <Input id="postalCode" placeholder="760032 (Ejemplo)" type="text" />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="streetAddress">Conjunto Residencial - Bloque - Casa</Label>
                    <Input id="streetAddress" placeholder="Naturezza, Bloque 2, Apto. 212 (Ejemplo)" type="text" />
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="departamento">Departamento</Label>
                    <Input id="departamento" placeholder="VALLE (Ejemplo)" type="text" />
                  </LabelInputContainer>

                  <button
                    type='button'
                    onClick={goToWhatsapp}
                    className="
                      w-full inline-flex lg:h-16 md:h-15 sm:h-14 h-12  text-xs sm:text-sm md:text-xl animate-shimmer items-center justify-center z-40
                      rounded-lg border border-[#5d9a8c] bg-[linear-gradient(110deg,#000103,45%,#75ba75,55%,#000103)] 
                      bg-[length:200%_100%] px-3.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                      focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                    "
                  >
                    Realizar pedido
                    <WhatsAppIcon className="ml-2 h-3.5 sm:h-3.8 md:h-4 lg:h-5" />
                  </button>
                  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                </form>
              </div>
            )}
            </div>
        </section>
        <section className="w-full mt-20 inset-0 h-screen">
          
        </section>
      </main>
    </>
  )
};


const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
