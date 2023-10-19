import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
        data-aos="zoom-in"
        data-aos-duration="500"
         className="hero h-[400px] bg-base-200">
  <div className="hero-content mx-10 flex-col lg:flex-row-reverse">
    <img src="https://imgdb.net/storage/uploads/7b3a42b148f6e808e64d0323339289aafca3a101ab808dfa54000801c78ae3c0.png" className="max-w-xl rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Latest Mobile Phones!</h1>
      <p className="py-6">Mobile phones have become a crucial part of our daily lives. The market is flooded with various brands that offer different features and prices. </p>
      <div data-aos="flip-right" data-aos-duration="2000">
      <Link to="/brands"><button className="btn btn-primary">All Brands</button></Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;