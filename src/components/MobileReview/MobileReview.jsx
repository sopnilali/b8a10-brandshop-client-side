import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MobileReview = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        fetch('https://mobilemaya-server-side.vercel.app/reviews')
        .then(res => res.json())
        .then(data =>setReviews(data))
    } ,[])

    console.log(reviews);

    return (
        <>
          <div class="py-4  mx-auto max-w-screen-xl ">
      <div class="mx-auto max-w-screen-sm text-center mb-8">
          <h2 class="mb-2 text-3xl lg:text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Mobile Review</h2>
      </div> 
      <div class="grid gap-8 lg:grid-cols-2">
          {
            reviews.map(review => 
                <article 
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                
                class=" p-6 hover:shadow-none bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center  text-gray-500">
                <Link to={`/products/${review.brandName}`}><span class="bg-primary-100 capitalize hover:link-secondary cursor-pointer text-primary-800 text-base font-semibold inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            {review.brandName}
                </span></Link>
              </div>
                 <div className='flex justify-center item-center'>
                  <div className='my-10 mx-4'>
                      
                      <img src={review?.review_img} alt="" />
                  </div>
                 <div>
                  <h2 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-4">{review.review_title}</h2>
                  <p class="font-light text-gray-500 dark:text-gray-400">{review.review_description.slice(0,180)}</p>
                 </div>
                 </div>
                  <div class="flex justify-between items-center -my-4 mb-1">
                        <div>
                        </div>
                        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                            Read more
                            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                  </div>
                </article>    
                )
          }
                
      </div>  
  </div>  
        </>
    );
};

export default MobileReview;