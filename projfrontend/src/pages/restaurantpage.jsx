// RestaurantPage.js

import React from "react";

const restaurants = [
  {
    id: 1,
    name: "Restaurant Name 1",
    verified: true,
    description: "Brief description of the restaurant.",
    location: "Restaurant Address 1",
    phone: "+1 123-456-7890",
    email: "info@example.com",
    map: "Embed map here",
    website: "http://www.restaurant1.com",
    photo: "restaurant1.jpg",
    products: ["Product 1", "Product 2"],
    reviews: ["Review 1", "Review 2"],
  },
  // Add more restaurant objects as needed
];

const RestaurantPage = () => {
  return (
    <div className="container mx-auto my-8">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="border border-solid p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
          {restaurant.verified && (
            <div className="border border-solid p-2 inline-block">
              Verified (1 year with us)
            </div>
          )}
          <p>Location: {restaurant.location}</p>
          <p>Description: {restaurant.description}</p>
          <div className="mt-4">
            <p>Phone: {restaurant.phone}</p>
            <p>Email: {restaurant.email}</p>
            <p>Map: {restaurant.map}</p>
            <p>
              Website:{" "}
              <a
                href={restaurant.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {restaurant.website}
              </a>
            </p>
          </div>
          <img
            src={restaurant.photo}
            alt={`${restaurant.name} Photo`}
            className="mt-4"
          />
          <ul className="list-disc mt-4">
            {restaurant.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <div className="mt-4">
            <h3>Customer Reviews</h3>
            <ul>
              {restaurant.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
            {/* Add a review form or display existing reviews here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantPage;
