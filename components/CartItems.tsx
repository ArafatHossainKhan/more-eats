/* eslint-disable @next/next/no-img-element */
import { AiOutlineClose } from "react-icons/ai";
import { MdAdd, MdRemove } from "react-icons/md";
import { useCartContext } from "../context/CartContext";
import { data } from "../Data/Data";

type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItems = ({ id, quantity }: CartItemsProps) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCartContext();
  const item = data.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className=" w-full flex justify-center ">
      <div className="bg-white/30 backdrop-blur-lg  m-2 w-[360px] flex items-center justify-start rounded-lg">
        <img className="h-[70px] rounded-lg" src={item.image} alt={item.name} />
        <div className="px-2 flex flex-col">
          <h1>{item.name}</h1>
          <div className="flex items-center ">
            <p className="font-bold">
              <span>$</span>
              {item.price}
            </p>
            <button className="ml-3">
              <AiOutlineClose
                size={15}
                onClick={() => {
                  removeFromCart(id);
                }}
                className="font-extrabold "
              />
            </button>
            <div className="mx-16 flex items-center">
              <MdRemove onClick={() => decreaseCartQuantity(id)} />

              <span className="m-1 w-2 rounded-md bg-orange-600 px-4 text-center text-white flex justify-center items-center">
                {quantity}
              </span>

              <MdAdd onClick={() => increaseCartQuantity(id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
