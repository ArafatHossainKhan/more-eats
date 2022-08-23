import { BiArrowBack } from "react-icons/bi";
import { GrClear } from "react-icons/gr";
import { useCartContext } from "../context/CartContext";
import CartItems from "./CartItems";

const Cart = ({ cart, setCart }: any) => {
  const { cartItems, clearCart } = useCartContext();

  //   const clearCartItems = () => {
  //     setCartItem([]);
  //   };
  return (
    <div className="">
      {cart ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        <></>
      )}
      <div
        className={
          cart
            ? "fixed  top-0 right-0 w-full sm:w-[400px] h-screen bg-white z-40 duration-500  flex flex-col justify-between"
            : "fixed  top-0 left-[100%] w-full sm:w-[400px] h-screen bg-white z-40 duration-500 "
        }
      >
        <div className="flex items-center justify-between px-4">
          <BiArrowBack
            size={30}
            onClick={() => setCart(!cart)}
            className=" cursor-pointer"
          />
          <h2 className="text-2xl p-4 ">Cart Items</h2>
          <button onClick={clearCart}>
            <GrClear />
          </button>
        </div>

        <div className=" flex h-full bg-orange-400 text-black py-6 flex-col rounded-t-3xl overflow-y-scroll overscroll-none">
          {cartItems &&
            cartItems.map((item) => <CartItems key={item.id} {...item} />)}
        </div>
        <div className="bg-orange-600 text-white h-[60px] flex items-center justify-center ">
          <p>Proceed Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
