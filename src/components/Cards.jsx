import React from "react";

function Cards({ item }) {
  const handlePlayNow = () => {
    window.location.href = "https://poki.com/en/g/subway-surfers";
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} className="object-fill h-50 w-1/2" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
          <div className="card-actions justify-between items-center mt-2">
            <span className="badge badge-outline">${item.price}</span>
            <button
              onClick={handlePlayNow}
              className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white transition-colors duration-200"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

