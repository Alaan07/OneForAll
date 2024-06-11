import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from "react-redux";
import reviews from "../../dataStorage/reviewsData";


function LandBodyReviews() {

  const [reviewText, setReviewText] = useState("");
  const [costomerEmail, setCostomerEmail] = useState("");


  const updateEmail = (e) => {
    setCostomerEmail(e.target.value);
  }

    const reviewArea = (e) => {
      setReviewText(e.target.value);
     } 

     const reviewSubmit = () =>{
      console.log(reviewText);
      console.log(costomerEmail);
      setReviewText("");
     }
   

// const reviews = useSelector(state => state.reviews)



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

    {/* ****************** */}

       {reviews.map((review) => (
        <div className="reviews-body flex flex-col sm:flex-row justify-center my-8 py-4" key={review.id}>
          <div className="reviewer-details flex flex-col sm:flex-row justify-center w-full">
            <div className="w-full sm:w-[45%] flex justify-end my-8 pr-10 ">
              <img
                src="/public/image/profilepic/The-6-Different-Types-Of-Face-Shapes.jpg"
                alt="pic"
                className="object-cover h-[80px] w-[80px]  rounded-full"
              />
              <h2 className="text-xl font-bold mx-6 my-2 w-[40%]">{review.name}</h2>
            </div>

            <div className="reviews-data w-full sm:w-[55%] my-4 mx-2">
              <p className="my-2">
                <span>⭐⭐⭐⭐⭐</span> {review.date}
              </p>
              <div className="w-[80%]">
                {review.reviewData}
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
      )) }

{/* ************************ */}

        <div className="flex justify-center flex-col items-center lg:flex-row  w-full  ">
          <div className="w-[100%] lg:w-[50%] flex justify-center border-r-4 border-r-gray-300">
             <textarea name="" id="" cols="60" rows="10" className="border-2 p-6 my-8 mx-4 text-lg" placeholder="Write your reviews here!" value={reviewText} onChange={reviewArea}></textarea>
             {/* use meadiaquery on textarea in css to make it responsive  */}
          </div>
          <div className="w-[100%] lg:w-[50%]  flex  flex-col items-center">
              <h2 className="text-3xl font-bold mt-4 mb-2 p-2">Please Rate us Here...</h2>
              <div className="flex justify-evenly">
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
                <p className="m-2 p-2 bg-gray-200 rounded-xl hover:bg-gray-900 hover:text-yellow-500"><span><StarIcon/></span></p>
              </div>

              <div className=" flex justify-center my-4 p-2">
                <input type="email" name="" id=""  placeholder="Enter your Email" required className=" text-lg border-2 border-gray-300 h-12 px-2 py-2 mx-2 outline-none rounded-lg w-80" value={costomerEmail} onChange={updateEmail}/>

                <button className="border-2 border-gray-500 rounded-lg px-4 py-2 text-gray-600 truncate text-lg hover:bg-gray-900 hover:text-white mx-2" onClick={reviewSubmit} >Submit</button>
              </div>
              
              <p className="text-xl font-bold px-2 py-2 my-4 mx-2 text-center">Please enter the Registered email address in the above input box before submiting your Reviews</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default LandBodyReviews;
