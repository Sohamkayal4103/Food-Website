import React from 'react'

const Cards = ({key,id,name,image,category,area,instructions,youtube}) => {
  // console.log(`Inside recipe funtion: ${recipe.strMeal}`);
  
  return (
    <div>
      <div className="bg-white shadow-md mt-6 md:w-full w-full text-lg rounded-lg z-[-1]">
        <div className="object-contain">
          <img src={image} alt="" className="rounded-t-lg"/>
        </div>
        <div className="p-4 py-6">
          <h2>{name}</h2>
          <p className="text-sm text-gray-400">
            {category} | {area}
          </p>
        </div>
        <div>
          <div className="pb-4 flex justify-end text-sm md:text-lg">
            <button className="shadow-lg p-2 m-2 bg-primary hover:bg-neutral-300 rounded-md">Read Full Recipe</button>
            <a href={youtube} className="shadow-lg p-2 m-2 bg-primary hover:bg-neutral-300 rounded-md" rel="noopener noreferrer" target="_blank" >Watch Video</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards