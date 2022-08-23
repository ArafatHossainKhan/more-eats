/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { data } from "../Data/Data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //filter pizza burger / pizza

  const filterType = (category: string) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price
  const filterPrice = (price: number) => {
    setFoods(
      data.filter((item) => {
        return item.price < price;
      })
    );
  };

  const filterPriceAboveTen = (price: number) => {
    setFoods(
      data.filter((item) => {
        return item.price <= price && item.price >= 10;
      })
    );
  };

  const filterSortDeccending = () => {
    setFoods([...data].sort((a, b) => b.price - a.price));
  };
  const filterSortAccending = () => {
    // const itemPrice = [].concat(foods).sort((a, b) => a.price - b.price);
    // console.log(itemPrice);
    setFoods([...data].sort((a, b) => a.price - b.price));
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-8">
      <h1 className="text-ornage-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between mt-8">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter type</p>

          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice(10)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Bellow 10 $
            </button>
            <button
              onClick={() => filterPriceAboveTen(20)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Above 10 $
            </button>
            <button
              onClick={filterSortAccending}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Low to High
            </button>
            <button
              onClick={filterSortDeccending}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              High to Low
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={`${item.name}+${item.id}`}
            className="border rounded-lg shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full  object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-4 py-4 flex-col">
              <p className="font-bold text-sm">{item.name}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="font-bold">
                  <span className="text-orange-500  p-2 rounded-lg">
                    <span>$</span> {item.price}
                  </span>
                </p>
                <div className="flex items-center">
                  <MdFavorite
                    className="text-red-600 mr-5 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out"
                    size={25}
                  />

                  <BsFillCartFill
                    className="text-red-600 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out"
                    size={25}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
