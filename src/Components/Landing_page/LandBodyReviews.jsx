import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from '@mui/icons-material/Star';

function LandBodyReviews() {
  return (
    <div className="mx-4 my-6">
      <div className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-36 my-2 py-2">
        <h2 className="text-4xl font-bold truncate">Reviews</h2>
        <button className="border-2 border-gray-500 rounded-lg px-4 py-2 text-gray-600 truncate text-lg hover:bg-gray-900 hover:text-white">
          14-May-2021 <CalendarMonthIcon className="text-lg" />
        </button>
      </div>

      <div className="ReviewsSections mt-6 mb-4">
        <div className="ReviewsHeader flex justify-evenly">
          <div className="TotalReviews my-4 border-r-0 md:border-r-4 border-gray-300 w-[50%] md:w-[25%]">
            <h2 className="text-lg text-black font-bold mx-2 my-3 truncate">
              Total Reviews
            </h2>
            <p className="text-3xl text-black font-bold mx-2 my-3 truncate">
              10.2K
            </p>
            <p className="text-md text-gray-500 font-bold mx-2 my-3 truncate">
              Average reviews this year
            </p>
          </div>
          <div className="AverageReviews my-4 border-r-0 md:border-r-4 border-gray-300 w-[50%] md:w-[25%]">
            <h2 className="text-lg text-black font-bold mx-2 my-3 truncate">
              Average Rating
            </h2>
            <p className="text-3xl text-black font-bold mx-2 my-3 truncate">
              5 <span className="text-xl">⭐⭐⭐⭐⭐</span>
            </p>
            <p className="text-md text-gray-500 font-bold mx-2 my-3 truncate">
              Average rating this year
            </p>
          </div>
          <div className="StartCount my-4  justify-center hidden md:flex">
            <div className=" mr-4">
              <p>5.</p>
              <p>4.</p>
              <p>3.</p>
              <p>2.</p>
              <p>1.</p>
            </div>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p>⭐⭐⭐⭐ </p>
              <p>⭐⭐⭐ </p>
              <p>⭐⭐ </p>
              <p>⭐</p>
            </div>
          </div>
        </div>

        <div className="reviews-body flex flex-col sm:flex-row justify-center my-8 py-4">
          <div className="reviewer-details flex flex-col sm:flex-row justify-center">
            <div className="w-full sm:w-[45%] flex justify-center my-8">
              <img
                src="/public/image/profilepic/The-6-Different-Types-Of-Face-Shapes.jpg"
                alt="pic"
                className="object-cover h-[80px] w-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mx-6 my-2">simon singh</h2>
            </div>

            <div className="reviews-data w-full sm:w-[55%] my-4 mx-2">
              <p className="my-2">
                <span>⭐⭐⭐⭐⭐</span> 14-May-2021
              </p>
              <div className="w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, quae! Nesciunt quos voluptatem ipsa voluptate cum
                eum vel sit dolore a sequi quas corporis possimus odio odit
                delectus, incidunt veniam harum dolorum. Totam aperiam at
                placeat exercitationem voluptatibus, ea temporibus a recusandae
                possimus aut sed ex, quod quia. Quam, fuga.
              </div>
              <button className="border-2 border-gray-500 rounded-lg px-3 py-2 text-gray-600 truncate text-lg hover:bg-gray-900 hover:text-white my-4 mx-2">
                public comment
              </button>
              <button className="border-2 border-gray-500 rounded-lg px-3 py-2 text-gray-600 truncate text-lg hover:bg-gray-900 hover:text-white my-4 mx-2">
                direct comment
              </button>
              <button className="border-2 border-gray-500 rounded-lg px-3 py-2 text-gray-600 truncate text-lg  hover:text-red-700 my-4 mx-2">
                <FavoriteIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full  ">
          <div className="w-[50%] flex justify-center border-r-4 border-r-gray-300">
             <textarea name="" id="" cols="60" rows="10" className="border-2 p-6 my-8 text-lg" placeholder="Write your reviews here!"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni dolores, cumque nihil ratione aspernatur repellendus consectetur error delectus sint exercitationem! Odit doloremque recusandae, ratione officiis fugiat laudantium. Labore sapiente nesciunt quam doloribus vero aperiam voluptatibus quis! Quasi inventore sunt repellendus repudiandae ut aliquid placeat ex ad ipsum, nostrum libero.</textarea>
          </div>
          <div className="w-[50%] flex  flex-col items-center">
              <h2 className="text-3xl font-bold mt-4 mb-2 p-2">Please Rate us Here...</h2>
              <div className="flex justify-evenly">
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
              </div>

              <div className=" flex justify-center my-4 p-2">
                <input type="email" name="" id=""  placeholder="Enter your Email" required className=" text-lg border-2 border-gray-300 h-12 px-2 py-2 mx-2 outline-none rounded-lg w-80"/>

                <button className="border-2 border-gray-500 rounded-lg px-4 py-2 text-gray-600 truncate text-lg hover:bg-gray-900 hover:text-white mx-2">Submit</button>
              </div>
              
              <p className="text-xl font-bold px-2 py-2 my-4 mx-2 text-center">Please enter the Registered email address in the above input box before submiting your Reviews</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default LandBodyReviews;
