import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import axios from 'axios'
import Footer from './components/Footer';

function App() {

  const [search,setSearch] = useState([]);
  const [recipes,setRecipes] = useState([]);

  const handleClick = (e) =>{
    e.preventDefault();
    getResults(search);
  }

  const getResults = async (ingredient) =>{
    try{
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`)
      setRecipes(res.data.meals);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getResults(search);
  }
  ,[search]);
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full absolute mt-20 flex items-center justify-center z-[-1] bg-[url('https://images.template.net/wp-content/uploads/2016/08/17070259/Food-Websites-Image.jpg')] h-3/5 bg-center bg-cover">
        <form className="h-10 flex justify-center w-64">
          <input 
            type="text" 
            className="shadow-md rounded-l-full font-[Poppins] text-gray-800 pl-2" placeholder="Enter an ingridient"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          <button 
            className="bg-red-600 w-44 rounded-r-full hover:bg-red-800" 
            type="submit"
            onClick={handleClick}
          >
              Search
          </button>
        </form>
      </div>
      <div className = "absolute p-8 text-2xl text-gray-600 font-semibold top-3/4 w-full z-[-1]">
        <h1>Top Recipes:</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {(recipes != null) ? recipes.map((recipe)=>{
          console.log(recipe);
          return(
          <Cards 
            key={recipe.idMeal}
            id={recipe.idMeal}
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            category={recipe.strCategory}
            area={recipe.strArea}
            instructions={recipe.strInstructions}
            youtube={recipe.strYoutube}
          />
        )}):
        <div className = "md:-ml-16 grid md:grid-cols-1 md:w-screen grid-cols-1">
          <div className="flex inset-0 justify-center items-center flex-col">
            <img src="https://i.pinimg.com/736x/8e/83/6f/8e836f537ec522948c28b4970c66fce4.jpg" alt="" className="md:w-1/5"></img>
            <h1 className="text-center">No Recipes Found</h1>
          </div>
          
        </div>
        

      }
        </div>
        <div className="md:mt-40 mt-80">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
