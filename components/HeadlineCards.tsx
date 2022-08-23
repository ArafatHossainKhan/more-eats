/* eslint-disable @next/next/no-img-element */
const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun&apos;s Out, BOGO&apos;s out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black bg-white absolute bottom-4 mx-2">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="card"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun&apos;s Out, BOGO&apos;s out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black bg-white absolute bottom-4 mx-2">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="card"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun&apos;s Out, BOGO&apos;s out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white text-black bg-white absolute bottom-4 mx-2">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="card"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
