import React from 'react';

import "./Reviews.css"

import face1 from "../../assets/face1.jpg"
import face2 from "../../assets/face2.jpg"
import face3 from "../../assets/face3.png"
import face4 from "../../assets/face4.png"
import face5 from "../../assets/face5.PNG"
import face6 from "../../assets/face6.PNG"
const Reviews = () => {

  
const clientReviews = [
  {
    name: 'Sophia Roberts ',
    image: face1,
    quote: "I've been using this IPTV service for months now, and I'm extremely satisfied. The channel selection is excellent, and the streaming quality is top-notch. Customer service is also very responsive and helpful whenever I have questions. Highly recommend!.",
    rating: 5, // Rating out of 5
  },
  {
    name: 'jennifer Smith',
    image: face2,
    quote: "After trying out several IPTV providers, I finally found the perfect one with this service. The plans are affordable, and I love the variety of channels available. Plus, the on-demand content is a huge bonus. I haven't experienced any buffering issues, even during peak times. Overall, I'm very impressed!",
    rating: 4, // Rating out of 5
  },
  {
    name: 'Alice Johnson',
    image: face3,
    quote: "As a frequent traveler, having access to my favorite TV channels wherever I go is a game-changer. This IPTV service allows me to stay connected to my entertainment, no matter where I am in the world. The mobile app is user-friendly, and I appreciate the option to stream on multiple devices. It's the perfect solution for anyone with a busy lifestyle!",
    rating: 5, // Rating out of 5
  },
  {
    name: 'David Lee',
    image: face4,
    quote: "I was skeptical about IPTV at first, but this service exceeded my expectations. The setup was easy, and I was able to start watching my favorite channels right away. The picture quality is fantastic, and I appreciate the option to customize my channel lineup. It's definitely worth the investment!",
    rating: 4, // Rating out of 5
  },
  {
    name: 'Emily Turner',
    image: face5,
    quote: "I've been a loyal customer for over a year now, and I couldn't be happier. The reliability of this IPTV service is unmatched. Whether I'm watching live sports or catching up on my favorite shows, I can always count on a seamless viewing experience. I've recommended it to all my friends and family!",
    rating: 5, // Rating out of 5
  },
  {
    name: 'John Doe',
    image: face6,
    quote: "Impressed with the variety of channels and the quality of service. Been a subscriber for a few months now and haven't looked back. Highly recommend this IPTV provider!",
    rating: 5, // Rating out of 5
  }
  
  // Add more client reviews here
];

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-500' : 'text-gray-400'}`}>&#9733;</span>
    );
  }
  return stars;
}


 
  
  return (
    <div name='reviews' className=' relative work panel py-10      bg-gray-100  w-full  dark:text-black text-black '>
     
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 ">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientReviews.map((review, index) => (
          <figure key={index} className="bg-slate-100 rounded-xl p-8 dark:bg-black text-white">
          <img className="w-24 h-24 rounded-full mx-auto object-cover" src={review.image} alt="" width="384" height="512"/>
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
               {review.quote}
              </p>
            </blockquote>
            <figcaption >
              <div>
               {review.name}
              </div>
              <div className="text-center mt-4">{renderStars(review.rating)}</div>
             
            </figcaption>
          </div>
        </figure>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Reviews;
