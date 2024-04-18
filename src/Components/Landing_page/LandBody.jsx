import React from "react";

function LandBody() {
  return (
    <div>
      <div className="w-full">Brand</div>
      <div>
       <h1 className="text-center text-black font-bold text-4xl truncate"> Membership</h1>
        <div className="flex flex-col lg:flex-row justify-evenly m-4">

          <div className="membership flex flex-col justify-between">
            <div className="my-2">
              <h1 className="font-bold text-center text-black text-3xl truncate">Free</h1>
            </div>
            <div className="text-black text-xl m-2 p-2 h-[78%]">
              <ol>
                <li className="my-4">
                  <p>free delivery above 500rs</p>
                </li>
                <li className="my-4">
                  <p>new offers after 2 two days</p>
                </li>
                <li className="my-4">
                  <p>no exclusive offers</p>
                </li>
                <li className="my-4">
                  <p>no prime</p>
                </li>
              </ol>
            </div>
            <div className="buttonAnimaton rounded-xl py-2 px-4 mb-3 bg-gray-900 text-white font-bold text-lg w-full text-center">
              <button>0.rs - Submit</button>
            </div>
          </div>

          <div className="membership flex flex-col justify-between">
            <div className="text-center my-2">
              <h1 className="font-bold text-black text-3xl truncate">Monthly</h1>
            </div>
            <div className="text-black text-xl m-2 p-2 h-[78%] truncate">
              <ol>
                <li className="my-4">
                  <p>free delivery above 500rs</p>
                </li>
                <li className="my-4">
                  <p>new offers after 2 two days</p>
                </li>
                <li className="my-4">
                  <p>no exclusive offers</p>
                </li>
                <li className="my-4">
                  <p>no prime</p>
                </li><li className="my-4">
                  <p>free delivery above 500rs</p>
                </li>
                <li className="my-4">
                  <p>new offers after 2 two days</p>
                </li>
                <li className="my-4">
                  <p>no exclusive offers</p>
                </li>
                <li className="my-4">
                  <p>no prime</p>
                </li>
                <li className="my-4">
                  <p>no exclusive offers</p>
                </li>
                <li className="my-4">
                  <p>no prime</p>
                </li>
              </ol>
            </div>
            <div className="buttonAnimaton rounded-xl py-2 px-4 mb-3 bg-gray-900 text-white font-bold text-lg w-full text-center">
              <button>monthly.rs - Submit</button>
            </div>
          </div>

          <div className="membership flex flex-col justify-between">
            <div className="text-center my-2">
              <h1 className="font-bold text-black text-3xl truncate">Custom</h1>
            </div>
            <div className="text-black text-xl m-2 p-2 h-[78%]">
              <ol>
                <li className="my-4">
                  <p>free delivery above 500rs</p>
                </li>
                <li className="my-4">
                  <p>new offers after 2 two days</p>
                </li>
                <li className="my-4">
                  <p>no exclusive offers</p>
                </li>
                <li className="my-4 flex">
                    <input type="number" placeholder="0" className=" w-20 text-center mr-2"/>
                  <p>months</p>
                </li><li className="my-4">
                  <p>free delivery above 500rs</p>
                </li>
                <li className="my-4">
                  <p>new offers after 2 two days</p>
                </li>
                <li className="my-4">
                  <p>no exclusive offers</p>
                </li>
                <li className="my-4">
                  <p>no prime</p>
                </li>
              </ol>
            </div>
            <div className="buttonAnimaton rounded-xl py-2 px-4 mb-3 bg-gray-900 text-white font-bold text-lg w-full text-center">
              <button>custom.rs - Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div>reviews</div>
    </div>
  );
}

export default LandBody;
